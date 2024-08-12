"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CarouselProps } from "@/lib/constants";
import Image from "next/image";
import { useRef } from "react";

export function CarouselImages({ images }: CarouselProps) {
	const plugin = useRef(
		Autoplay({
			delay: 2000,
			stopOnInteraction: true,
		}),
	);

	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[plugin.current]}
			className="w-full max-w-6xl"
		>
			<CarouselContent>
				{images.map((img, index) => (
					<CarouselItem key={index} className="basis-64 rounded-md">
						<div className="size-full">
							<Image
								src={img.src}
								alt={img.alt}
								className="size-full object-cover rounded-md"
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	);
}
