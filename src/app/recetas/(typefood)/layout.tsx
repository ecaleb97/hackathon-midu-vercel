import type { ChildrenProps } from "@/lib/types";

export default function TypeFoodLayout({ children }: ChildrenProps) {
	return (
		<main className="max-w-6xl px-4 md:my-14 space-y-6 mx-auto">
			{children}
		</main>
	);
}
