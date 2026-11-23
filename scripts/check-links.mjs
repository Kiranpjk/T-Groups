// Crawls a running site (default http://localhost:3000) and fails if any
// internal page, link or image returns an error status (remote images are skipped).
// Usage: node scripts/check-links.mjs [baseUrl]
const base = new URL(process.argv[2] || 'http://localhost:3000');
const toVisit = ['/', '/sitemap.xml', '/robots.txt'];
const seen = new Set();
const broken = [];
const attr = /\s(?:href|src)="([^"#]+)/g;

function internal(raw, from) {
  try {
    const url = new URL(raw.replace(/&amp;/g, '&'), new URL(from, base));
    if (url.origin !== base.origin) return null;
    // Remote images go through the optimizer; their availability is up to the remote host.
    if (url.pathname === '/_next/image' && /^https?:/.test(url.searchParams.get('url') || '')) return null;
    return url.pathname + url.search;
  } catch {
    return null;
  }
}

while (toVisit.length) {
  const path = toVisit.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  const res = await fetch(new URL(path, base), { redirect: 'follow' });
  if (!res.ok) {
    broken.push(`${res.status} ${path}`);
    continue;
  }
  const type = res.headers.get('content-type') || '';
  if (!type.includes('text/html') && !type.includes('xml')) continue;
  const body = await res.text();
  // Sitemap URLs use the production domain; check them by path on this server.
  if (type.includes('xml')) {
    for (const [, loc] of body.matchAll(/<loc>([^<]+)<\/loc>/g)) toVisit.push(new URL(loc).pathname);
    continue;
  }
  for (const [, raw] of body.matchAll(attr)) {
    const next = internal(raw, path);
    if (next && !seen.has(next)) toVisit.push(next);
  }
}

console.log(`checked ${seen.size} internal URLs`);
if (broken.length) {
  console.error(`broken:\n  ${broken.join('\n  ')}`);
  process.exit(1);
}
