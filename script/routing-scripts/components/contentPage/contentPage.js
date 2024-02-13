import { url } from "../../data.js";
import { createBreadCrumbs, createPostStructure } from "./createFunc.js";

export async function contentPage(props) {
    const { id } = props
    
    const request = await fetch(`${url}/${id}`);

    if(request.status !== 200) {
        window.location.href = "#/empty";
        return;
    }

    const info = await request.json();

    const { title, body } = info;

    const postStructure = createPostStructure(title, body, id);

    const breadCrumbs = createBreadCrumbs(title)

    postStructure.prepend(breadCrumbs);

    return postStructure
}