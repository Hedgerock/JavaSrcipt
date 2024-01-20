const mainPart = document.querySelector('.main-part');

export function renderComments(item) {
    mainPart.setAttribute('class', 'main-part main-part_comments')

    const { id, name, email, body } = item;

    const block = document.createElement('div');
    block.className = 'comment-block'
    block.setAttribute('data-id', id);

    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    const userName = document.createElement('a');
    userName.className = 'comment-block__user-name';
    userName.setAttribute('href', '#');
    userName.textContent = name;

    const userEmail = document.createElement('a');
    userEmail.className = 'comment-block__user-link';
    userEmail.textContent = email;
    userEmail.setAttribute('href', '#');

    const comment = document.createElement('p');
    comment.className = 'comment-block__user-text'
    comment.textContent = body;

    mainPart.append(block);
    block.append(userInfo, comment);
    userInfo.append(userName, userEmail);
}