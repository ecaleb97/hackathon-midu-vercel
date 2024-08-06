import { cn } from "@/lib/utils";
import { Marquee } from "@/components/shared/marquee";
import Image, { StaticImageData } from "next/image";
import paella from "@/assets/images/paella.webp";
import lomoSaltado from "@/assets/images/lomoSaltado.webp";
import pozole from "@/assets/images/pozole.webp";
import ceviche from "@/assets/images/ceviche.webp";
import tacos from "@/assets/images/tacos.webp";
import pulpoGallega from "@/assets/images/pulpoGallega.webp";
import ramen from "@/assets/images/ramen.webp";
import sushi from "@/assets/images/sushi.webp";
import cocido from "@/assets/images/cocido.webp";
import tortillaPatatas from "@/assets/images/tortillaPatatas.webp";
import pasta from "@/assets/images/pasta.webp";
import tikaMasala from "@/assets/images/tikaMasala.webp";

const images = [
	{
		img: sushi,
	},
	{
		img: paella,
	},
	{
		img: lomoSaltado,
	},
	{
		img: pozole,
	},
	{
		img: ceviche,
	},
	{
		img: tacos,
	},
	{
		img: pulpoGallega,
	},
	{
		img: ramen,
	},
	{
		img: cocido,
	},
	{
		img: tortillaPatatas,
	},
	{
		img: pasta,
	},
	{
		img: tikaMasala,
	},
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const FoodImages = ({ img }: { img: StaticImageData | string }) => {
	return (
		<figure
			className={cn(
				"relative w-[254px] h-[170px] cursor-pointer overflow-hidden rounded-xl border",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<Image
				className="rounded-xl size-full"
				width={100}
				height={100}
				alt=""
				src={img}
			/>
		</figure>
	);
};

export function MarqueeFoodImages() {
	return (
		<div className="relative flex w-full mx-auto flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review, index) => (
					<FoodImages key={index} img={review.img} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review, index) => (
					<FoodImages key={index} img={review.img} />
				))}
			</Marquee>
			<div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-white dark:from-background"></div>
			<div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	);
}
