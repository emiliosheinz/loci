import { NextResponse } from "next/server";

export async function GET() {
  const response = { status: "ok", timestamp: new Date().toISOString() };
  return NextResponse.json(response, { status: 200 });
}
