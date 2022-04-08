// Data
const ourNewsData = [
    {
        text: 'Another important day of our work - 8 tons of aid has already arrived in Yahotyn, Kyiv region.',
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2265691863571436',
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/277590769_2265691080238181_8914085739104749974_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=TCMDLwkVA_gAX_kLaEa&_nc_ht=scontent.fiev9-1.fna&oh=00_AT806PagwSwy8xmc5e4qOkIX6FOhjnXHNn7UG0qz9KFcdw&oe=6253DB11'
    },
    {
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/277511592_2262603417213614_2595547045913453475_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-5&_nc_sid=36a2c1&_nc_ohc=fYivMpkqAKUAX8Fd23h&_nc_ht=scontent.fiev9-1.fna&oh=00_AT8iIbYFELgqtG2yIR9QoxNeio_wo3kuC7zKLpdEX4GG6g&oe=62546A9E',
        text: 'We thank the public preschool institutions "Wroc ławskie Skauty" Przedszkole Wrocławskie Skauty for their assistance. We received 25 parcels with products...',
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2262612663879356'
    },
    {
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2263666030440686',
        text: 'We are invincible when together, fearless when we act as one.We know how to help, but we also know how to accept help with gratitude.10 tons of important cargo from UNICEF Ukraine',
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/277533834_2263664477107508_4007967558641631709_n.jpg?stp=dst-jpg_s261x260&_nc_cat=107&ccb=1-5&_nc_sid=8024bb&_nc_ohc=LSjsghTdW40AX95LpoB&_nc_ht=scontent.fiev9-1.fna&edm=AN6CN6oEAAAA&oh=00_AT8oKid5Z7Neqru00uYrZt-ZG3Q-zjUBz6bKw45kYeREUw&oe=624F0080'
    },
    {
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/277148644_2257991694341453_9169186942272618028_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JoH5sFK0tIsAX9DoO2N&_nc_ht=scontent.fiev9-1.fna&oh=00_AT8aVrh_thDNZBwfHmusXCyP1YB0PL1l4GBEbjPbmsg7GA&oe=624EE5A9',
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2257991467674809',
        text: 'Our Volunteer Movement Charitable Foundation is an official partner of UNICEF Ukraine.Transferred to the Zaporozhye Regional Clinical Children\'s Hospital medical kits.'
    },
    {
        text: 'Today, 2,500 gasoline generators with a capacity of 5,500 watts were handed over to the Kharkiv Regional Clinical Hospital.',
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/277476697_2258356664304956_8660702509634655449_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Su7xPUahYcAAX_6HP5p&_nc_ht=scontent.fiev9-1.fna&oh=00_AT-sG9RzDO5wV_FyKdZy-bCoBcp84MyVdcTZOmWWZm-RzA&oe=624FB147',
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2258358980971391'
    },
    {
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/275883695_2253225321484757_4730285968449203711_n.jpg?stp=dst-jpg_p417x417&_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1lprC6Dm0RUAX_8pQZD&_nc_ht=scontent.fiev9-1.fna&oh=00_AT8MpO_jRYa2Qh8RVjVPYWnVizC0Gsw-YFJY_rJiSr7OgA&oe=624FBADD',
        text: 'Only yesterday we gave food to our four-legged friends, and today we receive photos with gratitude and emotions. <br> In the first photo, a dog from one of the TROs.',
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2253225121484777'
    },
    {
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/275131859_2248919431915346_2023490884740096744_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=L-Umu3hIoQwAX8KSATk&_nc_ht=scontent.fiev9-1.fna&oh=00_AT_n7xz5L-b9mI0ZgwhnO72yJVr4kZ4CuAC0v5sH6heSQw&oe=62544EF5',
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2248919395248683',
        text: '12th hospital of the city of Kyiv.Products, baby diapers, general medicine.They handed everything over to the volunteer headquarters at the hospital.'
    },
    {
        urlImg: 'https://scontent.fiev9-1.fna.fbcdn.net/v/t39.30808-6/275754001_2247234188750537_1275284057219929975_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-5&_nc_sid=36a2c1&_nc_ohc=lAJ8bVlQ1VgAX85Gq6I&_nc_ht=scontent.fiev9-1.fna&oh=00_AT-_vLJv0kfC7HQMv52Q-IQu0j6p9cESJbLFaR5Go9NsJw&oe=62545587',
        text: 'The next download today is for children\'s hospitals.Baby medicines, diapers, baby hygiene, baby food, baby clothes, water, blankets.',
        link: 'https://www.facebook.com/cf.volunteer.movement/posts/2247234025417220'
    }
];
const ourVolunteersDataEn = [
    {
        urlImg: 'assets/our-volunteer/bogdana-iarova.webp',
        name: 'Bogdana Iarova',
        position: 'Volunteer',
        city: 'Kyiv, Ukraine'
    },
    {
        urlImg: 'assets/our-volunteer/nataliia-gnatiuk.webp',
        name: 'Nataliia Gnatiuk',
        position: 'Lawyer',
        city: 'Kyiv, Ukraine'
    },
    {
        urlImg: 'assets/our-volunteer/serhii-tymoshchuk.webp',
        name: 'Serhii Tymoshchuk',
        position: 'CEO - Zdorovi24',
        city:  'Kyiv, Ukraine',
    },
    {
        urlImg: 'assets/our-volunteer/liudmyla-dombrovska.webp',
        name: 'Liudmyla Dombrovska',
        position: 'HVAC Engineer',
        city: 'Wroclaw, Poland'
    },
    {
        urlImg: 'assets/our-volunteer/volodymyr-grynko.webp',
        name: 'Volodymyr Grynko',
        position: 'Businessman, <br> Innovative refrigeration systems',
        city: 'Dnipro, Ukraine'
    },
    {
        urlImg: 'assets/our-volunteer/anna-shvartsur.webp',
        name: 'Anna Shvartsur',
        position: 'Resident physician',
        city: 'California, United States'
    },
    {
        urlImg: 'assets/our-volunteer/Rostyslav-Pele.webp',
        name: 'Rostyslav Pelekhovych',
        position: 'Business Analyst, Entrepreneur',
        city: 'Kyiv, Ukraine'
    },
    {
        urlImg: 'assets/our-volunteer/anna-komarova.webp',
        name: 'Anna Komarova',
        position: 'Engineer with active civil position ',
        city: 'Kyiv, Ukraine'
    },
    {
        urlImg: 'assets/our-volunteer/bolbat-ivan.webp',
        name: 'Bolbat Ivan',
        position: 'Project Development Manager',
        city:  'Kyiv, Ukraine',
    },
    {
        urlImg: 'assets/our-volunteer/ivan-holoyda.webp',
        name: 'Ivan Holoyda',
        position: 'Mechanical Engineer / CEO - IGLU',
        city:  'Lviv, Ukraine',
    },
    {
        urlImg: 'assets/our-volunteer/melnyk-volodymyr.webp',
        name: 'Melnyk Volodymyr',
        position: 'Commercial Director – MacHOUSE ',
        city: 'Kyiv, Ukraine'
    },
    {
        urlImg: 'assets/our-volunteer/sergii-iakymov.webp',
        name: 'Sergii Iakymov',
        position: 'Aerospace engineer',
        city: 'Los Angeles, California, USA'
    },
];
const ourVolunteersDataUa = [
    {
        urlImg: 'assets/our-volunteer/bogdana-iarova.webp',
        name: 'Богдана Ярова',
        position: 'Волонтер',
        city: 'Київ, Україна'
    },
    {
        urlImg: 'assets/our-volunteer/nataliia-gnatiuk.webp',
        name: 'Наталія Гнатюк',
        position: 'Юрист',
        city: 'Київ, Україна'
    },
    {
        urlImg: 'assets/our-volunteer/serhii-tymoshchuk.webp',
        name: 'Сергій Тимощук',
        position: 'CEO - Zdorovi24',
        city:  'Київ, Україна',
    },
    {
        urlImg: 'assets/our-volunteer/liudmyla-dombrovska.webp',
        name: 'Людмила Домбровська',
        position: 'Інженер ОВіК',
        city: 'Вроцлав, Польща'
    },
    {
        urlImg: 'assets/our-volunteer/volodymyr-grynko.webp',
        name: 'Володимир Гринько',
        position: 'Бізнесмен, <br> інноваційні холодильні системи',
        city: 'Дніпро, Україна'
    },
    {
        urlImg: 'assets/our-volunteer/anna-shvartsur.webp',
        name: 'Анна Шварцур',
        position: 'Лікар-ординатор',
        city: 'Каліфорнія, США'
    },
    {
        urlImg: 'assets/our-volunteer/Rostyslav-Pele.webp',
        name: 'Ростислав Пелехович',
        position: 'Бізнес-аналітик, підприємець',
        city: 'Київ, Україна'
    },
    {
        urlImg: 'assets/our-volunteer/anna-komarova.webp',
        name: 'Анна Комарова',
        position: 'Інженер',
        city: 'Київ, Україна'
    },
    {
        urlImg: 'assets/our-volunteer/bolbat-ivan.webp',
        name: 'Іван Болбат',
        position: 'Менеджер проєкту',
        city:  'Київ, Україна',
    },
    {
        urlImg: 'assets/our-volunteer/ivan-holoyda.webp',
        name: 'Іван Голойда',
        position: 'Інженер-механік / СЕО ТОВ ІГЛУ',
        city:  'Львів, Україна',
    },
    {
        urlImg: 'assets/our-volunteer/melnyk-volodymyr.webp',
        name: 'Володимир Мельник',
        position: 'Комерційний директор ТОВ МАК ХАУС',
        city: 'Київ, Україна'
    },
    {
        urlImg: 'assets/our-volunteer/sergii-iakymov.webp',
        name: 'Сергій Якимов',
        position: 'Аерокосмічний інженер',
        city: 'Лос-Анджелес, Каліфорнія, США'
    },
];
const dataTextEn = {
    header: {
        menu: {
            title: 'MENU',
            links: ['About us', 'Our work', 'Fund facts', 'Our news']
        },
        donate: {
            title: 'DONATE'
        },
    },
    preview: {
        title: 'HELP UKRAINE <br> SAVE UKRAINE',
        donate: 'DONATE NOW'
    },
    aboutUs: {
        title: 'ABOUT US',
        text: 'CHARITABLE ORGANIZATION "CHARITABLE FUND" VOLUNTEER MOVEMENT"" has been established in 2014 during Maidan Revolution to provide aid to those who were fighting for us. In 2022 during Russian-Ukrainian war the foundation has expanded its activities worldwide and providing humanitarian aid, means of protection and medicine to those in need on Ukrainian soil.<br><br>Our foundation is partner of UN and UNICEF. <br><br>Decree of the President of Ukraine № 93/2022 of 02.03.2022 established the Coordination Headquarters for Humanitarian and Social Needs to help people affected by the war in meeting the necessary needs for food, clothing, hygiene products, etc. CHARITABLE ORGANIZATION "CHARITABLE FUND "VOLUNTEER MOVEMENT"" also cooperates with this HQ.',
        urkFound: 'Collaboration with <br> The Presidential Office of Ukraine'
    },
    ourWorks: {
        title: 'OUR WORK',
        human: 'HUMANITARIAN AID',
        life: 'LIFE-SAVING GOODS',
        medicine: 'TACTICAL MEDICINE'
    },
    fundFacts: {
        title: 'FUND FACTS',
        date: 'March 17, 2022',
        volunteers: 'Volunteers',
        donate: 'Donated',
        medical: 'Assisted'
    },
    ourNews: {
        title: 'OUR NEWS'
    },
    help: {
        text: 'Help us save our children',
        donate: 'DONATE NOW'
    },
    nft: {
        title: 'NFT DROP',
        button: 'SOON'
    },
    howSupport: {
        title: 'HOW TO SUPPORT UKRAINE',
        card: 'Card number',
        donate: 'DONATE'
    },
    helpRequest: {
        title: 'REQUEST FOR HELP',
        filForm: 'Fill the form',
        waitAnswer: 'Wait for answer',
        getHelp: 'Get your help',
        button: 'SEND REQUEST'
    },
    volunteer: {
        title: 'WANNA BECOME A VOLUNTEER?',
        button: 'JOIN US',
    },
    ourVolunteer: {
        title: 'MEET OUR VOLUNTEERS'
    },
    footer: {
        title: 'CONTACTS',
        text: 'CHARITABLE ORGANIZATION <br>«CHARITABLE FUND <br>«VOLUNTEER MOVEMENT»',
        mail: 'Email us',
        mobileNumber: 'Call centers'
    },
    donate: {
        title: 'SEND MONEY',
        fiz: 'INDIVIDUALS',
        law: 'ENTITIES',
        card: 'Card number',
        list:
            [
                '<span>Company Name</span> <br>СО «CF «VOLUNTEER MOVEMENT»',
                '<span>IBAN Code</span> <br>UA103204780000026009924919333',
                '<span>ID CODE</span> <br>39391038',
                '<span>Name of the Bank</span> <br>JSB «UKRGASBANK»',
                '<span>Bank SWIFT-Code</span> <br>UGASUAUKXXX',
                '<span>Company address</span> <br>57/59A POCHAINYNSKA STR., KYIV, 04070, UKRAINE (м. Київ, вул. Почайнинська 57/59а)',
                '<span> Purpose of payment</span> <br>Charitable donation for Ukraine'
            ],
        safe: '<img loading="lazy" src="assets/donate/zam.png" alt="">All rights reserved.'
    }
}
const dataTextUa = {
    header: {
        menu: {
            title: 'МЕНЮ',
            links: ['Про нас', 'Напрямки', 'Факти', 'Новини']
        },
        donate: {
            title: 'ДОПОМОГТИ'
        },
    },
    preview: {
        title: 'ДОПОМОЖІТЬ УКРАЇНІ <br> ЗБЕРЕЖІТЬ УКРАЇНУ',
        donate: 'ДОПОМОГТИ'
    },
    aboutUs: {
        title: 'ПРО НАС',
        text: 'БЛАГОДІЙНА ОРГАНІЗАЦІЯ «БЛАГОДІЙНИЙ ФОНД “ВОЛОНТЕРСЬКИЙ РУХ”» була створена у 2014 році за часів Майдану для надання допомоги тим, хто воював за Україну. У 2022 році під час російсько-української війни фонд розширив свою діяльність на весь світ, надає гуманітарну допомогу та забезпечує передачу засобів захисту і ліків населенню України. <br><br> Наш фонд є офіційним партнером ООН та партнером ЮНІСЕФ. <br> <br>Указом Президента України № 93/2022 від 02.03.2022 створено Координаційний штаб з гуманітарних та соціальних питань, щоб допомоги постраждалим від війни громадянам у задоволенні необхідних потреб у харчах, одязі, засобах гігієни тощо. БЛАГОДІЙНА ОРГАНІЗАЦІЯ  «БЛАГОДІЙНИЙ ФОНД “ВОЛОНТЕРСЬКИЙ РУХ”» плідно співпрацює з Координаційним штабом.',
        urkFound: 'Співпраця з <br>Офісом Президента України'
    },
    ourWorks: {
        title: 'НАПРЯМКИ',
        human: 'ГУМАНІТАРНА ДОПОМОГА',
        life: 'ТЕ, ЩО РЯТУЄ ЖИТТЯ',
        medicine: 'ТАКТИЧНА МЕДИЦИНА'
    },
    fundFacts: {
        title: 'ФАКТИ',
        date: '17 березня 2022',
        volunteers: 'Волонтерів',
        donate: 'Отримано',
        medical: 'Отримали допомогу'
    },
    ourNews: {
        title: 'НОВИНИ'
    },
    help: {
        text: 'Допоможіть нам врятувати наших дітей',
        donate: 'ДОПОМОГТИ'
    },
    nft: {
        title: 'NFT',
        button: 'СКОРО'
    },
    howSupport: {
        title: 'ЯК ПІДТРИМАТИ УКРАЇНУ',
        card: 'Карта',
        donate: 'ДОПОМОГТИ'
    },
    helpRequest: {
        title: 'ЗАПИТ НА ДОПОМОГУ',
        filForm: 'Заповніть форму',
        waitAnswer: 'Чекайте на відповідь',
        getHelp: 'Отримайте допомогу',
        button: 'НАДІСЛАТИ ЗАПИТ'
    },
    volunteer: {
        title: 'ХОЧЕШ СТАТИ <br> ВОЛОНТЕРОМ?',
        button: 'ПРИЄДНАТИСЬ',
    },
    ourVolunteer: {
        title: 'НАШІ ВОЛОНТЕРИ'
    },
    footer: {
        title: 'КОНТАКТИ',
        text: 'БЛАГОДІЙНИЙ ФОНД<br>«ВОЛОНТЕРСЬКИЙ РУХ»',
        mail: 'Пошта',
        mobileNumber: 'Номери телефону'
    },
    donate: {
        title: 'НАДІСЛАТИ КОШТИ',
        fiz: 'ФІЗИЧНІ ОСОБИ',
        law: 'ЮРИДИЧНІ ОСОБИ',
        card: 'Картка',
        list:
            [
                '<span>Назва організації</span> <br>БО «БФ «ВОЛОНТЕРСЬКИЙ РУХ»',
                '<span>IBAN Code</span> <br>UA103204780000026009924919333',
                '<span>Код ЄДРПОУ</span> <br>39391038',
                '<span>Назва банку</span> <br>АБ «УКРГАЗБАНК»',
                '<span>SWIFT-код банку</span> <br>UGASUAUKXXX',
                '<span>Адреса організації</span> <br>04070,  Україна, м. Київ, вул. Почайнинська 57/59а',
                '<span>Призначення платежу</span> <br>Благодійний внесок для України'
            ],
        safe: '<img loading="lazy" src="assets/donate/zam.png" alt="">Всі права захищені'
    }
}
let volunteerData = ourVolunteersDataEn;


