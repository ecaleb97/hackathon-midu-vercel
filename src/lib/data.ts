import { BookUser } from "lucide-react";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import { LeafyGreen, Fish, Apple, Dessert, Carrot } from "lucide-react";

export const suggestions = [
	{
		name: "Github",
		icon: Github,
		hash: "https://github.com/ecaleb97",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		hash: "https://www.linkedin.com/in/caleb-villanueva-zamalloa/",
	},
	{
		name: "Resume",
		icon: BookUser,
		hash: "https://cv.ecaleb.dev/",
	},
	{
		name: "Portfolio",
		icon: BookUser,
		hash: "https://ecaleb.dev/",
	},
];

export const commandLinks = [
	{
		name: "Vegetariano",
		icon: LeafyGreen,
		hash: "/recetas/vegetariano",
	},
	{
		name: "Vegano",
		icon: Carrot,
		hash: "/recetas/vegano",
	},
	{
		name: "Ensaladas",
		icon: Apple,
		hash: "/recetas/ensaladas",
	},
	{
		name: "Postres",
		icon: Dessert,
		hash: "/recetas/postres",
	},
	{
		name: "Carnes y pescados",
		icon: Fish,
		hash: "/recetas/carnes",
	},
];
