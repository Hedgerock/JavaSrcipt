import { url } from "../data.js";
import { contentPage } from "./contentPage.js";

export async function blogPage() {
    const request = await fetch(url);
    const posts = await request.json();

    const postBox = createPostBox(posts);

    return postBox;
}

function createPostBox(posts) {
    const postBox = document.createElement('div');
    postBox.className = 'blog-page';

    const postBoxTitle = document.createElement('h2');
    postBoxTitle.className = 'blog-page__title'
    postBoxTitle.textContent = 'Blog page';

    const postsList = createPosts(posts);
    postBox.append(postBoxTitle, postsList);

    return postBox;
}

function createPosts(posts) {
    const postsList = document.createElement('ul');
    postsList.className = 'posts-list';
    postsList.className = 'titles-list'

    posts.forEach(post => {
        const { id, title } = post;

        const postListEl = document.createElement('li');
        const postListTitle = document.createElement('a');

        postListEl.dataset.id = id;
        postListEl.setAttribute('title', title);

        postListEl.onclick = () => {
            postsList.innerHTML = '';
            contentPage(id, postsList);
        }

        postListTitle.textContent = title;

        postListEl.append(postListTitle);
        postsList.append(postListEl);
    })

    return postsList
}

