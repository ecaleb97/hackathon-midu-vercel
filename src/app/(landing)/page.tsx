"use client";

import { MarqueeFoodImages } from "@/components/shared/food-images";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/lib/fonts";
import Link from "next/link";

export default function LandingPage() {
	return (
		<main>
			<LandingHero />
			<LandingContent />
		</main>
	);
}

function LandingHero() {
	return (
		<div className="text-center space-y-6 py-20 px-4">
			<h1
				className={`text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl ${montserrat.className}`}
			>
				Descubre lo mejor de cada <br />{" "}
				<span
					className="bg-gradient-to-r from-amber-500 
					via-orange-600 to-yellow-500 bg-clip-text text-transparent"
				>
					gastronomía
				</span>
			</h1>
			<h2 className="text-gray-600 sm:text-xl">
				Recetas AI te ayuda a encontrar las mejores recetas de todo el mundo
			</h2>
			<Button className="rounded-full px-6" asChild>
				<Link href={"/recipes"}>Explora gastronomías</Link>
			</Button>
		</div>
	);
}

function LandingContent() {
	return <MarqueeFoodImages />;
}
