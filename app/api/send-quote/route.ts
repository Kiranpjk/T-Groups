import { NextRequest, NextResponse } from "next/server";
import { sendQuoteNotification, QuoteRequestPayload } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body: QuoteRequestPayload = await req.json();

    // Basic validation
    if (!body.fullName || !body.email || !body.product || !body.country) {
      return NextResponse.json(
        { error: "Please fill in all mandatory fields (Name, Email, Product, Country)." },
        { status: 400 }
      );
    }

    const result = await sendQuoteNotification(body);

    return NextResponse.json({
      success: true,
      message: "Your Request for Quotation (RFQ) has been submitted successfully! Our export desk will review and provide a detailed proforma quote within 24 hours.",
      details: result,
    });
  } catch (error: any) {
    console.error("Error sending quote email:", error);
    return NextResponse.json(
      { error: "Failed to process quote request. Please reach us directly via WhatsApp or email." },
      { status: 500 }
    );
  }
}