// Windows API----------------------------------------------------------------------------------------------------------
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

window.addEventListener('resize', () => {
    if (winWidth !== window.innerWidth) {
        winWidth = window.innerWidth;
        // detail

    } else if (winHeight !== window.innerHeight) {
        winHeight = window.innerHeight;
        // detail
    }
})


// Menu events------------------------------------------------------------------------------------------------------

const burgerMenuEl = document.querySelector('[data-burger-nav]');
const headerMenuEl = document.querySelector('[data-header-nav]');
let isOpen = false;

burgerMenuEl.addEventListener('click', (e) => {
    isOpen = !isOpen;
    isOpen ?  headerMenuEl.style.display = 'flex' :  headerMenuEl.style.display = 'none';

    headerMenuEl.addEventListener('click', () => {
        headerMenuEl.style.display = 'none';
        isOpen = false
    })
})

// Donate Buttons and popUp-----------------------------------------------------------------------------------------

const donateCloseBtn = document.querySelector('[data-donate-cross]');
let donateTopImgEl = document.querySelector('[data-donate-top-img]');

const donateBtn = document.querySelectorAll('[data-donate-btn]');

donateCloseBtn.addEventListener('click', () => {
    document.querySelector('[data-donate-page]').style.display = 'none';
})

donateBtn.forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('[data-donate-page]').style.display = 'flex'
    })
    if(donateTopImgEl) {
        donateTopImgEl.src = donateTopImgEl.getAttribute('data-src');
        donateTopImgEl = undefined;
    }
})


