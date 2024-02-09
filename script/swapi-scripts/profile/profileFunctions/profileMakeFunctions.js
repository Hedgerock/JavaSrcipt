import { imgFormat, imgUrl } from "../../data.js";

export async function makeSrc(box, className, url, key) {
    const img = box.querySelector(`.${className}`);

    const elId = url.replace(/\D+/g, '') + imgFormat.jpg;
    let link = `${imgUrl}/${key}/${elId}`;
    const pictureUrl = await fetch(link);
    if (!pictureUrl.ok) {
        link = '../images/alter.webp'
    }
    img.src = link;

    return link
}