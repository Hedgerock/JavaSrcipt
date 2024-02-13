import { notFound } from "../../utils.js";
import { renderPosts } from "./renderFunc.js";

export function searchByInput(postsList, posts, search) {
    search.oninput = function() { searchingProcess(postsList, posts, search) }
}

function searchingProcess(postsList, posts, search) {
    postsList.innerHTML = '';

    if (!search.value) {
        renderPosts(posts, postsList);
        return;
    }

    const filteredPost = posts.filter(item => { 
        const { title, id } = item
        const value = search.value;
        const elId = id.toString();

        return title.includes(value) || elId.includes(value)
    });

    if (filteredPost.length === 0) {
        notFound(postsList);;
        return;
    }

    renderPosts(filteredPost, postsList);
}