// Cards rendering ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function renderVolunteerEl (volunteer, index) {
    const caseEl = document.createElement('article');
    caseEl.setAttribute('data-our-volunteer-el', index)

    const imgEl = document.createElement('img');
    imgEl.src = volunteer.urlImg;
    imgEl.loading = 'lazy';
    imgEl.alt = 'Volunteer img';

    caseEl.appendChild(imgEl)

    const divTextEl = document.createElement('div');

    const nameEl = document.createElement('h2');
    nameEl.innerHTML = volunteer.name;

    const aboutEl = document.createElement('p');
    aboutEl.innerHTML = volunteer.position;

    const cityEl = document.createElement('p');
    cityEl.classList.add('volunteer__city');
    cityEl.innerHTML = volunteer.city;

    divTextEl.appendChild(nameEl)
    divTextEl.appendChild(aboutEl)
    divTextEl.appendChild(cityEl)

    caseEl.appendChild(divTextEl)

    return caseEl;
}
function initCards(data, container, renderFn) {
    document.querySelector(container).innerHTML = '';

    data.forEach((el, index) => {
        document.querySelector(container).appendChild(renderFn(el, index));
    })
}
function renderNewsEl (news, index) {
    const caseEl = document.createElement('article');
    caseEl.classList.add('our-cases__item');
    caseEl.setAttribute('data-our-news-el', index)

    const imgEl = document.createElement('img');
    imgEl.src = news.urlImg;
    imgEl.loading = 'lazy';
    imgEl.alt = 'case img';

    caseEl.appendChild(imgEl)

    const divEl = document.createElement('div');
    divEl.classList.add('our-cases__info')

    const textEl = document.createElement('p');
    textEl.classList.add('info__text');
    textEl.innerHTML = news.text;

    const buttonEl = document.createElement('a');
    buttonEl.href = news.link;
    buttonEl.target = '_blank';
    buttonEl.rel = 'noopener noreferrer';
    buttonEl.innerHTML = 'MORE INFO';

    divEl.appendChild(textEl)
    divEl.appendChild(buttonEl)

    caseEl.appendChild(divEl)

    return caseEl;
}




