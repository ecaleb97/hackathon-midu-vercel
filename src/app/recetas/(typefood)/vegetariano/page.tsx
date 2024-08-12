import { Path } from "@/components/breadcrumb/path";
import { CarouselImages } from "@/components/shared/carousel-images";
import { DescriptionFoodGenerator } from "@/components/shared/description-food-generator";
import { FormRecipeGenerator } from "@/components/shared/food-generator-form";
import { vegetarianImages } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Vegetariano",
	description:
		"Disfruta de las mejores recetas vegetarianas para mantener una dieta equilibrada",
};

const placeholder = `Hoy me gustaria comer una ensalada vegetariana que contenga una alta cantidad de legumbres pero no tengo idea, esta vez no tengo huevos, que me recomiendas?`;

const message =
	"Breve información comer vegetales y frutas es importante para mantener una salud equilibrada";

export default function VegetarianPage() {
	return (
		<div className="space-y-6">
			<Path name="Vegetariano" />
			<CarouselImages images={vegetarianImages} />
			<DescriptionFoodGenerator message={message} />
			<FormRecipeGenerator type="vegetarian" placeholder={placeholder} />
		</div>
	);
}
