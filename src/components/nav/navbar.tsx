import { items } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
	return (
		<ul
			className="hidden md:flex items-center gap-6 bg-[#FBFBFB] 
			px-5 py-3 rounded-full shadow-sm border border-gray-200"
		>
			{items.map((item) => (
				<li key={item.href} className="text-sm">
					<Link
						href={item.href}
						className="text-gray-900/60 hover:text-gray-800"
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export function ExplorerButton() {
	return (
		<Button className="rounded-full hidden md:flex items-center" asChild>
			<Link href={"/recetas/explorar"}>Explorar</Link>
		</Button>
	);
}
