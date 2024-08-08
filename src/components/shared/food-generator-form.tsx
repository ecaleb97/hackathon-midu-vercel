import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { foodGeneratorFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import ReactMarkdown from "react-markdown";
import { CircleCheck } from "lucide-react";

interface FormRecipeGeneratorProps {
	type: "vegan" | "vegetarian" | "salad" | "dessert" | "meat";
	placeholder: string;
}

export function FormRecipeGenerator({
	type,
	placeholder,
}: FormRecipeGeneratorProps) {
	// const router = useRouter();
	const { handleInputChange, handleSubmit, isLoading, error, messages, input } =
		useChat({
			api: `/api/recipe/${type}`,
			onFinish: () => {
				toast.success("Receta generada con éxito", {
					icon: (
						<CircleCheck className="bg-[#FF9737] text-white size-5 rounded-full" />
					),
				});
			},
			onError: () => {
				toast.error("Error al generar la receta");
			},
		});

	const form = useForm<z.infer<typeof foodGeneratorFormSchema>>({
		resolver: zodResolver(foodGeneratorFormSchema),
		defaultValues: {
			message: "",
		},
	});

	return (
		<div className="flex flex-col gap-4">
			<Form {...form}>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<FormField
						name="message"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										placeholder={placeholder}
										value={input}
										onChange={handleInputChange}
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
			<div className="flex flex-col">
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
						{message.content}
					</ReactMarkdown>
				))}
			</div>
		</div>
	);
}
