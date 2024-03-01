export function createElem(props) {
    const { tag, className, textContent, href, dataId, dataTitle, src, target } = props;

    const el = document.createElement(tag);
    el.className = className;

    if (textContent) { el.textContent = textContent }

    if (href) { el.href = href }

    if (dataId) { el.dataset.id = dataId }

    if (dataTitle) { el.title = dataTitle }

    if (target) { el.target = target }

    if (src) { el.src = src }

    return el
}