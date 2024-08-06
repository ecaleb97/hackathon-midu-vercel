"use client";

import { items } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
	const pathname = usePathname();
	return (
		<ul
			className="hidden md:flex items-center gap-6 bg-[#FBFBFB] 
			px-5 py-3 rounded-full shadow-sm border border-gray-200"
		>
			{items.map((item) => (
				<li key={item.href} className="text-sm">
					<Link
						href={item.href}
						className={cn(
							"text-gray-900/60 hover:text-gray-800",
							pathname === item.href ? "text-black" : "text-gray-900/60",
						)}
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
