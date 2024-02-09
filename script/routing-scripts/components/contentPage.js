import { mainPart, url } from "../data.js";
import { checkRoute } from "../hashFunc.js";

export async function contentPage(id, postsList) {
    const parent = mainPart.querySelector('.blog-page');

    const request = await fetch(`${url}/${id}`);
    const info = await request.json();

    const { title, body } = info;

    const postStructure = createPostStructure(title, body, id);

    const breadCrumbs = createBreadCrumbs(title);

    postsList.append(postStructure);
    parent.insertBefore(breadCrumbs, postsList);
}

export function createPostStructure(title, body, id) {
    const postStructure = document.createElement('div');
    postStructure.className = 'current-post';

    const postTitle = document.createElement('h3');
    postTitle.dataset.id = id;
    postTitle.className = 'current-post__title';

    const mainContent = document.createElement('p');

    postTitle.textContent = title;

    mainContent.textContent = body;

    postStructure.append(postTitle, mainContent);

    return postStructure;
}

export function createBreadCrumbs(title) {
    const breadCrumbs = document.createElement('div');
    const currentCrumb = document.createElement('a');
    const backtoMain = document.createElement('a');

    breadCrumbs.className = 'bread-crumbs-routing'

    backtoMain.textContent = 'blog';
    backtoMain.href = '#blog';

    currentCrumb.textContent = title;

    backtoMain.onclick = () => {
        breadCrumbs.remove();
        checkRoute();
    }

    breadCrumbs.append(backtoMain, currentCrumb);

    return breadCrumbs;
}