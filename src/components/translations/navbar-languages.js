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
    heroTitle: "We are a company specializing in used, refurbished, and new auto parts since 2020.",
    heroSubtitle: "We supply parts across Estonia and the European Union, focusing on high-demand components with reliable quality, warranty, and fast delivery.",
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
    PROD_TWO_BTN: "Steering racks",
    PROD_TWO_ID: "102",
    productCardTitle2: "Sale of renovated, i.e. factory-reconditioned steering racks",
    productCardDesc2: "Sale of factory-reconditioned steering racks and sale of renovated steering racks. 1-year warranty to steering racks (without mileage limit). We repair and recondition steering transmissions of passenger cars and vans. Feel free to ask for an offer!",
    productCardBtn2: "Get price for {PRODUCT_NAME}",

    PROD_THREE: "Gearbox",
    PROD_THREE_BTN: "Gearboxes",
    PROD_THREE_ID: "103",
    productCardTitle3: "Sale and repair of manual gearboxes",
    productCardDesc3: "Sale of factory-reconditioned manual gearboxes for Renault, Citroën, Opel, Mercedes-Benz, Nissan, Peugeot, Ford, Fiat and Volkswagen vans. 1-year warranty to manual gearboxes (without mileage limit).",
    productCardBtn3: "Get price for {PRODUCT_NAME}",

    PROD_FOUR: "Engine",
    PROD_FOUR_BTN: "Engines",
    PROD_FOUR_ID: "104",
    productCardTitle4: "Sale of car engines",
    productCardDesc4: "Engines – used engines with checked history from Europe. Warranty to all products guaranteed!",
    productCardBtn4: "Get price for {PRODUCT_NAME}",

    carouselWords: [
      "ENGINES",
      "MOTORS",
      "GEARBOXES",
      "TURBOCHARGERS",
      "AIR SUSPENSION",
      "DIFFERENTIAL BOXES",
      "TRANSFER CASES",
      "ELECTRONIC COMPONENTS",
      "ECUS",
      "MODULES"
    ],
    carouselButton: "Didn't find what you need? Contact us",
  },
  ee: {
    heroTitle: "Oleme ettevõte, mis on alates 2020. aastast spetsialiseerunud kasutatud, taastatud ja uute autovaruosade müügile.",
    heroSubtitle: "Meie tooted jõuavad klientideni üle Eesti ja Euroopa Liidu. Pakume kvaliteetseid ja nõutud varuosi koos garantiiga ja kiire tarnimisega.",
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
    productCardBtn4: "Hind {PRODUCT_NAME}",

    carouselWords: [
      "MOOTORID",
      "MOOTORID",
      "KÄIGUKASTID",
      "TURBOKOMPRESSORID",
      "ÕHKVEDRUSTUS",
      "DIFERENTSIAALID",
      "VAHEKASTID",
      "ELEKTROONIKAKOMPONENDID",
      "JUHTPLOKID",
      "MOODULID"
    ],
    carouselButton: "Ei leidnud sobivat? Võta meiega ühendust",
  },
  ru: {
    heroTitle: "Мы — компания, специализирующаяся на продаже б/у, восстановленных и новых автозапчастей с 2020 года.",
    heroSubtitle: "Наша компания поставляет автозапчасти по всей Эстонии и странам Европейского Союза. Мы специализируемся на самых востребованных агрегатах, обеспечивая высокое качество, гарантию и оперативную доставку.",
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
    productCardBtn4: "Получить цену {PRODUCT_NAME}",

    carouselWords: [
      "ДВИГАТЕЛИ",
      "МОТОРЫ",
      "КОРОБКИ ПЕРЕДАЧ",
      "ТУРБОКОМПРЕССОРЫ",
      "ПНЕВМОПОДВЕСКА",
      "ДИФФЕРЕНЦИАЛКОРМКИ",
      "РАЗДАТОЧНЫЕ КОРОБКИ",
      "ЭЛЕКТРОННЫЕ КОМПОНЕНТЫ",
      "ЭБУ",
      "МОДУЛИ"
    ],
    carouselButton: "Не нашли, что искали? Свяжитесь с нами",
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
        title: "Experience since 2020",
        text: "We have been operating since 2020 and offer professional pre-purchase consultation."
      },
      {
        icon: 2,
        title: "Fast delivery",
        text: "Our reliable and long-term partners deliver parts to your home, office or workshop. Parcel machine from 6 euros or OSC courier from 10 euros."
      },
      {
        icon: 3,
        title: "3-12 month warranty",
        text: "3-12 month warranty to all reconditioned equipment sold by Enaco Group OÜ (without mileage limit)."
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
        title: "Kogemus alates 2020. aastast",
        text: "Oleme tegutsenud alates 2020. aastast ning pakume professionaalset ostueelset nõustamist."
      },
      {
        icon: 2,
        title: "Kiire kohaletoimetamine",
        text: "Meie head ja pikaajalised partnerid toimetavad varuosa koju, kontorisse või töökotta. Pakiautomaadiga alates 6 eurost või OSC kulleriga alates 10 eurost"
      },
      {
        icon: 3,
        title: "3-12 kuuline garantii",
        text: "Kõigile Enaco Group OÜ poolt müüdud taastatud seadmetele kehtib 3-12 kuuline garantii (ilma läbisõidupiiranguta)."
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
        title: "Опыт с 2020 года",
        text: "Мы работаем с 2020 года и предлагаем профессиональную консультацию перед покупкой."
      },
      {
        icon: 2,
        title: "Быстрая доставка",
        text: "Наши надежные и долгосрочные партнеры доставят запчасти домой, в офис или мастерскую. Через постамат от 6 евро или курьером OSC от 10 евро."
      },
      {
        icon: 3,
        title: "Гарантия 3-12 месяцев",
        text: "На все восстановленное оборудование, продаваемое Enaco Group OÜ, предоставляется гарантия 3-12 месяцев (без ограничения пробега)."
      },
      {
        icon: 4,
        title: "Мы всегда заботимся о клиентах",
        text: "Мы всегда стремимся обеспечить лучший сервис и поддержку для наших клиентов, гарантируя удовлетворенность и долгосрочное сотрудничество."
      }
    ]
  }
};
