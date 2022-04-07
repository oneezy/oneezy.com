export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-portfolio.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\experience.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\[id]@portfolio.svelte"),
	() => import("..\\..\\src\\routes\\portfolio.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"about": [[0, 4], [1]],
	"experience": [[0, 5], [1]],
	"portfolio": [[0, 8], [1]],
	"portfolio/[id]@portfolio": [[2, 7], [1]]
};