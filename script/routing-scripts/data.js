import { aboutPage } from "./components/aboutPage.js"
import { blogPage } from "./components/blogPage/blogPage.js"
import { contactsPage } from "./components/contactsPage.js"
import { contentPage } from "./components/contentPage/contentPage.js"
import { homePage } from "./components/homePage.js"
import { notFoundPage } from "./components/notFoundPage.js"

export const searchInp = document.querySelector('.header-search__input');
export const searchBtn = document.querySelector('.search-btn');
export const mainPart = document.querySelector('.main-part');
export const outlet = document.querySelector('.outlet');
export const url = 'https://jsonplaceholder.typicode.com/posts';

const routes = [
    { 
        path: [ 'Home', '/' ], 
        component: homePage 
    },
    { 
        path: [ 'About', '/about' ], 
        component: aboutPage 
    },
    {
        path: [ 'Blog', '/blog' ],
        component: blogPage
    },
    {
        path: [ null, '/blog/:id' ],
        component: contentPage,
    },
    { 
        path: [ 'Contacts', '/contacts' ], 
        component: contactsPage
    },
    { 
        path: ['**'], 
        component: notFoundPage
    },
]

export const contacts = [ 
    ['address', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, cupiditate.'],
    ['phone', 'Lorem ipsum dolor sit amet.'],
    ['e-mail', 'Lorem ipsum dolor sit amet consectetur.'],
    ['city', 'Lorem, ipsum dolor.'] 
];

export default routes