import { NextResponse } from "next/server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

// export const maxDuration = 30;

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();

		if (!messages) {
			return new NextResponse("Bad Request: Messages is required", {
				status: 400,
			});
		}

		const response = await streamText({
			model: openai("gpt-4-turbo"),
			system: `Eres un experto chef y nutricionista de ensaladas. Debes mostrar a tu cliente cómo 
				hacer una receta saludable y deliciosa. (importante, tiene que ser una ensalada).`,
			messages,
		});

		return response.toAIStreamResponse();
	} catch (error) {
		console.log("[ERROR]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
