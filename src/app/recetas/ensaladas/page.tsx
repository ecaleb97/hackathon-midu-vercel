"use client";

import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Path } from "@/components/breadcrumb/path";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { CarouselImages } from "@/components/shared/carousel-images";
import ensaladaPasta from "@/assets/images/ensaladaPasta.webp";
import vegan from "@/assets/images/vegan.webp";
import vegetarian from "@/assets/images/vegetarian.webp";
import ensaladaCesar from "@/assets/images/ensaladaCesar.webp";
import ensaladaGriega from "@/assets/images/ensaladaGriega.webp";

const images = [
	{
		src: ensaladaPasta,
		alt: "Ensalada de pasta",
	},
	{
		src: vegan,
		alt: "Ensalada vegana",
	},
	{
		src: vegetarian,
		alt: "Ensalada vegetariana",
	},
	{
		src: ensaladaCesar,
		alt: "Ensalada cesar",
	},
	{
		src: ensaladaGriega,
		alt: "Ensalada griega",
	},
];

const formSchema = z.object({
	message: z.string().min(5, { message: "Input is required" }),
});

export default function RecipePage() {
	const router = useRouter();
	const { messages, input, handleInputChange, handleSubmit, error, isLoading } =
		useChat({
			api: "/api/recipe/salad",
			onFinish: () => {
				router.refresh();
			},
		});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: "",
		},
	});

	useEffect(() => {
		if (error) {
			toast.error(error.message);
		}
	}, [error]);

	return (
		<main className="max-w-6xl px-4 md:my-14 space-y-6 mx-auto">
			<Path name="Ensaladas" />
			<CarouselImages images={images} />
			<div className="flex flex-col gap-4">
				<Form {...form}>
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<FormField
							name="message"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea
											placeholder="Ensalada de frutas"
											value={input}
											onChange={handleInputChange}
											required
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							disabled={isLoading}
							type="submit"
							className="bg-[#FF9737] hover:bg-[#FFBC7E]"
						>
							Generar receta
						</Button>
					</form>
				</Form>
				<div className="flex flex-col-reverse">
					{messages.map((message) => (
						<ReactMarkdown
							key={message.id}
							className="font-light text-sm"
							components={{
								p: ({ node, ...props }) => (
									<p className="my-2 text-pretty leading-6" {...props} />
								),
								strong: ({ node, ...props }) => (
									<strong className="font-medium text-sm" {...props} />
								),
								ul: ({ node, ...props }) => (
									<ul className="list-disc list-inside" {...props} />
								),
								h3: ({ node, ...props }) => (
									<h3 className="text-lg font-semibold my-2" {...props} />
								),
								h4: ({ node, ...props }) => (
									<h3 className="font-semibold my-2" {...props} />
								),
								li: ({ node, ...props }) => <li className="py-1" {...props} />,
								ol: ({ node, ...props }) => (
									<ol className="list-decimal mx-4" start={1} {...props} />
								),
							}}
						>
							{message.content || ""}
						</ReactMarkdown>
					))}
				</div>
			</div>
		</main>
	);
}
