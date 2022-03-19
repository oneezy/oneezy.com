export const manifest = {
	appDir: "_app",
	assets: new Set(["black-overlay.svg","favicon.png","og/social.png"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-425547cd.js","js":["start-425547cd.js","chunks/vendor-0205eb2b.js","chunks/preload-helper-e4860ae8.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "portfolio",
				pattern: /^\/portfolio\/?$/,
				params: null,
				path: "/portfolio",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		]
	}
};
