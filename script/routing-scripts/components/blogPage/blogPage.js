import { url } from "../../data.js";
import { createPostBox } from "./createFunc.js";
import { searchParams } from "./searchParams.js";

export async function blogPage(props) {
    const request = await fetch(url);
    let posts = await request.json();

    posts = searchParams(props, posts);

    const postBox = createPostBox(posts);

    return postBox;
}