import { Button } from "@/components/ui/button";
import { experimental_useObject as useObject } from "ai/react";
import { notificationSchema } from "@/app/api/recipe/description/schema";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

interface DescriptionFoodGeneratorProps {
	message: string;
}

export function DescriptionFoodGenerator({
	message,
}: DescriptionFoodGeneratorProps) {
	const { object, submit, isLoading } = useObject({
		api: "/api/recipe/description",
		schema: notificationSchema,
		onError: () => {
			toast.error("Error al generar la descripción");
		},
	});

	return (
		<>
			<Button
				variant="outline"
				disabled={isLoading}
				onClick={() => submit(message)}
			>
				Generar descripción
			</Button>
			<div className="px-4 py-2">
				{object?.notifications?.map((notification, index) => (
					<ReactMarkdown
						key={index}
						components={{
							strong: ({ node, ...props }) => (
								<strong className="font-medium text-sm" {...props} />
							),
						}}
						className="text-sm overflow-hidden leading-7 font-light"
					>
						{notification?.message || ""}
					</ReactMarkdown>
				))}
			</div>
		</>
	);
}
