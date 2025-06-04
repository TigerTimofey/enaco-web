const navbarMenus = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/meist' },
    { label: 'Services', href: '/teenused' },
    { label: 'Guarantees', href: '/garantiid' },
    { label: 'Contacts', href: '/kontakt' },
  ],
  ee: [
    { label: 'Avaleht', href: '/' },
    { label: 'Meist', href: '/meist' },
    { label: 'Teenused', href: '/teenused' },
    { label: 'Garantii', href: '/garantiid' },
    { label: 'Kontaktid', href: '/kontakt' },
  ],
  ru: [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/meist' },
    { label: 'Услуги', href: '/teenused' },
    { label: 'Гарантии', href: '/garantiid' },
    { label: 'Контакты', href: '/kontakt' },
  ],
};

export const navbarLabels = {
  en: {
    home: navbarMenus.en[0].label,
    about: navbarMenus.en[1].label,
    services: navbarMenus.en[2].label,
    guarantees: navbarMenus.en[3].label,
    contacts: navbarMenus.en[4].label,
  },
  ee: {
    home: navbarMenus.ee[0].label,
    about: navbarMenus.ee[1].label,
    services: navbarMenus.ee[2].label,
    guarantees: navbarMenus.ee[3].label,
    contacts: navbarMenus.ee[4].label,
  },
  ru: {
    home: navbarMenus.ru[0].label,
    about: navbarMenus.ru[1].label,
    services: navbarMenus.ru[2].label,
    guarantees: navbarMenus.ru[3].label,
    contacts: navbarMenus.ru[4].label,
  },
};

export const homeLabels = {
  en: {
    heroTitle: "We have been dealing with car parts for over 10 years",
    heroSubtitle: "Our main areas of activity are the sale of factory-refurbished turbochargers, steering racks, and manual gearboxes for minibuses.",
    contactBtn: "Contact Us",
    subscribeBtn: "Subscribe",
    messageBtn: "Message",
   padding: '2rem 1.5rem',    PROD_ONE: "Turbocharger",
    PROD_ONE_BTN: "Turbocharger",
    PROD_ONE_ID: "101",
    productCardTitle: "Sale and repair of factory-reconditioned turbos",
    productCardDesc: "Sale of new and renovated turbochargers, in the course of which we want to recover the old part as a replacement reserve. We provide a 1-year manufacturer’s warranty to the turbos (without mileage limit).",
    productCardBtn: "Get price for {PRODUCT_NAME}",

    PROD_TWO: "Steering rack",
    PROD_TWO_BTN: "Steering rack",
    PROD_TWO_ID: "102",
    productCardTitle2: "Sale of renovated, i.e. factory-reconditioned steering racks",
    productCardDesc2: "Sale of factory-reconditioned steering racks and sale of renovated steering racks. 1-year warranty to steering racks (without mileage limit). We repair and recondition steering transmissions of passenger cars and vans. Feel free to ask for an offer!",
    productCardBtn2: "Get price for {PRODUCT_NAME}",

    PROD_THREE: "Manual gearbox",
    PROD_THREE_BTN: "Manual gearbox",
    PROD_THREE_ID: "103",
    productCardTitle3: "Sale and repair of manual gearboxes",
    productCardDesc3: "Sale of factory-reconditioned manual gearboxes for Renault, Citroën, Opel, Mercedes-Benz, Nissan, Peugeot, Ford, Fiat and Volkswagen vans. 1-year warranty to manual gearboxes (without mileage limit).",
    productCardBtn3: "Get price for {PRODUCT_NAME}",

    PROD_FOUR: "Engine",
    PROD_FOUR_BTN: "Engine",
    PROD_FOUR_ID: "104",
    productCardTitle4: "Sale of car engines",
    productCardDesc4: "Engines – used engines with checked history from Europe. Warranty to all products guaranteed!",
    productCardBtn4: "Get price for {PRODUCT_NAME}"
  },
  ee: {
    heroTitle: "Oleme tegelenud autovaruosadega üle 10 aasta",
    heroSubtitle: "Meie põhitegevusalad on tehaseremonditud turbode, roolilattide ja manuaalkäigukastide müük väikebussidele.",
    contactBtn: "Võta meiega ühendust",
    subscribeBtn: "Telli",
    messageBtn: "Sõnum",
    PROD_ONE: "Turbo",
    PROD_ONE_BTN: "Turbole",
    PROD_ONE_ID: "101",
    productCardTitle: "Tehaseremonditud turbode müük ja remont",
    productCardDesc: "Müüme uusi ja renoveeritud turbosid, mille käigus soovime vana osa taastada asendusvaruks. Turbodele anname 1-aastase tootjagarantii (ilma läbisõidupiiranguta).",
    productCardBtn: "Hind {PRODUCT_NAME}",

    PROD_TWO: "Roolilatt",
    PROD_TWO_BTN: "Roolilatile",
    PROD_TWO_ID: "102",
    productCardTitle2: "Tehaseremonditud roolilattide müük",
    productCardDesc2: "Tehaseremonditud ja renoveeritud roolilattide müük. 1-aastane garantii roolilattidele (ilma läbisõidupiiranguta). Remondime ja renoveerime sõiduautode ja väikebusside roolilatte. Küsi pakkumist!",
    productCardBtn2: "Hind {PRODUCT_NAME}",

    PROD_THREE: "Käigukast",
    PROD_THREE_BTN: "Käigukastile",
    PROD_THREE_ID: "103",
    productCardTitle3: "Manuaalkäigukastide müük ja remont",
    productCardDesc3: "Tehaseremonditud manuaalkäigukastide müük Renault, Citroën, Opel, Mercedes-Benz, Nissan, Peugeot, Ford, Fiat ja Volkswagen väikebussidele. 1-aastane garantii käigukastidele (ilma läbisõidupiiranguta).",
    productCardBtn3: "Hind {PRODUCT_NAME}",

    PROD_FOUR: "Mootor",
    PROD_FOUR_BTN: "Mootorile",
    PROD_FOUR_ID: "104",
    productCardTitle4: "Mootorite müük",
    productCardDesc4: "Mootorid – kontrollitud ajalooga kasutatud mootorid Euroopast. Kõigile toodetele garantii!",
    productCardBtn4: "Hind {PRODUCT_NAME}"
  },
  ru: {
    heroTitle: "Мы занимаемся автомобильными деталями более 10 лет",
    heroSubtitle: "Наши основные сферы деятельности это продажа восстановленных на заводе турбин, рулевых реек и механических коробок переключения передач от микроавтобусов",
    contactBtn: "Связаться с нами",
    subscribeBtn: "Подписаться",
    messageBtn: "Сообщение",
    PROD_ONE: "Турбина",
    PROD_ONE_BTN: "на Турбину",
    PROD_ONE_ID: "101",
    productCardTitle: "Продажа и ремонт восстановленных турбин",
    productCardDesc: "Продажа новых и восстановленных турбокомпрессоров, при этом мы хотим получить старую деталь в качестве замены. На турбины предоставляется 1 год гарантии производителя (без ограничения пробега).",
    productCardBtn: "Получить цену {PRODUCT_NAME}",

    PROD_TWO: "Рулевая рейка",
    PROD_TWO_BTN: "на Рейку",
    PROD_TWO_ID: "102",
    productCardTitle2: "Продажа восстановленных рулевых реек",
    productCardDesc2: "Продажа восстановленных на заводе и отремонтированных рулевых реек. 1 год гарантии на рейки (без ограничения пробега). Ремонтируем и восстанавливаем рулевые механизмы легковых и грузовых авто. Запросите предложение!",
    productCardBtn2: "Получить цену {PRODUCT_NAME}",

    PROD_THREE: "Механическая коробка передач",
    PROD_THREE_BTN: "на КПП",
    PROD_THREE_ID: "103",
    productCardTitle3: "Продажа и ремонт механических коробок передач",
    productCardDesc3: "Продажа восстановленных на заводе механических коробок передач для микроавтобусов Renault, Citroën, Opel, Mercedes-Benz, Nissan, Peugeot, Ford, Fiat и Volkswagen. 1 год гарантии на коробки (без ограничения пробега).",
    productCardBtn3: "Получить цену {PRODUCT_NAME}",

    PROD_FOUR: "Двигатель",
    PROD_FOUR_BTN: "на Двигатель",
    PROD_FOUR_ID: "104",
    productCardTitle4: "Продажа автомобильных двигателей",
    productCardDesc4: "Двигатели – проверенные подержанные двигатели из Европы. Гарантия на все товары!",
    productCardBtn4: "Получить цену {PRODUCT_NAME}"
  }
};

