"use client";

import { Path } from "@/components/breadcrumb/path";
import { CarouselImages } from "@/components/shared/carousel-images";
import { DescriptionFoodGenerator } from "@/components/shared/description-food-generator";
import { FormRecipeGenerator } from "@/components/shared/food-generator-form";
import { saladImages } from "@/lib/constants";

const placeholder =
	"Me puedes dar una receta de ensalada rica en carbohidratos y proteínas para prepararme para una Marathon de 42Km?";

const message =
	"Breve descripción de lo importante de las ensaladas en una dieta balanceada";

export default function SaladsPage() {
	return (
		<div className="space-y-6">
			<Path name="Ensaladas" />
			<CarouselImages images={saladImages} />
			<DescriptionFoodGenerator message={message} />
			<FormRecipeGenerator type="salad" placeholder={placeholder} />
		</div>
	);
}