// News Slider Events ------------------------------------------------------------------------------------------
function renderingOnViewNews() {
    initCards(ourNewsData, '[data-our-news-container]', renderNewsEl)
    $('div[data-our-news-container]').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<svg class="next-arrow" width="21" height="60" viewBox="0 0 21 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 30L0.75 59.4449L0.75 0.555136L21 30Z" fill="#0E4194"/></svg>',
        prevArrow: '<svg class="prev-arrow" width="21" height="60" viewBox="0 0 21 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 30L20.25 0.555138L20.25 59.4449L0 30Z" fill="#0E4194"/></svg>',

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })
}


// Volunteers Slider Events ------------------------------------------------------------------------------------------
function renderingOnViewVolunteers() {
    initCards(ourVolunteersDataEn, '[data-our-volunteers-container]', renderVolunteerEl);
    $('div[data-our-volunteers-container]').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<svg class="next-arrow" width="21" height="60" viewBox="0 0 21 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 30L0.75 59.4449L0.75 0.555136L21 30Z" fill="#0E4194"/></svg>',
        prevArrow: '<svg class="prev-arrow" width="21" height="60" viewBox="0 0 21 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 30L20.25 0.555138L20.25 59.4449L0 30Z" fill="#0E4194"/></svg>',

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })
}

