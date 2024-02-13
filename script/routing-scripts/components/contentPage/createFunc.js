import { createEl } from "../../utils.js";

export function createPostStructure(title, body, id) {
    const postStructure = createEl('current-post', 'div');
    const postTitle = createEl('current-post__title', 'h3', title);
    const mainContent = createEl('current-post__text', 'p', body);

    postTitle.dataset.id = id;
    postStructure.append(postTitle, mainContent);

    return postStructure;
}

export function createBreadCrumbs(title) {
    const breadCrumbs = createEl('bread-crumbs-routing', 'div');
    const currentCrumb = createEl('bread-crumbs-routing__current', 'a', title);
    const backtoMain = createEl('bread-crumbs-routing__back', 'a', 'blog');
    backtoMain.href = '#/blog';


    breadCrumbs.append(backtoMain, currentCrumb);

    return breadCrumbs;
}