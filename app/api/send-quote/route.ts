import { NextRequest, NextResponse } from "next/server";
import { sendQuoteNotification } from "@/lib/email";
import { parseQuote } from "@/lib/quote";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = parseQuote(body);

  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    await sendQuoteNotification(parsed.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending quote email:", error);
    return NextResponse.json(
      { error: "Failed to process quote request. Please reach us directly via WhatsApp or email." },
      { status: 500 }
    );
  }
}
