import { createEl } from "../../utils.js";

export function renderPosts(posts, postsList) {
    posts.forEach(post => {
        const { id, title } = post;

        const postListEl = createEl('titles-list-el', 'li');
        const postListTitle = createEl('tiles-list-el__link', 'a', title);
        const titleNumber = createEl('titles-list-el__number', 'span', id);

        postListEl.dataset.id = id;
        postListEl.setAttribute('title', title);
        postListTitle.href= `#/blog/${id}`

        postListEl.append(titleNumber, postListTitle);
        postsList.append(postListEl);
    })
}