// Lazy Loading (Rendering) ------------------------------------------------------------------------------------------------
let infoContainerEL = document.querySelector('[data-info-con]');
let volunteerReqContainerEL = document.querySelector('[data-volunteer-req]');
let helpContainerEL = document.querySelector('[data-help-con]');
let ourWorksImgEls = document.querySelector('[data-our-works-con]').querySelectorAll('img');
let newsContainerEL = document.querySelector('[data-our-news-container]');
let volunteersContainerEL = document.querySelector('[data-our-volunteers-container]');


if (newsContainerEL) {
    if (pageYOffset + winHeight + 200 > newsContainerEL.getBoundingClientRect().top + pageYOffset) {
        renderingOnViewNews()
        newsContainerEL = false
    }
}

if (volunteersContainerEL) {
    if (pageYOffset + winHeight + 200 > volunteersContainerEL.getBoundingClientRect().top + pageYOffset) {
        renderingOnViewVolunteers()
        volunteersContainerEL = false
    }
}

if(infoContainerEL) {
    if (pageYOffset + winHeight + 200 > infoContainerEL.getBoundingClientRect().top + pageYOffset) {
        infoContainerEL.style.backgroundImage = 'url(./assets/info/info-bg.webp)';
        infoContainerEL = false
    }
}
if(volunteerReqContainerEL) {
    if (pageYOffset + winHeight + 200 > volunteerReqContainerEL.getBoundingClientRect().top + pageYOffset) {
        volunteerReqContainerEL.style.backgroundImage = 'url(./assets/volunteer/volunteer-req-bg.jpg)';
        volunteerReqContainerEL = false
    }
}
if(helpContainerEL) {
    if (pageYOffset + winHeight + 200 > helpContainerEL.getBoundingClientRect().top + pageYOffset) {
        volunteerReqContainerEL.style.backgroundImage = 'url(./assets/help/help-bg.webp)';
        helpContainerEL = false
    }
}
if(ourWorksImgEls) {
    if(pageYOffset + winHeight + 300 > ourWorksImgEls[0].getBoundingClientRect().top + pageYOffset) {
        ourWorksImgEls.forEach((el) => {
            el.src = el.getAttribute('data-src')
            ourWorksImgEls = false
        })
    }
}


