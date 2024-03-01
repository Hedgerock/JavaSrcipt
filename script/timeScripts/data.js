import { renderCurrentFilm } from "./renderFunc/renderCurrentFilm.js";
import { renderPosts } from "./renderFunc/renderPostsAndComp.js";
import { makeTime } from "./timeFun/makeTime.js";


const time1 = makeTime(2);
const time2 = makeTime(1);
const time4 = makeTime();
const time3 = makeTime(-3);

export const films = [
    {   
        id: 1,
        title: 'Home Alone',
        description: 'An American family are going to Europe and accidentally leave one of their children at home. However the boy doesn’t lose his head, and when robbers decide to break into his house he will do everything to make them regret that idea.',
        picture: 'https://s2.vcdn.biz/static/f/617365901/image.jpg/pt/r300x423x4',
        bigPicture: 'https://m.media-amazon.com/images/I/51pya3jHZPL._AC_UF894,1000_QL80_.jpg',
        trailer: 'https://www.youtube.com/watch?v=jEDaVHmw7r4',
        schedule: [ time3, time2, time1 ],
        relevant: [ 'Home Alone 2: Lost in New York', 'Home Alone 3' ]
    },
    {   
        id: 2,
        title: 'Avatar',
        description: 'A former Marine Corps official, Jake Sully, is moving in a wheelchair, but in his heart, he is still a fighter. One day, a man is assigned to go to the earth base, located on the planet Pandora. There is the mining of a rare mineral that can help humanity overcome the energy crisis.',
        picture: 'https://s6.vcdn.biz/static/f/6199197081/image.jpg/pt/r300x423x4',
        bigPicture: 'https://i.ebayimg.com/images/g/IrMAAOSwe89ir7jD/s-l1600.jpg',
        trailer: 'https://www.youtube.com/watch?v=5PSNL1qE6VY',
        schedule: [ time3, time2, time4, time1 ],
        relevant: [ 'Avatar: The Way of Water' ]
    },
    {   
        id: 17,
        title: 'Home Alone 2: Lost in New York',
        description: 'America’s little hero sets the heather on fire in New York! Kevin McCallister is back! This time he is not home alone, he is in New York and he has enough cash and credit cards to turn the Big Apple into his own playground. But as always, Kevin is not meant to be alone for a long time. His old “fiends” Harry and Marv escape from prison and arrive in New York! New traps are waiting for the unfortunate criminals.',
        picture: 'https://s2.vcdn.biz/static/f/617202731/image.jpg/pt/r300x423x4',
        bigPicture: 'https://sceneprints.com/cdn/shop/products/s-l1600_ba5f3acd-f8ec-4393-8509-3652f001bdeb.jpg?v=1682630673',
        trailer: 'https://www.youtube.com/watch?v=5h9VDUNtoto',
        schedule: [ time3, time2, time4, time1 ],
        relevant: [ 'Home Alone', 'Home Alone 3' ]
    },
    {   
        id: 26,
        title: 'Avatar: The Way of Water',
        description: `After the fateful decision to remain as an avatar of soldiers, Jake Sally undertakes a mission to protect the people na'vi from those who want to profit from the Earth. Now Jake is the leader of this nation. Therefore, when the invaders break into Pandora, he will be ready to fight back with his beloved Neytiri.`,
        picture: 'https://s5.vcdn.biz/static/f/5768111651/image.jpg/pt/r300x423x4',
        bigPicture: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/watch?v=a8Gx8wiNbs8',
        schedule: [ time3, time2, time4, time1 ],
        relevant: [ 'Avatar' ]
    },
    {   
        id: 5,
        title: 'Chappie',
        description: 'A group of criminals steals a robot that little differs from a child. He is very vulnerable, trustful and hurtable despite having body made of iron, and criminals make their own contribution to his perception of reality…',
        picture: 'https://s7.vcdn.biz/static/f/1009030381/image.jpg/pt/r300x423x4',
        bigPicture: 'https://ychef.files.bbci.co.uk/1280x720/p02ldkkm.jpg',
        trailer: 'https://www.youtube.com/watch?v=lyy7y0QOK-0',
        schedule: [ time3, time2, time4, time1 ],
        relevant: []
    },
    {   
        id: 123,
        title: 'Home Alone 3',
        description: 'One day the main characters buy a unique chip stolen especially for their order, which can disable the entire system of anti-space defense. Coincidentally, the device, hidden in a toy car, ends up in the house of ordinary people, where one mischievous kid lives... Will he alone be able to resist the criminal pros?',
        picture: 'https://s2.vcdn.biz/static/f/2794733021/image.jpg/pt/r300x423x4',
        bigPicture: 'https://lh3.googleusercontent.com/P3Dib2XqhE8V1XGagmkgwSW1s94Xf-SXBmBlIlGuKs_fPN9KJVftL6p3Rr-AWC_favD77doqaSvR=w1280-h720',
        trailer: 'https://www.youtube.com/watch?v=PP--dDh4axI',
        schedule: [ time3, time2, time4, time1 ],
        relevant: [ 'Home Alone', 'Home Alone 2: Lost in New York' ]
    }
]

const dataRoute = [
    { 
        path: [ null, '/' ], 
        component: renderPosts
    }, 
    { 
        path: [ null, '/film/:id' ], 
        component: renderCurrentFilm
    }, 
]

export default dataRoute

