import type { ChildrenProps } from "@/lib/types";
import { Header } from "@/components/shared/header";



export default function RecipeLayout({ children }: ChildrenProps) {
	return (
		<div className="min-h-screen max-w-full">
			<Header />
			{children}
		</div>
	);
}
