import { Path } from "@/components/breadcrumb/path";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const gastronomies = [
	{
		label: "Española 🇪🇸",
	},
	{
		label: "Italiana 🇮🇹",
	},
	{
		label: "Mexicana 🇲🇽",
	},
	{
		label: "Japonesa 🇯🇵",
	},
	{
		label: "Peruana 🇵🇪",
	},
];

export default function RecipePage() {
	return (
		<main className="max-w-6xl px-4 my-4 md:my-14 space-y-6 mx-auto">
			<Path name={"Recetas"} />
			<h2 className={"text-4xl font-extrabold"}>Mejores gastronomías</h2>
			<div className="space-y-4">
				{gastronomies.map((gastronomie) => (
					<Card
						key={gastronomie.label}
						className="flex items-center justify-between hover:shadow-sm 
						transition cursor-pointer hover:scale-100 p-4"
					>
						<Button
							asChild
							variant={"link"}
							className="text-gray-900/90 hover:scale-105 hover:underline-offset-4"
						>
							<Link href={""}>{gastronomie.label}</Link>
						</Button>
						<MoveUpRight className="size-3" />
					</Card>
				))}
			</div>
		</main>
	);
}
