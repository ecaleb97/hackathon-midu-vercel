import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
	title: "Recetas AI",
	description:
		"Recetas AI es una aplicación web que te ayuda a encontrar recetas de cocina sin importar si eres vegano o vegetariano.",
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
