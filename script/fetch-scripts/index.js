import { clockwork, initMenu } from '../menu.js';
import { fetchFunction, buttonsSwitcher } from './fetchAndButtons.js';
import { renderComments } from './render/renderComments.js';
import { renderPhoto } from './render/renderPhoto.js';
import { renderDom, renderElements, renderPostTitles } from './render/renderPosts.js';

const buttons = document.querySelector('.fetch-buttons');

initMenu();
clockwork();

setInterval (() => {
    clockwork();
}, 1000)

buttons.onclick = (e) => {buttonsSwitcher(e)}

const postBtn = document.querySelector('.fetch-buttons__current-btn_posts');
const picturesBtn = document.querySelector('.fetch-buttons__current-btn_pictures');
const commentsBtn = document.querySelector('.fetch-buttons__current-btn_comments');

postBtn.onclick = () => {
    fetchFunction('https://jsonplaceholder.typicode.com/posts', renderElements, renderDom, renderPostTitles);
}

picturesBtn.onclick = () => {
    fetchFunction('https://jsonplaceholder.typicode.com/albums/1/photos', renderElements, renderDom, renderPhoto);
}

commentsBtn.onclick = () => {
    fetchFunction('https://jsonplaceholder.typicode.com/posts/1/comments', renderElements, renderDom, renderComments);
}