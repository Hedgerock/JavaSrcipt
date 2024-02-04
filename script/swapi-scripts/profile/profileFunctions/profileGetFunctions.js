import { toCapitalize } from '../../../fetch-scripts/utils.js'
import { preloadProcess } from '../../functions/preload.js';

export async function getList(arr, name) {
    const list = document.createElement('ul');
    list.className = 'profile-list'
    list.dataset.title = name;

    for (let content of arr) {
        const title = content[0];
        const value = content[1];

        const element = document.createElement('li');
        element.className = 'profile-list__element'

        if (title === 'episode_id') {
            list.dataset.episode = `Episode ${value}: `;
            continue;
        }

        if (title === 'name') {
            continue;
        }

        if (title === 'homeworld' || title === 'species') {
            await newRequest(title, value, element, list);
            continue 
        }

        stringMainipulation(title, value, element, list);
    }

    return list;
}

async function newRequest(title, value, element, list) {
    const request = await preloadProcess(value, element);
    const contentValue = request ? request.name : 'unknown';

    stringMainipulation(title, contentValue, element, list)

    element.onclick = function() {
        console.log('hello world')
    }
}

function stringMainipulation(title, value, element, list) {
    element.textContent = `${toCapitalize(String(title).replaceAll('_', ' '))}: ${value}`;
    element.classList.add(`profile-list__element_${title.replaceAll('_' , '-')}`)
    list.append(element);
}