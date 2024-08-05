import type { ChildrenProps } from "@/lib/types";

export default function RecipeLayout({ children }: ChildrenProps) {
	return <div className="min-h-screen max-w-full">{children}</div>;
}
