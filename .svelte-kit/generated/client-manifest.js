export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout@root.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-root.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\__layout@root.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\experience.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\[id].svelte"),
	() => import("..\\..\\src\\routes\\portfolio.svelte")
];

export const dictionary = {
	"": [[2, 0, 6], [1, 1]],
	"about": [[2, 0, 4], [1, 1]],
	"experience": [[2, 0, 5], [1, 1]],
	"portfolio": [[2, 0, 8], [1, 1]],
	"portfolio/[id]": [[2, 3, 7], [1]]
};