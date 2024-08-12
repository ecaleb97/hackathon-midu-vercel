import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Recetas AI",
		short_name: "Recetas AI",
		description:
			"Recetas AI te ayuda a encontrar recetas de cocina con los ingredientes que tienes en casa usando inteligencia artificial.",
		start_url: "/",
		display: "standalone",
		theme_color: "#000000",
		background_color: "#ffffff",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
