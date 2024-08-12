import { Path } from "@/components/breadcrumb/path";
import { CarouselImages } from "@/components/shared/carousel-images";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import vegetarian from "@/assets/images/vegetarian.webp";
import vegan from "@/assets/images/vegan.webp";
import ensaladaPasta from "@/assets/images/ensaladaPasta.webp";
import postre from "@/assets/images/postre.webp";
import asadoArgentino from "@/assets/images/asadoArgentino.webp";
import salmon from "@/assets/images/salmon.webp";
import { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "Explorar",
// 	description: "Explora los diferentes tipos de comida",
// };

const items = [
	{
		label: "Comida Vegetariana",
		href: "/recetas/vegetariano",
	},
	{
		label: "Comida Vegana",
		href: "/recetas/vegano",
	},
	{
		label: "Ensaladas",
		href: "/recetas/ensaladas",
	},
	{
		label: "Postres",
		href: "/recetas/postres",
	},
	{
		label: "Carnes y pescados",
		href: "/recetas/carnes",
	},
];

const images = [
	{
		src: vegetarian,
		alt: "Plato vegetariano",
	},
	{
		src: vegan,
		alt: "Plato vegano",
	},
	{
		src: ensaladaPasta,
		alt: "Ensalada de pasta",
	},
	{
		src: postre,
		alt: "Postre de maracuya",
	},
	{
		src: asadoArgentino,
		alt: "Asado argentino",
	},
	{
		src: salmon,
		alt: "Salmón al horno",
	},
];

export default function ExplorerPage() {
	return (
		<main className="max-w-6xl px-4 my-4 md:my-14 space-y-6 mx-auto">
			<Path name="Explorar" />
			<h2 className="text-4xl font-extrabold">Tipos de comida</h2>
			<CarouselImages images={images} />
			<div className="space-y-5">
				{items.map((item) => (
					<Card key={item.href} className="p-4">
						<Button
							asChild
							variant={"link"}
							className="text-gray-900/90 text-[15px]"
						>
							<Link href={item.href}>{item.label}</Link>
						</Button>
					</Card>
				))}
			</div>
		</main>
	);
}
