import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    message: 'Contact endpoint stub received payload. Connect your CRM or email service here.',
    received: body,
  });
}
