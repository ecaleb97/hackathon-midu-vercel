"use client";

import { Path } from "@/components/breadcrumb/path";
import { CarouselImages } from "@/components/shared/carousel-images";
import { DescriptionFoodGenerator } from "@/components/shared/description-food-generator";
import { FormRecipeGenerator } from "@/components/shared/food-generator-form";
import { dessertImages } from "@/lib/constants";

const placeholder =
	"Hoy quiero sorprender a mi madre con un postre especial, ¿que me recomiendas?";

const message =
	"Breve información sobre los postres y porque es importante en una dieta balanceada";

export default function DessertsPage() {
	return (
		<div className="space-y-6">
			<Path name="Postres" />
			<CarouselImages images={dessertImages} />
			<DescriptionFoodGenerator message={message} />
			<FormRecipeGenerator type="dessert" placeholder={placeholder} />
		</div>
	);
}
