import { MobileSidebar } from "@/components/nav/mobile-sidebar";
import { items } from "@/lib/constants";
import type { ChildrenProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/lib/fonts";

export default function LandingLayout({ children }: ChildrenProps) {
	return (
		<div className="min-h-screen max-w-full">
			<header className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className={`${montserrat.className}`}>
					<Link href={"/"} className="flex gap-2 text-xl">
						<Image
							src="/logo-hackathon.svg"
							alt="Logo"
							width={50}
							height={50}
						/>
						Recetas.AI
					</Link>
				</div>
				<Navbar />
				<ExplorerButton />
				<MobileSidebar />
			</header>
			{children}
		</div>
	);
}

function Navbar() {
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

function ExplorerButton() {
	return (
		<Button className="rounded-full hidden md:flex items-center" asChild>
			<Link href={"/recipes"}>Explorar</Link>
		</Button>
	);
}
