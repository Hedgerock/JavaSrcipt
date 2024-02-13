import { createEl, notFound } from "../../utils.js";
import { renderPosts } from "./renderFunc.js";
import { searchByInput } from "./searchFunc.js";

export function createPostBox(posts) {
    const postBox = createEl('blog-page', 'div');
    const box = createEl('blog-header', 'div');
    const postBoxTitle = createEl('blog-page__title', 'h2', 'Blog page');

    const search = createEl('blog-header__search', 'input');
    search.type = 'search';
    search.placeholder = 'find by id or title';

    const postsList = createPosts(posts, search);
    box.append(postBoxTitle, search);
    postBox.append(box, postsList);

    return postBox;
}

export function createPosts(posts, search) {
    const postsList = createEl('titles-list', 'ul');

    if (posts.length === 0) {
        notFound(postsList);
        return postsList
    }

    searchByInput(postsList, posts, search);

    renderPosts(posts, postsList)

    return postsList
}