window.addEventListener('scroll', () => {

    if(infoContainerEL) {
        if (pageYOffset + winHeight + 200 > infoContainerEL.getBoundingClientRect().top + pageYOffset) {
            infoContainerEL.style.backgroundImage = 'url(./assets/info/info-bg.webp)';
            infoContainerEL = false
        }
    }

    if(volunteerReqContainerEL) {
        if (pageYOffset + winHeight + 200 > volunteerReqContainerEL.getBoundingClientRect().top + pageYOffset) {
            volunteerReqContainerEL.style.backgroundImage = 'url(./assets/volunteer/volunteer-req-bg.jpg)';
            volunteerReqContainerEL = false
        }
    }

    if(helpContainerEL) {
        if (pageYOffset + winHeight + 200 > helpContainerEL.getBoundingClientRect().top + pageYOffset) {
            helpContainerEL.style.backgroundImage = 'url(./assets/help/help-bg.webp)';
            helpContainerEL = false
        }
    }

    if(ourWorksImgEls) {
        if(pageYOffset + winHeight + 300 > ourWorksImgEls[0].getBoundingClientRect().top + pageYOffset) {
            ourWorksImgEls.forEach((el) => {
                el.src = el.getAttribute('data-src')
                ourWorksImgEls = false
            })
        }
    }

    if (newsContainerEL) {
        if (pageYOffset + winHeight + 200 > newsContainerEL.getBoundingClientRect().top + pageYOffset) {
            renderingOnViewNews()
            newsContainerEL = false
        }
    }

    if (volunteersContainerEL) {
        if (pageYOffset + winHeight + 200 > volunteersContainerEL.getBoundingClientRect().top + pageYOffset) {
            renderingOnViewVolunteers()
            volunteersContainerEL = false
        }
    }
})



