"use client";

import { Path } from "@/components/breadcrumb/path";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { experimental_useObject as useObject } from "ai/react";
import { notificationSchema } from "@/app/api/recipe/countries/schema";
import ReactMarkdown from "react-markdown";
import { Fragment } from "react";

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
	const { object, submit, isLoading } = useObject({
		api: "/api/recipe/countries",
		schema: notificationSchema,
	});

	const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

	const handleClick = (countryLabel: string) => {
		setSelectedCountry(countryLabel);
		submit(`Mejores platos tipicos de la gastronomia ${countryLabel}`);
	};

	return (
		<main className="max-w-6xl px-4 my-4 md:my-14 space-y-6 mx-auto">
			<Path name={"Recetas"} />
			<h2 className={"text-4xl font-extrabold"}>Mejores gastronomías</h2>
			<div className="space-y-4">
				{gastronomies.map((gastronomie) => (
					<Card
						key={gastronomie.label}
						className="flex flex-col items-start hover:shadow-sm 
						transition cursor-pointer hover:scale-100 p-4"
					>
						<Button
							onClick={() => handleClick(gastronomie.label)}
							variant={"link"}
							disabled={isLoading}
							className="text-gray-900/90 hover:scale-105 hover:underline-offset-4"
						>
							{gastronomie.label}
						</Button>
						{selectedCountry === gastronomie.label && (
							<div className="px-4 py-2">
								{object?.notifications?.map((notification, index) => (
									<Fragment key={index}>
										<ReactMarkdown
											components={{
												pre: ({ node, ...props }) => (
													<div className="overflow-auto w-full my-2">
														<pre {...props} />
													</div>
												),
												code: ({ node, ...props }) => <code {...props} />,
												strong: ({ node, ...props }) => (
													<strong className="font-medium text-sm" {...props} />
												),
											}}
											className="text-sm overflow-hidden leading-7 font-light"
										>
											{notification?.message || ""}
										</ReactMarkdown>
									</Fragment>
								))}
							</div>
						)}
					</Card>
				))}
			</div>
		</main>
	);
}
