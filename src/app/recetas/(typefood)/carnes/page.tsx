import { Path } from "@/components/breadcrumb/path";
import { meatImages } from "@/lib/constants";
import { CarouselImages } from "@/components/shared/carousel-images";
import { DescriptionFoodGenerator } from "@/components/shared/description-food-generator";
import { FormRecipeGenerator } from "@/components/shared/food-generator-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Carnes y pescados",
	description: "Disfruta de los mejores platos con carnes y pescados",
};

const placeholder =
	"Hoy tengo una reunión con amigos y me gustaría preparar un asado argentino 🇦🇷 ¿me puedes ayudar?";

export default function MeatPage() {
	return (
		<div className="space-y-6">
			<Path name="Carnes y pescados" />
			<CarouselImages images={meatImages} />
			<DescriptionFoodGenerator message="Breve descripcion de las comidas de carne y pescado" />
			<FormRecipeGenerator type="meat" placeholder={placeholder} />
		</div>
	);
}
