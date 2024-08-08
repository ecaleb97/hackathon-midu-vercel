import { z } from "zod";

export const foodGeneratorFormSchema = z.object({
	message: z
		.string()
		.min(5, { message: "Input must be at least 5 characters" }),
});
