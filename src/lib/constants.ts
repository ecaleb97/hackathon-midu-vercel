import { StaticImageData } from "next/image";

export const items = [
	{
		title: "Vegetariano",
		href: "/recetas/vegetariano",
	},
	{
		title: "Vegano",
		href: "/recetas/vegano",
	},
	{
		title: "Ensaladas",
		href: "/recetas/ensaladas",
	},
	{
		title: "Postres",
		href: "/recetas/postres",
	},
	{
		title: "Animal",
		href: "/recetas/carnes",
	},
];

export interface CarouselProps {
	images: Array<ImageProps>;
}

interface ImageProps {
	src: StaticImageData;
	alt: string;
}
