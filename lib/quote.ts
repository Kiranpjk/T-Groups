export interface QuoteRequestPayload {
  fullName: string;
  companyName: string;
  email: string;
  whatsappPhone: string;
  country: string;
  product: string;
  quantityMT: string;
  packingRequirement: string;
  destinationPort: string;
  preferredIncoterm: string;
  preferredShipmentDate: string;
  modeOfFreight: string;
  message: string;
}

const SINGLE_LINE_FIELDS = [
  'fullName',
  'companyName',
  'email',
  'whatsappPhone',
  'country',
  'product',
  'quantityMT',
  'packingRequirement',
  'destinationPort',
  'preferredIncoterm',
  'preferredShipmentDate',
  'modeOfFreight',
] as const;

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// A bare number means metric tons; free text such as "1 x 40ft FCL" already carries its unit.
export function formatQuantity(quantity: string): string {
  return /^\d+(\.\d+)?$/.test(quantity) ? `${quantity} MT` : quantity;
}

export function parseQuote(
  body: unknown,
): { ok: true; data: QuoteRequestPayload } | { ok: false; error: string } {
  if (typeof body !== 'object' || body === null) {
    return { ok: false, error: 'Invalid request.' };
  }

  const input = body as Record<string, unknown>;
  const data = {} as QuoteRequestPayload;

  for (const field of SINGLE_LINE_FIELDS) {
    const value = input[field];
    // Newlines are stripped because these values reach the email subject header.
    data[field] = typeof value === 'string' ? value.replace(/[\r\n]+/g, ' ').trim() : '';
    if (data[field].length > MAX_FIELD_LENGTH) {
      return { ok: false, error: 'One of the fields is too long. Please shorten it and try again.' };
    }
  }

  data.message = typeof input.message === 'string' ? input.message.trim() : '';
  if (data.message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: 'Your message is too long. Please shorten it and try again.' };
  }

  if (!data.fullName || !data.email || !data.product || !data.country) {
    return { ok: false, error: 'Please fill in all mandatory fields (Name, Email, Product, Country).' };
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  return { ok: true, data };
}
