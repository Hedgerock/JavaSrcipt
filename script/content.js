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

const inputs = [
    {
        type: 'text',
        inputName: 'userFirstName',
        placeholder: 'Enter your first name',
        labelContent: 'First name:'
    },
    {
        type: 'text',
        inputName: 'userLastName',
        placeholder: 'Enter your last name',
        labelContent: 'Last name:'
    },
    {
        type: 'password',
        inputName: 'userPassword',
        placeholder: 'Enter your password',
        labelContent: 'Password:'
    },
    {
        type: 'email',
        inputName: 'userEmail',
        placeholder: 'Enter your email',
        labelContent: 'Email:'
    },
    {
        type: 'number',
        inputName: 'userPhone',
        placeholder: 'Enter your phone number',
        labelContent: 'Phone number:'
    },
]

const sliderContent = [
    {
        picture: "./img/promo1.jpg",
        pictureSmall: "./img/promo1small.jpg",
        link: "#",
        title: "Halloween",
        text: "Halloween comes but once a year, and the event is a howling money-maker for confectionary, costume, and retail and online stores. Sales abound as retailers take advantage of this spooktacular tradition to offer all types of Halloween sales. Listen to the Duke Morgan Voice Over demo to see how retailers used his acting ability to scare up new traffic and sales.",
    },
    {
        picture: "./img/promo2.jpg",
        pictureSmall: "./img/promo2small.jpg",
        link: "#",
        title: "Приватбанк",
        text: "Приватбанк — крупнейший банк Украины. Занимает лидирующие позиции по всем финансовым показателям в отрасли.",
    },
    {
        picture: "./img/promo3.jpg",
        pictureSmall: "./img/promo3small.jpg",
        link: "#",
        title: "Gepur",
        text: "Добро пожаловать в GEPUR! Мы украинская компания-производитель женской одежды, история которой берет свое начало с 2010 года.",
    },
    {
        picture: "./img/promo4.jpg",
        pictureSmall: "./img/promo4small.jpg",
        link: "#",
        title: "Rozetka",
        text: "Розе́тка — украинский интернет-магазин и маркетплейс, появившийся в 2005 году. Имеет отделения в Киеве, Одессе, Львове, Житомире и в Броварах",
    },
    {
        picture: "./img/promo5.jpg",
        pictureSmall: "./img/promo5small.jpg",
        link: "#",
        title: "Шини",
        text: "Легко підібрати, легко придбати. Високоякісні шини від виробників. Допоможемо обрати краще. Різноманітний вибір. Сертифікована продукція. Гарантія якості. ",
    },
    {
        picture: "./img/promo6.jpg",
        pictureSmall: "./img/promo6small.jpg",
        link: "#",
        title: "Delivery",
        text: "We also understand the importance of keeping it fresh and hot, which is why our delivery partners ensure your food reaches you in perfect condition.",
    },
    {
        picture: "./img/promo7.jpg",
        pictureSmall: "./img/promo7small.jpg",
        link: "#",
        title: "Whirpool",
        text: "Whirlpool Corporation — американская компания, основанная братьями Фредом и Луи Аптоном в 1911 году в штате Мичиган.",
    },
]

const accordionElements = [
    {
        title: 'PC',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto',
        link: '#',
        src: './img/img-promo-pc.webp'
    },
    {
        title: 'Generators',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto',
        link: '#',
        src: './img/img-promo-generator.webp'
    },
    {
        title: 'TV',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla eius, reiciendis magnam, totam animi officiis, illum quasi iusto',
        link: '#',
        src: './img/img-promo-tv.avif'
    },
]   

const products = [
    {   
        id : 1,
        href: '#',
        comments: '#1',
        commentsAmount: "123 отзыва",
        title: "Ноутбук ASUS TUF Gaming A15 (2023) FA507NV-LP031",
        src: "./img/ASUSTUFGamingA15.webp",
        alt: "",
        price: `59 999`,
        currentPrice: "51 999",
        promotion: "акция",
        deliveryStatus: `Готов к отправке`,
    },
    {
        id : 2,
        href: "#",
        comments: "#1",
        commentsAmount: "45 отзывов",
        title: 'Ноутбук Acer Aspire 7 A715-43G-R92H (NH.QHHEU.00G) Charcoal Black',
        src: "./img/acerAspire7.webp",
        alt: "",
        price: "39 999",
        currentPrice: "34 999",
        promotion: "акция",
    },
    {
        id : 3,
        href: "#",
        comments: "#1",
        commentsAmount: "64 отзыва",
        title: "Ноутбук Apple MacBook Air 13 M1 8/256GB 2020 (MGN63) Space Gray",
        src: "./img/MacBookAir13.webp",
        alt: "",
        price: "",
        currentPrice: "36 999",
        deliveryStatus: 'Готов к отправке',
    },
    {
        id : 4,
        href: "#",
        comments: "#1",
        commentsAmount: "35 отзывов",
        title: "Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 (82K10190RA) Shadow Black",
        src: "./img/LenovoIdeaPadGaming3.webp",
        alt: "",
        price: "39 999",
        currentPrice: "32 999",
        promotion: "акция",
        deliveryStatus: "Готов к отправке",
    },
    {   
        id : 5,
        href: '#',
        comments: '#1',
        commentsAmount: "123 отзыва",
        title: "Ноутбук ASUS TUF Gaming F15 FX506HF-HN018 (90NR0HB4-M00510) Graphite Black ",
        src: "./img/f15.webp",
        alt: "",
        price: "59 999",
        currentPrice: "51 999",
        promotion: "акция",
        deliveryStatus: "Готов к отправке",
    },
    {
        id : 6,
        href: "#",
        comments: "#1",
        commentsAmount: "45 отзывов",
        title: 'Ноутбук ASUS Vivobook 15 X1502ZA-BQ546',
        src: "./img/VivoBook.webp",
        alt: "",
        price: "39 999",
        currentPrice: "34 999",
        promotion: "акция",
    },
]
