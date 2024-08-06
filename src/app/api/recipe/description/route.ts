import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { NextResponse } from "next/server";
import { notificationSchema } from "./schema";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	try {
		const context = await req.json();

		const result = await streamObject({
			model: openai("gpt-4-turbo"),
			schema: notificationSchema,
			prompt:
				`Genera una breve descripcion de: ` +
				context,
		});

		return result.toTextStreamResponse();
	} catch (error) {
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
