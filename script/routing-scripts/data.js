import { aboutPage } from "./components/aboutPage.js"
import { blogPage } from "./components/blogPage.js"
import { contactsPage } from "./components/contactsPage.js"
import { homePage } from "./components/homePage.js"
import { notFoundPage } from "./components/notFoundPage.js"

export const mainPart = document.querySelector('.main-part');
export const outlet = document.querySelector('.outlet');
export const url = 'https://jsonplaceholder.typicode.com/posts';

const routes = [
    { 
        path: [ 'Home', '' ], 
        component: homePage 
    },
    { 
        path: [ 'About', 'about' ], 
        component: aboutPage 
    },
    {
        path: [ 'Blog', 'blog' ],
        component: blogPage
    },
    { 
        path: [ 'Contacts', 'contacts' ], 
        component: contactsPage
    },
    { 
        path: ['**'], 
        component: notFoundPage
    },
]

console.log(routes);

export default routes