export const navbarLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ee', name: 'Eesti', flag: '🇪🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export function getNavbarMenu(lang = 'ee') {
  return navbarMenus[lang] || navbarMenus['ee'];
}

export const section3Labels = {
  en: {
    title: "We make it easy to buy spare parts",
    items: [
      {
        icon: 1,
        title: "10-year experience",
        text: "Over 10 years of experience and professional pre-purchase consultation."
      },
      {
        icon: 2,
        title: "Door-to-door delivery in one day",
        text: "With the help of our good and long-term partners Cargo and DPD, you may order the spare part to your home, office or workshop in one day."
      },
      {
        icon: 3,
        title: "12-month warranty",
        text: "12-month warranty to all reconditioned equipment sold by Enaco Group OÜ (without mileage limit)."
      },
      {
        icon: 4,
        title: "We care about our customers",
        text: "We always strive to provide the best service and support for our customers, ensuring satisfaction and long-term cooperation."
      }
    ]
  },
  ee: {
    title: "Varuosade ostmine on lihtne",
    items: [
      {
        icon: 1,
        title: "10-aastane kogemus",
        text: "Üle 10 aasta kogemust ja professionaalne ostueelne nõustamine."
      },
      {
        icon: 2,
        title: "Kohaletoimetamine ühe päevaga",
        text: "Meie head ja pikaajalised partnerid Cargo ja DPD toimetavad varuosa koju, kontorisse või töökotta ühe päevaga."
      },
      {
        icon: 3,
        title: "12-kuuline garantii",
        text: "Kõigile Enaco Group OÜ poolt müüdud taastatud seadmetele kehtib 12-kuuline garantii (ilma läbisõidupiiranguta)."
      },
      {
        icon: 4,
        title: "Hoolime alati oma klientidest",
        text: "Püüame alati pakkuda parimat teenindust ja tuge, et tagada klientide rahulolu ja pikaajaline koostöö."
      }
    ]
  },
  ru: {
    title: "Покупать запчасти легко",
    items: [
      {
        icon: 1,
        title: "10 лет опыта",
        text: "Более 10 лет опыта и профессиональная консультация перед покупкой."
      },
      {
        icon: 2,
        title: "Доставка за 1 день",
        text: "С помощью наших давних партнеров Cargo и DPD вы можете получить запчасть домой, в офис или мастерскую за один день."
      },
      {
        icon: 3,
        title: "12 месяцев гарантии",
        text: "12 месяцев гарантии на все восстановленное оборудование, продаваемое Enaco Group OÜ (без ограничения пробега)."
      },
      {
        icon: 4,
        title: "Мы всегда заботимся о клиентах",
        text: "Мы всегда стремимся обеспечить лучший сервис и поддержку для наших клиентов, гарантируя удовлетворенность и долгосрочное сотрудничество."
      }
    ]
  }
};
