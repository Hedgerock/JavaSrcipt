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

const content = [
    {
        title: 'first',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto nisi doloremque maxime doloribus sapiente officia natus sed. Dolorum architecto accusamus repellat qui quam illo quis explicabo perferendis optio, voluptate quae.',
        hiddenContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto nisi doloremque maxime doloribus sapiente officia natus sed. Dolorum architecto accusamus repellat qui quam illo quis explicabo perferendis optio, voluptate quae.'
    },
    {   title: 'second',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto nisi doloremque maxime doloribus sapiente officia natus sed. Dolorum architecto accusamus repellat qui quam illo quis explicabo perferendis optio, voluptate quae.',
        hiddenContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto nisi doloremque maxime doloribus sapiente officia natus sed. Dolorum architecto accusamus repellat qui quam illo quis explicabo perferendis optio, voluptate quae.'
    },
    {   title: 'third',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto nisi doloremque maxime doloribus sapiente officia natus sed. Dolorum architecto accusamus repellat qui quam illo quis explicabo perferendis optio, voluptate quae.',
        hiddenContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto nisi doloremque maxime doloribus sapiente officia natus sed. Dolorum architecto accusamus repellat qui quam illo quis explicabo perferendis optio, voluptate quae.'
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
const contentDiv = document.querySelector('.content');
const showContent = document.querySelector('.show-content')

const mainMenuList = mainMenu.map(function (item) {
    return `
        <li class = "menu-element">
            <a class = "menu-element__link" href = ${item.link}>
                ${item.title}
            </a>
        </li>
    `
}).join('');


const contentBlocks = content.map(function(item) {
    return `
    <div class = "paragraph-block">
        <h3 class = "paragraph-block__title">${item.title}</h3>
        <p class = "paragraph-block__text">
            ${item.paragraph}
        </p>
        <p class = "paragraph-block__text paragraph-block__text_hidden">
            ${item.hiddenContent}
        </p>
        <button class = "paragpaph-block__button"> read more </button>
    </div>
    `
}).join('')


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
contentDiv.innerHTML = contentBlocks;

const btn = document.querySelectorAll('.paragpaph-block__button');
const hiddenContent = document.querySelectorAll('.paragraph-block__text_hidden')

showContent.onclick = function() {
    if (showContent.innerHTML === 'show posts') {
        showContent.innerHTML = 'hide posts'
        contentDiv.className = 'content content__visible'
    } else {
        showContent.innerHTML = 'show posts'
        contentDiv.className = 'content'
    }
}

btn.forEach(function(item, index) {
    let elemIsHidden = true;
    item.onclick = function() {
        if (elemIsHidden) {
            item.innerHTML = 'hide';
            hiddenContent[index].className = 'paragraph-block__text_visible';
        } else {
            item.innerHTML = 'read more';
            hiddenContent[index].className = 'paragraph-block__text_hidden';
        }
        elemIsHidden = !elemIsHidden
    }
})

const stars = document.querySelectorAll('.stars');

for (let star of stars) {
    let totalData = '';
    for (let i = 0; i < 5; i++) {
        const el = `<span class = "stars__elem"><i class="fa-solid fa-star"></i></span>`;
        totalData += el;
    }
    star.innerHTML = totalData;
}