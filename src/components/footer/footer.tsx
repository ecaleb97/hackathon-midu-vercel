import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
	return (
		<footer className="text-gray-900/60 text-center text-sm py-2">
			Desarrollado por Caleb Villanueva Zamalloa -{" "}
			<Button asChild variant={"link"} className="text-gray-900/60 p-0">
				<Link href={"https://ecaleb.dev"} target="_blank">
					ecaleb.dev
				</Link>
			</Button>
		</footer>
	);
}