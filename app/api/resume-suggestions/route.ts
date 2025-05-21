import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pdfParse from "pdf-parse";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function extractTextFromPDFUrl(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch PDF from URL: ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const parsed = await pdfParse(buffer);
  return parsed.text;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const pdfUrl = body.url;

    if (!pdfUrl) {
      return NextResponse.json(
        { error: "PDF URL is required." },
        { status: 400 }
      );
    }

    const extractedText = await extractTextFromPDFUrl(pdfUrl);

    const prompt = `
You are a resume expert. Here's a resume. Please suggest:
- Improvements
- Role-specific keywords
- Clearer phrasing
- Better formatting ideas

Resume:
${extractedText}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const suggestions = response.text();

    return NextResponse.json({ message: `Received pdf URL` });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to analyze PDF from URL." },
      { status: 500 }
    );
  }
}
