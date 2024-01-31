export function createLink(value, link) {
    const crumbBox = document.createElement('div');
    const crumbLink = document.createElement('a');
    crumbLink.href = link;
    crumbLink.textContent = value;

    crumbBox.append(crumbLink);

    return crumbBox;
}

export function createImg(name, classBox, classPicture) {
    const pictureBox = document.createElement('div');
    const picture = document.createElement('img');

    pictureBox.className = classBox;
    picture.className = classPicture;

    pictureBox.dataset.title = name;
    pictureBox.setAttribute('title', name);

    pictureBox.append(picture);

    return pictureBox;
}

export function createTopic(key) {
    const topicsBox = document.createElement('div');
    topicsBox.className = 'topic';
    topicsBox.dataset.title = key;

    return topicsBox;
}