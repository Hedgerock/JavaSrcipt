import { clockwork, initMenu } from "../menu.js";
import routes, { searchInp, searchBtn } from "./data.js";
import { checkRoute } from "./hashFunc.js";
import { initSearch } from "./headerSearch.js";
import { renderMenu } from "./render/renderMenu.js";

initMenu();
clockwork();

setInterval (() => {
    clockwork();
}, 1000)

renderMenu();
checkRoute(routes);

addEventListener('hashchange', () => { checkRoute(routes) })

searchBtn.onclick = () => { initSearch(searchInp) }

searchInp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        initSearch(searchInp)
    }
})