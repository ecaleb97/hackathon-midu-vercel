import { montserrat } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import { Navbar, ExplorerButton } from "@/components/nav/navbar";
import { MobileSidebar } from "@/components/nav/mobile-sidebar";

export function Header() {
	return (
		<header className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
			<div className={`${montserrat.className}`}>
				<Link href={"/"} className="flex gap-2 text-xl">
					<Image src="/logo-hackathon.svg" alt="Logo" width={50} height={50} />
					Recetas AI
				</Link>
			</div>
			<Navbar />
			<ExplorerButton />
			<MobileSidebar />
		</header>
	);
}
