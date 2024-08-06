// import { openai } from "@ai-sdk/openai";
// import { streamObject } from "ai";
// import { z } from "zod";

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

// const schema = z.object({
// 	context: z.string(),
// });

// export async function POST(req: Request) {
// 	const context = await req.json();

// 	const result = await streamObject({
// 		model: openai("gpt-4-turbo"),
// 		schema: schema,
// 		prompt:
// 			`Genera una breve historia de la gastronomia y recetas en este contexto: ` +
// 			context,
// 	});
// }

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
				`Genera una detallada historia y lista al menos 5 platos tipicos con ingredientes y preparacion de: ` +
				context,
		});

		return result.toTextStreamResponse();
	} catch (error) {
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
