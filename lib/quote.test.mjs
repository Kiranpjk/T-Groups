import assert from 'node:assert/strict';
import { test } from 'node:test';
import { escapeHtml, formatQuantity, parseQuote } from './quote.ts';

const valid = { fullName: 'A', email: 'a@b.co', product: 'Onion', country: 'UAE' };

test('rejects missing required fields and non-objects', () => {
  assert.equal(parseQuote(null).ok, false);
  assert.equal(parseQuote({ ...valid, email: '' }).ok, false);
  // The field name the product modal used to send by mistake.
  assert.equal(parseQuote({ fullName: 'A', emailAddress: 'a@b.co', product: 'O', country: 'U' }).ok, false);
});

test('rejects bad email and oversized fields', () => {
  assert.equal(parseQuote({ ...valid, email: 'a@b' }).ok, false);
  assert.equal(parseQuote({ ...valid, email: 'a b@c.co' }).ok, false);
  assert.equal(parseQuote({ ...valid, fullName: 'x'.repeat(201) }).ok, false);
  assert.equal(parseQuote({ ...valid, message: 'x'.repeat(5001) }).ok, false);
});

test('defaults optional fields and coerces non-strings', () => {
  const result = parseQuote({ ...valid, whatsappPhone: 123 });
  assert.equal(result.ok, true);
  assert.equal(result.data.whatsappPhone, '');
  assert.equal(result.data.message, '');
});

test('strips newlines from header-bound fields, keeps them in message', () => {
  const result = parseQuote({ ...valid, product: 'Onion\r\nBcc: x@y.z', message: 'a\nb' });
  assert.equal(result.data.product, 'Onion Bcc: x@y.z');
  assert.equal(result.data.message, 'a\nb');
});

test('escapes HTML', () => {
  assert.equal(escapeHtml(`<img src=x onerror="a('b')">&`), '&lt;img src=x onerror=&quot;a(&#39;b&#39;)&quot;&gt;&amp;');
});

test('adds MT only to bare numbers', () => {
  assert.equal(formatQuantity('25'), '25 MT');
  assert.equal(formatQuantity('1 x 40ft FCL, 20 MT'), '1 x 40ft FCL, 20 MT');
  assert.equal(formatQuantity(''), '');
});
