export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-blank.svelte"),
	() => import("..\\..\\src\\routes\\__layout-page.svelte"),
	() => import("..\\..\\src\\routes\\__layout-root.svelte"),
	() => import("..\\..\\src\\routes\\__layout-subpage.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\src\\routes\\experience.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\[label].svelte"),
	() => import("..\\..\\src\\routes\\portfolio.svelte")
];

export const dictionary = {
	"": [[0, 9], [1]],
	"about": [[0, 6], [1]],
	"contact": [[0, 7], [1]],
	"experience": [[0, 8], [1]],
	"portfolio": [[0, 11], [1]],
	"portfolio/[label]": [[0, 10], [1]]
};