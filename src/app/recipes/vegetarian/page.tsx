"use client";

import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RecipePage() {
	const router = useRouter();
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: "/api/recipe",
		onFinish: () => {
			router.refresh();
		},
	});
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="border border-gray-300 rounded p-2"
					type="text"
					value={input}
					onChange={handleInputChange}
				/>
				<Button type="submit">Generar receta</Button>
			</form>
			<div>
				{messages.map((message) => (
					<div key={message.id} className="whitespace-pre-wrap">
						{message.role === "user" ? "You: " : "AI: "}
						{message.content}
					</div>
				))}
			</div>
		</div>
	);
}
