const mainMenu = [
    {
        title: 'Home',
        link: '#',
    },
    {
        title: 'About',
        link: '#',
    },
    {
        title: 'Categories',
        link: '#',
    },
    {
        title: 'Contacts',
        link: '#',
    },
]

const products = [
    {   
        href: '#',
        comments: '#1',
        commentsAmount: "123"  + "&nbsp;" + "отзыва",
        title: "Ноутбук ASUS TUF Gaming A15 (2023) FA507NV-LP031",
        src: "./img/ASUSTUFGamingA15.webp",
        alt: "",
        price: "59" + "&nbsp;" + "999",
        currentPrice: "51 999",
        promotion: "акция",
        deliveryStatus: "Готов" + "&nbsp;" + "к" + "&nbsp;" + "отправке",
    },
    {
        href: "#",
        comments: "#1",
        commentsAmount: "45" + "&nbsp;" + "отзывов",
        title: 'Ноутбук Acer Aspire 7 A715-43G-R92H (NH.QHHEU.00G) Charcoal Black',
        src: "./img/acerAspire7.webp",
        alt: "",
        price: "39" + "&nbsp;" + "999",
        currentPrice: "34 999",
        promotion: "акция",
        deliveryStatus: "",
    },
    {
        href: "#",
        comments: "#1",
        commentsAmount: "64" + "&nbsp;" + "отзыва",
        title: "Ноутбук Apple MacBook Air 13 M1 8/256GB 2020 (MGN63) Space Gray",
        src: "./img/MacBookAir13.webp",
        alt: "",
        price: "",
        currentPrice: "36 999",
        promotion: "",
        deliveryStatus: "Готов" + "&nbsp;" + "к" + "&nbsp;" + "отправке",
    },
    {
        href: "#",
        comments: "#1",
        commentsAmount: "35" + "&nbsp;" + "отзывов",
        title: "Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 (82K10190RA) Shadow Black",
        src: "./img/LenovoIdeaPadGaming3.webp",
        alt: "",
        price: "39" + "&nbsp;" + "999",
        currentPrice: "32 999",
        promotion: "акция",
        deliveryStatus: "Готов" + "&nbsp;" + "к" + "&nbsp;" + "отправке",
    },
    {   
        href: '#',
        comments: '#1',
        commentsAmount: "123"  + "&nbsp;" + "отзыва",
        title: "Ноутбук ASUS TUF Gaming A15 (2023) FA507NV-LP031",
        src: "./img/ASUSTUFGamingA15.webp",
        alt: "",
        price: "59" + "&nbsp;" + "999",
        currentPrice: "51 999",
        promotion: "акция",
        deliveryStatus: "Готов" + "&nbsp;" + "к" + "&nbsp;" + "отправке",
    },
    {
        href: "#",
        comments: "#1",
        commentsAmount: "45" + "&nbsp;" + "отзывов",
        title: 'Ноутбук Acer Aspire 7 A715-43G-R92H (NH.QHHEU.00G) Charcoal Black',
        src: "./img/acerAspire7.webp",
        alt: "",
        price: "39" + "&nbsp;" + "999",
        currentPrice: "34 999",
        promotion: "акция",
        deliveryStatus: "",
    },
]

const menu = document.querySelector('.main-menu');
const productList = document.querySelector('.product-list');

const mainMenuList = mainMenu.map(function (item) {
    return `
        <li class = "menu-element">
            <a class = "menu-element__link" href = ${item.link}>
                ${item.title}
            </a>
        </li>
    `
}).join('');

const productListElem = products.map(function (item) {
    return `
        <div class = "product-list-elem">
            <span class = "promotion">
                ${item.promotion}
            </span>
            <button class = "add-to-favorites">
                <i class = "add-to-favorites__icon fa-regular fa-heart"></i>
            </button>
            <button class = "add-to-compare">
                <i class="add-to-comapare__icon fa-solid fa-scale-balanced"></i>
            </button>
            <a class = "product-picture" href = ${item.href}>
                <img class= "product-picture__img" src = ${item.src} alt = ${item.alt}>
            </a>
            <h3 class = "product-title">
                <a class = "product-list__link" href = ${item.href}>
                ${item.title}
                </a>
            </h3>
            <div class = "product-rates">
                <a class = "stars" href = ${item.comments} data-comments = ${item.commentsAmount}></a>
            </div>
            <div class = "product-info">
                <span class = "product-info__price" data-actual = ${item.price}>
                    ${item.currentPrice}
                </span>
                <button class = "product-info__order">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <span class = "delivery-status">
                ${item.deliveryStatus}
            </span>
        </div>
    `
}).join('')

menu.innerHTML = mainMenuList;
productList.innerHTML = productListElem;


const stars = document.querySelectorAll('.stars');

for (let star of stars) {
    let totalData = '';
    for (let i = 0; i < 5; i++) {
        const el = `<span class = "stars__elem"><i class="fa-solid fa-star"></i></span>`;
        totalData += el;
    }
    star.innerHTML = totalData;
}