// Language----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function changeLanguage(language) {
    const headerEl = document.querySelector('.header');
    const menuEl = headerEl.querySelector('.header__navigation');
    menuEl.querySelector('p').innerHTML = language.header.menu.title;
    const menuLinksEls = menuEl.querySelector('.navigation__list').querySelectorAll('a');
    for (let i = 0; i < 4; i++) {
        menuLinksEls[i].innerHTML = language.header.menu.links[i];
    }
    headerEl.querySelector('.header__actions').querySelector('button').innerHTML = language.header.donate.title;

    const previewEl = document.querySelector('.preview');
    previewEl.querySelector('h1').innerHTML = language.preview.title;
    previewEl.querySelector('[data-preview-btn]').innerHTML = language.preview.donate;

    const aboutUsEl = document.querySelector('.about-us');
    aboutUsEl.querySelector('.section__title').innerHTML = language.aboutUs.title;
    aboutUsEl.querySelector('.about-us__info').innerHTML = language.aboutUs.text;
    aboutUsEl.querySelector('.about-us__colab').querySelector('p').innerHTML = language.aboutUs.urkFound;

    const ourWorksEl = document.querySelector('.our-works');
    ourWorksEl.querySelector('.section__title').innerHTML = language.ourWorks.title;
    ourWorksEl.querySelector('[data-our-work-human]').innerHTML = language.ourWorks.human;
    ourWorksEl.querySelector('[data-our-work-life]').innerHTML = language.ourWorks.life;
    ourWorksEl.querySelector('[data-our-work-medicine]').innerHTML = language.ourWorks.medicine;

    const fundFactsEl = document.querySelector('.fund-facts');
    fundFactsEl.querySelector('.section__title').innerHTML = language.fundFacts.title;
    fundFactsEl.querySelector('.fund-facts__text').innerHTML = language.fundFacts.date;
    fundFactsEl.querySelector('[data-fund-facts-vol]').innerHTML = language.fundFacts.volunteers;
    fundFactsEl.querySelector('[data-fund-facts-don]').innerHTML = language.fundFacts.donate;
    fundFactsEl.querySelector('[data-fund-facts-assis]').innerHTML = language.fundFacts.medical;

    const ourNewsEl = document.querySelector('.our-cases');
    ourNewsEl.querySelector('.section__title').innerHTML = language.ourNews.title;

    const ourHelpEl = document.querySelector('.help-section');
    ourHelpEl.querySelector('p').innerHTML = language.help.text;
    ourHelpEl.querySelector('button').innerHTML = language.help.donate;

    const nftEl = document.querySelector('.nft');
    nftEl.querySelector('h2').innerHTML = language.nft.title;
    nftEl.querySelector('button').innerHTML = language.nft.button;

    const howSupportEl = document.querySelector('.how-support');
    howSupportEl.querySelector('.section__title').innerHTML = language.howSupport.title
    howSupportEl.querySelector('[data-how-support-card]').innerHTML = language.howSupport.card;
    howSupportEl.querySelector('.section__button').innerHTML = language.howSupport.donate;

    const requestHelpEl = document.querySelector('.request-help');
    requestHelpEl.querySelector('.section__title').innerHTML = language.helpRequest.title
    requestHelpEl.querySelector('[data-help-request-fill]').innerHTML = language.helpRequest.filForm;
    requestHelpEl.querySelector('[data-help-request-wait]').innerHTML = language.helpRequest.waitAnswer;
    requestHelpEl.querySelector('[data-help-request-get]').innerHTML = language.helpRequest.getHelp;
    requestHelpEl.querySelector('.section__button').innerHTML = language.helpRequest.button;

    const volunteerReqEl = document.querySelector('.volunteer');
    volunteerReqEl.querySelector('.section__title').innerHTML = language.volunteer.title;
    volunteerReqEl.querySelector('a').innerHTML = language.volunteer.button;

    const ourVolunteerEl = document.querySelector('.out-volunteer');
    ourVolunteerEl.querySelector('.section__title').innerHTML = language.ourVolunteer.title;

    const footerEl = document.querySelector('.footer');
    footerEl.querySelector('.footer__title').innerHTML = language.footer.title;
    footerEl.querySelector('.footer__info-org').innerHTML = language.footer.text;
    footerEl.querySelector('.footer__email').innerHTML = language.footer.mail;
    footerEl.querySelector('.footer__call-center').innerHTML = language.footer.mobileNumber;
    const donateEl = document.querySelector('.donate');
    donateEl.querySelector('.donate__title').innerHTML = language.donate.title;
    donateEl.querySelector('[data-donate__card-number]').innerHTML = language.donate.card;
    const donateExpenses = donateEl.querySelector('.donate__expenses').querySelectorAll('p');

    for (let i = 0; i < donateExpenses.length; i++) {
        donateExpenses[i].innerHTML = language.donate.list[i]
    }

    donateEl.querySelector('.donate__safes').innerHTML = language.donate.safe;

}

function handleChangeLang(lang) {
    let currentLang = '';
    let changedLang = '';

    if(lang === 'ua') {
        currentLang = 'data-language-ua';
        changedLang = 'data-language-en';
        changeLanguage(dataTextUa);
        volunteerData = ourVolunteersDataUa;
    } else {
        currentLang = 'data-language-en';
        changedLang = 'data-language-ua';
        changeLanguage(dataTextEn);
        volunteerData = ourVolunteersDataEn;
    }

    localStorage.setItem('lang', lang);
    document.querySelector(`[${currentLang}]`).classList.add('language__button-active');
    document.querySelector(`[${changedLang}]`).classList.remove('language__button-active');
}

document.querySelector('[data-language-ua]').addEventListener('click', () => handleChangeLang('ua'))
document.querySelector('[data-language-en]').addEventListener('click', () => handleChangeLang('en'))


// LocalStorage Lang--------------------------------------------------------------------------------------------------------

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en');
} else {
    if (localStorage.getItem('lang') === 'ua') {
        handleChangeLang('ua')
    }
}

