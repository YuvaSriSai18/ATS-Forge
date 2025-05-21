import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<{ message: string }> | NextResponse<{ error: any }>> {
  try {
    return NextResponse.json({ message: "ok" });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to check health" },
      { status: 500 }
    );
  }
}