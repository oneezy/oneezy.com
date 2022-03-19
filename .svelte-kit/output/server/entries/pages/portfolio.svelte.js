import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../chunks/index-5b619a5c.js";
const PortfolioCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<div class="${"w-1/3 bg-blue-500 relative"}"><h3 class="${"text-xl font-semibold text-white relative"}">${escape(project.name)}</h3></div>`;
});
const Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { portfolio } = $$props;
  if ($$props.portfolio === void 0 && $$bindings.portfolio && portfolio !== void 0)
    $$bindings.portfolio(portfolio);
  return `<h1 class="${"text-4xl pb-10 text-white relative"}">Portfolio</h1>

<div class="${"portfolio-projects grid grid-cols-3 grid-rows-3 justify-center align-center"}">${each(portfolio, (project) => {
    return `${validate_component(PortfolioCard, "PortfolioCard").$$render($$result, { project }, {}, {})}`;
  })}</div>`;
});
async function load({ fetch }) {
  const res = await fetch(`https://opensheet.elk.sh/1822epRj2XCFzLaYxvEIGVkPfF8qYdAbAqWv4bnqUP8A/Portfolio`);
  const data = await res.json();
  if (res.ok) {
    return { props: { portfolio: data } };
  } else if (res.status === 404) {
    return { props: { portfolio: [] } };
  }
}
const Portfolio_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { portfolio } = $$props;
  if ($$props.portfolio === void 0 && $$bindings.portfolio && portfolio !== void 0)
    $$bindings.portfolio(portfolio);
  return `<main class="${"container mx-auto py-24 text-center"}">${validate_component(Portfolio, "Portfolio").$$render($$result, { portfolio }, {}, {})}</main>`;
});
export { Portfolio_1 as default, load };
