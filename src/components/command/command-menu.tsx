"use client";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";

import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { suggestions, commandLinks } from "@/lib/data";

export function CommandMenu() {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<Button
				onClick={() => setOpen((open) => !open)}
				className="text-sm text-muted-foreground bg-slate-50 hover:bg-gray-200
        flex gap-6 px-2 py-1"
			>
				Buscar ...{" "}
				<kbd
					className="pointer-events-none inline-flex h-5 select-none 
          text-gray-600 border-gray-400
          items-center gap-1 rounded border px-1.5 font-mono
          text-[10px] font-medium opacity-100"
				>
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Buscar..." />
				<CommandList>
					<CommandEmpty>No se encontraron resultados</CommandEmpty>
				</CommandList>
				<CommandGroup heading="Sugerencias">
					{suggestions.map((suggestion) => (
						<CommandItem
							key={suggestion.hash}
							onSelect={() => {
								runCommand(() => {
									window.open(suggestion.hash, "_blank", "noopener noreferrer");
								});
							}}
						>
							<suggestion.icon className="mr-2 size-4" />
							<span className="font-light">{suggestion.name}</span>
						</CommandItem>
					))}
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Enlaces">
					{commandLinks.map((link) => (
						<CommandItem
							key={link.hash}
							onSelect={() => {
								runCommand(() => router.push(link.hash));
							}}
						>
							<link.icon className="mr-2 size-4" />
							<span className="font-light">{link.name}</span>
						</CommandItem>
					))}
				</CommandGroup>
			</CommandDialog>
		</>
	);
}
