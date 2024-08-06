import { z } from "zod";

// define a schema for the notifications
export const notificationSchema = z.object({
	notifications: z.array(
		z.object({
			name: z.string().describe("Nombre tipo de comida"),
			message: z
				.string()
				.describe(
					"Mensaje del tipo de comida. Usa emojis cuando sea necesario para mejorar la experiencia del usuario",
				),
		}),
	),
});
