import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CarouselProps } from "@/lib/constants";
import Image from "next/image";

export function CarouselImages({ images }: CarouselProps) {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 2000,
				}),
			]}
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
