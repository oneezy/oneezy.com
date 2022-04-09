export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-blank.svelte"),
	() => import("..\\..\\src\\routes\\__layout-page.svelte"),
	() => import("..\\..\\src\\routes\\__layout-root.svelte"),
	() => import("..\\..\\src\\routes\\__layout-subpage.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\__layout@root.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\experience.svelte"),
	() => import("..\\..\\src\\routes\\index@root.svelte"),
	() => import("..\\..\\src\\routes\\portfolio\\[id].svelte"),
	() => import("..\\..\\src\\routes\\portfolio.svelte")
];

export const dictionary = {
	"about": [[0, 7], [1]],
	"experience": [[0, 8], [1]],
	"@root": [[4, 9], [1]],
	"portfolio": [[0, 11], [1]],
	"portfolio/[id]": [[4, 6, 10], [1]]
};