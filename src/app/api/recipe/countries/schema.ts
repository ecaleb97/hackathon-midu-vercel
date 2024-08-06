import { z } from "zod";

// define a schema for the notifications
export const notificationSchema = z.object({
	notifications: z.array(
		z.object({
			name: z.string().describe("Nombre del pais"),
			message: z
				.string()
				.describe(
					"Mensaje de la receta. Usa emojis cuando sea necesario para mejorar la experiencia del usuario",
				),
		}),
	),
});
