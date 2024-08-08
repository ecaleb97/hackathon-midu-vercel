"use client";

import { Path } from "@/components/breadcrumb/path";
import { CarouselImages } from "@/components/shared/carousel-images";
import { DescriptionFoodGenerator } from "@/components/shared/description-food-generator";
import { FormRecipeGenerator } from "@/components/shared/food-generator-form";
import { veganImages } from "@/lib/constants";

const placeholder =
	"Hoy me gustaría comer una hamburguesa vegana, pero no se me ocurre ninguna receta, ¿me puedes ayudar?";

const message =
	"Breve información comer vegetales y frutas es importante para mantener una salud equilibrada";

export default function VeganPage() {
	return (
		<div className="space-y-6">
			<Path name="Vegano" />
			<CarouselImages images={veganImages} />
			<DescriptionFoodGenerator message={message} />
			<FormRecipeGenerator type="vegan" placeholder={placeholder} />
		</div>
	);
}
