import { outlet } from "../routing-scripts/data.js";
import { createElem } from "./createFunc.js";
import { films } from "./data.js";

export function makeValueAlter(arr, className, elClass) {
    const ul = createElem({ tag: 'ul', className: className })

    arr.forEach(item => {
        let el = films.find(t => t.title === item);
        if (!el) { el = item }

        const { id, picture, title } = el;
        initComp( { parent: ul, id, picture, title, elClass });
    })

    outlet.append(ul);

    return ul;
}

export function initComp(props) {

    const { parent, id, picture, title, elClass } = props

    const li = createElem({ tag: 'li', className: elClass, data: id });
    const a = createElem({ tag: 'a', className: 'link', dataTitle: title, href: `#/film/${id}` });
    const img = createElem({ tag: 'img', className: 'element__img', dataId: id, src: picture });

    parent.append(li);
    li.append(a);
    a.append(img);
}