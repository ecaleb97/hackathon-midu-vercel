import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
	title: {
		template: "%s | Recetas AI",
		default: "Recetas AI",
	},
	description:
		"Recetas AI es una aplicación web que te ayuda a encontrar recetas de cocina sin importar si eres vegano o vegetariano.",
	metadataBase: new URL("https://recetas.ecaleb.dev"),
	alternates: {
		canonical: "https://recetas.ecaleb.dev",
	},
	generator: "Recetas AI",
	applicationName: "Recetas AI",
	creator: "Caleb Zamalloa",
	publisher: "Caleb Zamalloa",
	authors: [
		{
			name: "Caleb Zamalloa",
			url: "https://ecaleb.dev",
		},
	],
	formatDetection: {
		email: false,
		telephone: false,
		address: false,
	},
	openGraph: {
		title: "Recetas AI",
		description:
			"Recetas AI es una aplicación web que te ayuda a encontrar recetas de cocina sin importar si eres vegano o vegetariano.",
		url: "https://recetas.ecaleb.dev",
		siteName: "Recetas AI",
		locale: "es_ES",
		type: "website",
	},
	manifest: "https://recetas.ecaleb.dev/manifest.json",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	twitter: {
		title: "Recetas AI",
		card: "summary_large_image",
	},
	icons: {
		icon: [
			{
				url: "/favicon.ico",
			},
			new URL("/favicon.ico", "https://recetas.ecaleb.dev"),
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
