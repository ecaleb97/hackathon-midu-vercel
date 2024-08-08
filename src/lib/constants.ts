import { StaticImageData } from "next/image";
import vegetarian from "@/assets/images/vegetarian.webp";
import calabacin from "@/assets/images/calabacin.webp";
import pizzaVegetariana from "@/assets/images/pizzaVegetariana.webp";
import vegan from "@/assets/images/vegan.webp";
import veganSalad from "@/assets/images/veganSalad.webp";
import paella from "@/assets/images/paella.webp";
import sushi from "@/assets/images/sushi.webp";
import salmon from "@/assets/images/salmon.webp";
import cocido from "@/assets/images/cocido.webp";
import pulpoGallega from "@/assets/images/pulpoGallega.webp";
import ensaladaPasta from "@/assets/images/ensaladaPasta.webp";
import ensaladaCesar from "@/assets/images/ensaladaCesar.webp";
import ensaladaGriega from "@/assets/images/ensaladaGriega.webp";
import postre from "@/assets/images/postre.webp";
import strawberryDessert from "@/assets/images/postreFresa.webp";
import postreVaso from "@/assets/images/postreVaso.webp";
import tartaChocolate from "@/assets/images/tartaChocolate.webp";
import postreKiwi from "@/assets/images/postreKiwi.webp";
import veganBurger from "@/assets/images/veganBurger.webp";
import veganSalad2 from "@/assets/images/veganSalad2.webp";
import veganSalad3 from "@/assets/images/veganSalad3.webp";

export const veganImages = [
	{
		src: vegan,
		alt: "Ensalada vegana",
	},
	{
		src: veganSalad,
		alt: "Ensalada vegana",
	},
	{
		src: veganBurger,
		alt: "Hamburguesa vegana",
	},
	{
		src: veganSalad2,
		alt: "Ensalada vegana",
	},
	{
		src: veganSalad3,
		alt: "Ensalada vegana",
	},
];

export const dessertImages = [
	{
		src: postre,
		alt: "Postre de maracuya",
	},
	{
		src: strawberryDessert,
		alt: "Cheesecake de fresa",
	},
	{
		src: postreVaso,
		alt: "Postre en vaso",
	},
	{
		src: tartaChocolate,
		alt: "Tarta de chocolate",
	},
	{
		src: postreKiwi,
		alt: "Postre Kiwi",
	},
];

export const saladImages = [
	{
		src: ensaladaPasta,
		alt: "Ensalada de pasta",
	},
	{
		src: vegan,
		alt: "Ensalada vegana",
	},
	{
		src: vegetarian,
		alt: "Ensalada vegetariana",
	},
	{
		src: ensaladaCesar,
		alt: "Ensalada cesar",
	},
	{
		src: ensaladaGriega,
		alt: "Ensalada griega",
	},
];

export const meatImages = [
	{
		src: paella,
		alt: "Paella",
	},
	{
		src: sushi,
		alt: "Sushi",
	},
	{
		src: salmon,
		alt: "Salmon",
	},
	{
		src: cocido,
		alt: "Cocido Madrileño",
	},
	{
		src: pulpoGallega,
		alt: "Pulpo a la gallega",
	},
];

export const vegetarianImages = [
	{
		src: vegetarian,
		alt: "Ensalada vegetariana",
	},
	{
		src: calabacin,
		alt: "Calabacin",
	},
	{
		src: pizzaVegetariana,
		alt: "Pizza vegetariana",
	},
	{
		src: vegan,
		alt: "Ensalada vegana",
	},
	{
		src: veganSalad,
		alt: "Ensalada vegana",
	},
];

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
