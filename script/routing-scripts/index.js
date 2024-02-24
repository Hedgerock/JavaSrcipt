import { initMenu } from "../menu.js";
import { searchInp, searchBtn } from "./data.js";
import { checkRoute } from "./hashFunc.js";
import { initSearch } from "./headerSearch.js";
import { renderMenu } from "./render/renderMenu.js";

initMenu();

renderMenu();
checkRoute();

addEventListener('hashchange', () => { checkRoute() })

searchBtn.onclick = () => { initSearch(searchInp) }

searchInp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        initSearch(searchInp)
    }
})