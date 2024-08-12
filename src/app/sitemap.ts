export default async function sitemap() {
	let routes = [
		"",
		"/recetas",
		"/recetas/explorar",
		"/recetas/ensaladas",
		"/recetas/vegetariano",
		"/recetas/vegano",
		"/recetas/carnes",
		"/recetas/postres",
	].map((route) => ({
		url: `https://recetas.ecaleb.dev${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes];
}
