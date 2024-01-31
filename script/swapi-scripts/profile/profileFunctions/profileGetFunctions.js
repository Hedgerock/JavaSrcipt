import { toCapitalize } from '../../../fetch-scripts/utils.js'

export function getList(arr) {
    const list = document.createElement('ul');
    arr.forEach((content) => {
        const element = document.createElement('li');
        element.textContent = `${toCapitalize(String(content[0]).replaceAll('_', ' '))}: ${content[1]}`;
        list.append(element); 
    })

    return list;
}