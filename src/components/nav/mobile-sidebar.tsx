"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { items } from "@/lib/constants";
import Link from "next/link";
import { montserrat } from "@/lib/fonts";

export function MobileSidebar() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={"ghost"} size={"icon"} className="md:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetTitle className="hidden"></SheetTitle>
				<SheetDescription className="hidden"></SheetDescription>
				<Navbar />
			</SheetContent>
		</Sheet>
	);
}

function Navbar() {
	return (
		<ul className="my-8 flex flex-col gap-4">
			{items.map((item) => (
				<li key={item.href}>
					<Link href={item.href} className={`text-xl ${montserrat.className}`}>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
