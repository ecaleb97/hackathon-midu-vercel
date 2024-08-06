import { montserrat } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import { Navbar, ExplorerButton } from "@/components/nav/navbar";
import { MobileSidebar } from "@/components/nav/mobile-sidebar";
import { CommandMenu } from "@/components/command/command-menu";

export function Header() {
	return (
		<header className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
			<div className={`${montserrat.className}`}>
				<Link href={"/"} className="flex gap-2 text-xl">
					<Image src="/logo-hackathon.svg" alt="Logo" width={50} height={50} />
					<span className="hidden sm:block text-xl font-light">Recetas AI</span>
				</Link>
			</div>
			<Navbar />
			<div className="flex items-center gap-4">
				<CommandMenu />
				<ExplorerButton />
			</div>
			{/* <MobileSidebar /> */}
		</header>
	);
}
