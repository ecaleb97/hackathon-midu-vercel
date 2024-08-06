import { NextResponse } from "next/server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const maxDuration = 50;

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();

		if (!messages) {
			return new NextResponse("Bad Request: Input is required", {
				status: 400,
			});
		}

		const response = await streamText({
			model: openai("gpt-4-turbo"),
			system: `Eres un experto chef y nutricionista vegetariano. Debes mostrar a tu cliente cómo 
				hacer una receta saludable y deliciosa. Tienes que mostrar los ingredientes y la preparación paso a paso (importante, tiene que ser vegetariano).`,
			messages,
		});

		return response.toAIStreamResponse();
	} catch (error) {
		console.log("[ERROR]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
