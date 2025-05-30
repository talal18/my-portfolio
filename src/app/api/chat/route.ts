import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const TALAL_CONTEXT = `
Talal Qasem is a Front-End Developer with 3+ years of experience in React, TypeScript, JavaScript, HTML, CSS, and testing tools like Jest and Playwright.
Before that, he worked as an HR and operations manager at Majdi Mall and owned a clothing business in Jordan, importing from Turkey.
He enjoys football (AC Milan fan), cars, boxing, bowling (with a video on YouTube), and MMA. He's also interested in robotics and 3D printing.
He likes to share helpful, professional answers — and sometimes a light joke if asked.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant for Talal Qasem. Answer based on his resume and background when relevant.",
        },
        { role: "system", content: TALAL_CONTEXT },
        ...messages,
      ],
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("❌ API Error:", error.message);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
