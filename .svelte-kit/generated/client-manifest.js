export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-blank.svelte"),
	() => import("..\\..\\src\\routes\\__layout-page.svelte"),
	() => import("..\\..\\src\\routes\\__layout-root.svelte"),
	() => import("..\\..\\src\\routes\\__layout-subpage.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\experience.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\[id].svelte"),
	() => import("..\\..\\src\\routes\\portfolio.svelte")
];

export const dictionary = {
	"": [[0, 8], [1]],
	"about": [[0, 6], [1]],
	"experience": [[0, 7], [1]],
	"portfolio": [[0, 10], [1]],
	"portfolio/[id]": [[0, 9], [1]]
};