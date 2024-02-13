export function initSearch(searchInp) {
    const value = searchInp.value;
    searchInp.value = '';
    const staticLink = '#/blog';
    const dynamicLink = `${staticLink}?post=${value}`

    if (!value) {
        window.location.href = staticLink;
        return;
    }
    window.location.href = dynamicLink;
}