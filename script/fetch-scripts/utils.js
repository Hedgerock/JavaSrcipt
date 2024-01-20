export function removeElements() {
    const args = [...arguments];

    args.forEach(el => {el.remove()})
}

export function toCapitalize(str) {
    if (!str) {
        return
    }

    const result = str[0].toUpperCase() + str.slice(1).toLowerCase();

    return result;
}