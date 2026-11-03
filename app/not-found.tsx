import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-neutral-900">Page not found</h1>
      <p className="mt-4 text-neutral-600">This page does not exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/products" className="inline-flex items-center min-h-11 px-5 rounded-md bg-[#0B7A3B] hover:bg-[#096631] text-white text-sm font-semibold">
          Browse products
        </Link>
        <Link href="/" className="inline-flex items-center min-h-11 px-5 rounded-md border border-neutral-300 text-neutral-800 text-sm font-semibold hover:bg-neutral-50">
          Go to home
        </Link>
      </div>
    </section>
  );
}
