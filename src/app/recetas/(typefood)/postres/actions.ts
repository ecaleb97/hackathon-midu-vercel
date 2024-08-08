"use server";

import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";

export async function generate(input: string) {
	"use server";

	const stream = createStreamableValue();

	(async () => {
		const { partialObjectStream } = await streamObject({
			model: openai("gpt-4-turbo"),
			system: `Eres un experto repostero`,
			prompt: input,
			schema: z.object({
				notifications: z.object({
					name: z.string(),
					ingredients: z.array(
						z.object({
							name: z.string(),
							amount: z.string(),
						}),
					),
					steps: z.array(z.string()),
				}),
			}),
		});

		for await (const partialObject of partialObjectStream) {
			stream.update(partialObject);
		}

		stream.done();
	})();

	return { object: stream.value };
}
