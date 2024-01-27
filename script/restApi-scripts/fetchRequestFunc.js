import { renderEditBox } from "./render.js"
import url from "./url.js"

export function fetchRequestFuncDel(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
        'content-type': 'application/json;charset = utf-8'
        }
    })
}

export function fetchRequestFuncPosts(title, value) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({title: title, body: value}),
        headers: {
        'content-type': 'application/json;charset = utf-8'
        }
    })
}

export function fetchRequestFuncPatch(id, title, value) {
    fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({title: title, body: value}),
        headers: {
        'content-type': 'application/json;charset = utf-8'
        }
    })
}

export function fetchRequestFuncGet(id) {
    fetch(`${url}/${id}`, {
        method: 'GET',
        headers: {
        'content-type': 'application/json;charset = utf-8'
        }
    })
    .then(res => res.json())
    .then(json => {renderEditBox(json, id)})
}