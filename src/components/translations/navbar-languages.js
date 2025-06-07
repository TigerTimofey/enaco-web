const navbarMenus = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/meist' },
    { label: 'Services', href: '/teenused' },
    { label: 'Warranty', href: '/garantiid' },
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
    heroTitle: "We are a company specializing in used, refurbished, and new auto parts since 2020",
    heroSubtitle: "We supply parts across Estonia and the European Union, focusing on high-demand components with reliable quality, warranty, and fast delivery",
    contactBtn: "Contact Us",
    subscribeBtn: "Subscribe",
    messageBtn: "Message",
   padding: '2rem 1.5rem',    PROD_ONE: "Turbocharger",
    PROD_ONE_BTN: "Turbocharger",
    PROD_ONE_ID: "101",
    productCardTitle: "Sale and repair of factory-reconditioned turbos",
    productCardDesc: "Sale of new and renovated turbochargers. We recover the old part as a replacement reserve. Our experts will help you choose the right turbo for your vehicle and provide technical support.",
    productCardBtn: "Get price for {PRODUCT_NAME}",

    PROD_TWO: "Steering rack",
    PROD_TWO_BTN: "Steering racks",
    PROD_TWO_ID: "102",
    productCardTitle2: "Sale of renovated, i.e. factory-reconditioned steering racks",
    productCardDesc2: "Sale of factory-reconditioned steering racks and renovated steering racks. We repair and recondition steering transmissions of passenger cars and vans. Our team will help you select the correct steering rack and answer all your questions.",
    productCardBtn2: "Get price for {PRODUCT_NAME}",

    PROD_THREE: "Gearbox",
    PROD_THREE_BTN: "Gearboxes",
    PROD_THREE_ID: "103",
    productCardTitle3: "Sale and repair of manual gearboxes",
    productCardDesc3: "Sale of factory-reconditioned manual gearboxes. We offer consultation and support for installation and maintenance.",
    productCardBtn3: "Get price for {PRODUCT_NAME}",

    PROD_FOUR: "Engine",
    PROD_FOUR_BTN: "Engines",
    PROD_FOUR_ID: "104",
    productCardTitle4: "Sale of car engines",
    productCardDesc4: "Engines – used engines with checked history from Europe. We help you find the right engine and provide technical advice.",
    productCardBtn4: "Get price for {PRODUCT_NAME}",

    PROD_FIVE: "Electronic",
    PROD_FIVE_BTN: "Electronic",
    PROD_FIVE_ID: "105",
    productCardTitle5: "Sale of electronic components",
    productCardDesc5: "We offer a wide range of tested electronic components for various car brands. Our specialists will assist with selection and compatibility.",
    productCardBtn5: "Get price for {PRODUCT_NAME}",

    PROD_SIX: "Differential",
    PROD_SIX_BTN: "Differential",
    PROD_SIX_ID: "106",
    productCardTitle6: "Sale of differentials",
    productCardDesc6: "We offer differentials for a wide range of vehicles. Our team will help you choose the right differential and provide installation guidance.",
    productCardBtn6: "Get price for {PRODUCT_NAME}",

    PROD_SEVEN: "Air Suspension",
    PROD_SEVEN_BTN: "Air Suspension",
    PROD_SEVEN_ID: "107",
    productCardTitle7: "Sale of air suspension components",
    productCardDesc7: "We offer air suspension parts for various vehicles. Get advice on selection, installation, and maintenance from our experts.",
    productCardBtn7: "Get price for {PRODUCT_NAME}",

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
    advantagesTitle: "Why choose us?",
    advantagesList: [
      "All units undergo technical inspection",
      "Warranty and assistance with VIN selection",
      "Delivery across Estonia and the entire EU",
      "We work with private and corporate clients"
    ],
    advantagesLearnMore: "Learn more about us",
    orderFormTitle: "Order Form",
    contactBtnSecondary: "Still have questions? Contact us",
    fillFormPrefix: "Fill form for",
    yourInfoTitle: "Your information",
    aboutPage: {
      title: "Reliable Auto Parts Supplier Since 2020",
      intro: "Enaco Group OÜ is a company specializing in the sale of new, reconditioned, and used auto parts. We have been operating since 2020, supplying throughout Estonia and the European Union.",
      specialization: "Our focus is on the most in-demand automotive units. We offer only verified parts with warranty, fast delivery, and technical support.",
      directionsTitle: "Main directions",
      directions: [
        "Engines (motors)",
        "Gearboxes",
        "Turbochargers (turbos)",
        "Air suspension",
        "Differentials and transfer cases",
        "Electronic components (ECUs, modules, and others)"
      ],
      advantagesTitle: "Our advantages",
      advantages: [
        "All units undergo technical inspection",
        "Warranty and assistance with VIN selection",
        "Delivery across Estonia and the entire EU",
        "We work with private and corporate clients"
      ],
      cta: "Looking for reliable auto parts in Estonia or the European Union?",
      cta2: "Enaco Group OÜ will help you find the right part and ensure fast and safe delivery.",
    },
  },
  ee: {
    heroTitle: "Oleme ettevõte, mis on alates 2020. aastast spetsialiseerunud kasutatud, taastatud ja uute autovaruosade müügile",
    heroSubtitle: "Meie tooted jõuavad klientideni üle Eesti ja Euroopa Liidu. Pakume kvaliteetseid ja nõutud varuosi koos garantiiga ja kiire tarnimisega",
    contactBtn: "Võta meiega ühendust",
    subscribeBtn: "Telli",
    messageBtn: "Sõnum",
    PROD_ONE: "Turbo",
    PROD_ONE_BTN: "Turbole",
    PROD_ONE_ID: "101",
    productCardTitle: "Tehaseremonditud turbode müük ja remont",
    productCardDesc: "Müüme uusi ja renoveeritud turbosid. Taastame vana osa asendusvaruks. Meie eksperdid aitavad valida sobiva turbo ja pakuvad tehnilist tuge.",
    productCardBtn: "Hind {PRODUCT_NAME}",

    PROD_TWO: "Roolilatt",
    PROD_TWO_BTN: "Roolilatile",
    PROD_TWO_ID: "102",
    productCardTitle2: "Tehaseremonditud roolilattide müük",
    productCardDesc2: "Tehaseremonditud ja renoveeritud roolilattide müük. Remondime ja renoveerime sõiduautode ja väikebusside roolilatte. Aitame valida õige roolilati ja vastame kõigile küsimustele.",
    productCardBtn2: "Hind {PRODUCT_NAME}",

    PROD_THREE: "Käigukast",
    PROD_THREE_BTN: "Käigukastile",
    PROD_THREE_ID: "103",
    productCardTitle3: "Manuaalkäigukastide müük ja remont",
    productCardDesc3: "Tehaseremonditud manuaalkäigukastide müük. Pakume konsultatsiooni ja tuge paigaldusel ning hooldusel.",
    productCardBtn3: "Hind {PRODUCT_NAME}",

    PROD_FOUR: "Mootor",
    PROD_FOUR_BTN: "Mootorile",
    PROD_FOUR_ID: "104",
    productCardTitle4: "Mootorite müük",
    productCardDesc4: "Mootorid – kontrollitud ajalooga kasutatud mootorid Euroopast. Leiame sobiva mootori ja anname tehnilist nõu.",
    productCardBtn4: "Hind {PRODUCT_NAME}",

    PROD_FIVE: "Elektroonika",
    PROD_FIVE_BTN: "Elektroonikale",
    PROD_FIVE_ID: "105",
    productCardTitle5: "Elektroonikakomponentide müük",
    productCardDesc5: "Pakume laias valikus testitud elektroonikakomponente erinevatele automarkidele. Aitame valida ja kontrollida sobivust.",
    productCardBtn5: "Hind {PRODUCT_NAME}",

    PROD_SIX: "Diferentsiaal",
    PROD_SIX_BTN: "Diferentsiaalale",
    PROD_SIX_ID: "106",
    productCardTitle6: "Diferentsiaalide müük",
    productCardDesc6: "Pakume diferentsiaale paljudele automarkidele. Aitame valida õige diferentsiaali ja pakume paigaldusjuhiseid.",
    productCardBtn6: "Hind {PRODUCT_NAME}",

    PROD_SEVEN: "Õhkvedrustus",
    PROD_SEVEN_BTN: "Õhkvedrustusele",
    PROD_SEVEN_ID: "107",
    productCardTitle7: "Õhkvedrustuse osade müük",
    productCardDesc7: "Pakume õhkvedrustuse osi erinevatele automarkidele. Meie eksperdid nõustavad valiku, paigalduse ja hoolduse osas.",
    productCardBtn7: "Hind {PRODUCT_NAME}",

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
    advantagesTitle: "Miks valida meid?",
    advantagesList: [
      "Kõik agregaadid läbivad tehnilise kontrolli",
      "Garantii ja abi valikul VIN-koodi alusel",
      "Kohaletoimetamine Eestis ja kogu EL territooriumil",
      "Töötame nii era- kui äriklientidega"
    ],
    advantagesLearnMore: "Loe meist lähemalt",
    orderFormTitle: "Tellimisvorm",
    contactBtnSecondary: "Küsimusi? Võtke meiega ühendust!",
    fillFormPrefix: "Täida vorm",
    yourInfoTitle: "Teie andmed",
    aboutPage: {
      title: "Usaldusväärne autovaruosade tarnija alates 2020. aastast",
      intro: "Enaco Group OÜ on ettevõte, mis on spetsialiseerunud uute, taastatud ja kasutatud autovaruosade müügile. Oleme tegutsenud alates 2020. aastast, pakkudes tarnet üle Eesti ja Euroopa Liidu.",
      specialization: "Meie fookus on kõige nõutumate autode agregaatidel. Pakume ainult kontrollitud detaile koos garantiiga, kiire tarnega ja tehnilise toega.",
      directionsTitle: "Peamised suunad",
      directions: [
        "Mootorid",
        "Käigukastid",
        "Turbokompressorid (turbo)",
        "Õhkvedrustus",
        "Diferentsiaalid ja vahekastid",
        "Elektroonikakomponendid (juhtplokid, moodulid jm)"
      ],
      advantagesTitle: "Meie eelised",
      advantages: [
        "Kõik agregaadid läbivad tehnilise kontrolli",
        "Garantii ja abi valikul VIN-koodi alusel",
        "Kohaletoimetamine Eestis ja kogu EL territooriumil",
        "Töötame nii era- kui äriklientidega"
      ],
      cta: "Otsite usaldusväärseid autovaruosi Eestis või Euroopa Liidus?",
      cta2: "Enaco Group OÜ aitab leida vajaliku detaili ja tagab kiire ning turvalise kohaletoimetamise.",
    },
  },
  ru: {
    heroTitle: "Мы — компания, специализирующаяся на продаже б/у, восстановленных и новых автозапчастей с 2020 года",
    heroSubtitle: "Наша компания поставляет автозапчасти по всей Эстонии и странам Европейского Союза. Мы специализируемся на самых востребованных агрегатах, обеспечивая высокое качество, гарантию и оперативную доставку",
    contactBtn: "Связаться с нами",
    subscribeBtn: "Подписаться",
    messageBtn: "Сообщение",
    PROD_ONE: "Турбина",
    PROD_ONE_BTN: "на Турбину",
    PROD_ONE_ID: "101",
    productCardTitle: "Продажа и ремонт восстановленных турбин",
    productCardDesc: "Продажа новых и восстановленных турбокомпрессоров. Получаем старую деталь в качестве замены. Наши специалисты помогут подобрать турбину и окажут техническую поддержку.",
    productCardBtn: "Получить цену {PRODUCT_NAME}",

    PROD_TWO: "Рулевая рейка",
    PROD_TWO_BTN: "на Рейку",
    PROD_TWO_ID: "102",
    productCardTitle2: "Продажа восстановленных рулевых реек",
    productCardDesc2: "Продажа восстановленных на заводе и отремонтированных рулевых реек. Ремонтируем и восстанавливаем рулевые механизмы. Поможем выбрать нужную рейку и ответим на все вопросы.",
    productCardBtn2: "Получить цену {PRODUCT_NAME}",

    PROD_THREE: "КПП",
    PROD_THREE_BTN: "на КПП",
    PROD_THREE_ID: "103",
    productCardTitle3: "Продажа и ремонт механических коробок передач",
    productCardDesc3: "Продажа восстановленных на заводе механических коробок передач. Консультируем по установке и обслуживанию.",
    productCardBtn3: "Получить цену {PRODUCT_NAME}",

    PROD_FOUR: "Двигатель",
    PROD_FOUR_BTN: "на Двигатель",
    PROD_FOUR_ID: "104",
    productCardTitle4: "Продажа автомобильных двигателей",
    productCardDesc4: "Двигатели – проверенные подержанные двигатели из Европы. Поможем подобрать подходящий двигатель и дадим технические рекомендации.",
    productCardBtn4: "Получить цену {PRODUCT_NAME}",

    PROD_FIVE: "Электроника",
    PROD_FIVE_BTN: "на Электроника",
    PROD_FIVE_ID: "105",
    productCardTitle5: "Продажа электронных компонентов",
    productCardDesc5: "Предлагаем широкий ассортимент проверенных электронных компонентов для различных марок автомобилей. Поможем с выбором и совместимостью.",
    productCardBtn5: "Получить цену {PRODUCT_NAME}",

    PROD_SIX: "Дифференциал",
    PROD_SIX_BTN: "на Дифференциал",
    PROD_SIX_ID: "106",
    productCardTitle6: "Продажа дифференциалов",
    productCardDesc6: "Предлагаем дифференциалы для различных марок автомобилей. Поможем выбрать нужный дифференциал и проконсультируем по установке.",
    productCardBtn6: "Получить цену {PRODUCT_NAME}",

    PROD_SEVEN: "Пневмоподвеска",
    PROD_SEVEN_BTN: "на Пневмоподвеска",
    PROD_SEVEN_ID: "107",
    productCardTitle7: "Продажа компонентов пневмоподвески",
    productCardDesc7: "Предлагаем детали пневмоподвески для различных марок автомобилей. Консультируем по выбору, установке и обслуживанию.",
    productCardBtn7: "Получить цену {PRODUCT_NAME}",

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
    advantagesTitle: "Почему мы?",
    advantagesList: [
      "Все агрегаты проходят техническую проверку",
      "Гарантия и помощь в подборе по VIN",
      "Доставка по Эстонии и всей территории ЕС",
      "Работаем с частными и корпоративными клиентами"
    ],
    advantagesLearnMore: "Подробнее о нас",
    orderFormTitle: "Форма заказа",
    contactBtnSecondary: "Есть вопросы? Свяжитесь с нами!",
    fillFormPrefix: "Заполнить форму",
    yourInfoTitle: "Ваша информация",
    aboutPage: {
      title: "Надёжный поставщик автозапчастей с 2020 года",
      intro: "Enaco Group OÜ — это компания, специализирующаяся на продаже новых, восстановленных и бывших в употреблении автозапчастей. Мы работаем с 2020 года, обеспечивая поставки по всей Эстонии и странам Европейского Союза.",
      specialization: "Наша специализация — наиболее востребованные автомобильные агрегаты. Мы предлагаем только проверенные детали с гарантией, оперативной доставкой и технической поддержкой.",
      directionsTitle: "Основные направления",
      directions: [
        "Двигатели (моторы)",
        "Коробки передач",
        "Турбокомпрессоры (турбины)",
        "Пневмоподвеска",
        "Дифференциалы и раздаточные коробки",
        "Электронные компоненты (ЭБУ, модули и другие)"
      ],
      advantagesTitle: "Наши преимущества",
      advantages: [
        "Все агрегаты проходят техническую проверку",
        "Предоставляется гарантия и помощь в подборе по VIN-коду",
        "Доставка по всей Эстонии и территории ЕС",
        "Работа с частными и корпоративными клиентами"
      ],
      cta: "Ищете надёжные автозапчасти в Эстонии или Европейском союзе?",
      cta2: "Enaco Group OÜ поможет подобрать нужную деталь и обеспечит её быструю и безопасную доставку.",
    },
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
        text: "На все восстановленное оборудование, продаваемое Enaco Group OÜ, предоставляется гарантия 3-12 месяцев (без ограничения пробега).",
      },
      {
        icon: 4,
        title: "Мы всегда заботимся о клиентах",
        text: "Мы всегда стремимся обеспечить лучший сервис и поддержку для наших клиентов, гарантируя удовлетворенность и долгосрочное сотрудничество."
      }
    ]
  }
};

export const contactFormLabels = {
  en: {
    title: "CONTACT",
    heading: "Contact us",
    name: "Your name",
    email: "Your email",
    phone: "Your phone",
    message: "Message",
    send: "Send",
    thankYou: "Thank you! We will contact you soon.",
    invalidEmail: "Please enter a valid email address.",
    invalidPhone: "Please enter a valid phone number.",
    invalidName: "Please enter your name.",
    invalidMessage: "Please enter your message."
  },
  ee: {
    title: "KONTAKT",
    heading: "Võta ühendust",
    name: "Teie nimi",
    email: "Teie email",
    phone: "Teie telefon",
    message: "Sõnum",
    send: "Saada",
    thankYou: "Aitäh! Võtame teiega peagi ühendust.",
    invalidEmail: "Palun sisestage korrektne e-posti aadress.",
    invalidPhone: "Palun sisestage korrektne telefoninumber.",
    invalidName: "Palun sisestage oma nimi.",
    invalidMessage: "Palun sisestage sõnum."
  },
  ru: {
    title: "КОНТАКТ",
    heading: "Связаться с нами",
    name: "Ваше имя",
    email: "Ваш email",
    phone: "Ваш телефон",
    message: "Сообщение",
    send: "Отправить",
    thankYou: "Спасибо! Мы свяжемся с вами в ближайшее время.",
    invalidEmail: "Пожалуйста, введите корректный email.",
    invalidPhone: "Пожалуйста, введите корректный номер телефона.",
    invalidName: "Пожалуйста, введите ваше имя.",
    invalidMessage: "Пожалуйста, введите сообщение."
  }
};

export const guaranteesContent = {
  ee: {
    warranty: {
      title: "GARANTII",
      icon: "green-check",
      text: `Garantii kehtib järgmistel juhtudel:

- Taastatud varuosadele kehtib garantii 3 kuni 12 kuud.
- Kasutatud varuosadele kehtib garantii 14 kuni 180 päeva, sõltuvalt konkreetsest varuosast.

NB! Mootoritele ja käigukastidele kehtib garantii ainult juhul, kui varuosa on paigaldatud vastavalt reglemendile, mis tuleb varuosaga kaasa. Kui reglement puudub, tuleb see kindlasti eelnevalt meie käest eraldi küsida.

Kasutatud varuosadele kehtib 14-päevane paigaldusgarantii, tingimusel et varuosa tagastatakse samas komplektsuses.`
    },
    notApply: {
      title: "Garantii ei kehti",
      icon: "red-cross",
      text: `Garantii ei kehti järgmistel juhtudel:

- varuosa on demonteeritud või lahti võetud.
- defektid on põhjustatud kliendi poolt.
- esineb paigaldus vigade või kasutusjuhiste eiramise tagajärgi.

NB! Garantii ei kata kulusid, mis on seotud varuosa transpordi, paigaldamise või eemaldamisega.
Kauba tagastamise kulud tasub ostja.`
    },
    delivery: {
      title: "Tarneinfo",
      icon: "yellow-box",
      text: `Varuosa ostusoovi korral palume eelnevalt meiega ühendust võtta, et vältida olukorda, kus soovitud varuosa on juba müüdud teisele kliendile.

Kauba saatmine:
- Pakiautomaadiga alates 6 eurost
- OSC kulleriga alates 10 eurost`,
      contactLink: "võta meiega ühendust"
    }
  },
  en: {
    warranty: {
      title: "WARRANTY",
      icon: "green-check",
      text: `Warranty does apply in the following cases:

- a warranty of 3 to 12 months applies to reconditioned spare parts.
- a warranty of 14 to 180 days applies to used spare parts, depending on the specific part.

NB! Engines and gearboxes are covered by warranty only if the part is installed according to the regulations provided with the part. If the regulation is missing, please request it from us in advance.

Used spare parts have a 14-day installation warranty, provided the part is returned in the same completeness.`
    },
    notApply: {
      title: "No Warranty",
      icon: "red-cross",
      text: `Warranty does not apply in the following cases:

- the part has been disassembled or taken apart.
- defects are caused by the customer.
- installation errors or non-compliance with instructions are present.

NB! The warranty does not cover costs related to the transport, installation, or removal of the part.
The buyer pays the cost of returning the goods.`
    },
    delivery: {
      title: "Delivery info",
      icon: "yellow-box",
      text: `If you wish to purchase a part, please `,
      contactLink: "contact us",
      textAfter: ` in advance to avoid the situation where the desired part has already been sold to another customer.

Shipping:
- Parcel machine from 6 euros
- OSC courier from 10 euros`
    }
  },
  ru: {
    warranty: {
      title: "ГАРАНТИЯ",
      icon: "green-check",
      text: `Гарантия предоставляется в следующих случаях:

- на восстановленные запчасти предоставляется гарантия от 3 до 12 месяцев.
- на б/у запчасти предоставляется гарантия от 14 до 180 дней, в зависимости от конкретной детали.

Внимание! На двигатели и коробки передач гарантия распространяется только при условии установки детали в соответствии с регламентом, который прилагается к детали. Если регламента нет, обязательно запросите его у нас заранее.

На б/у запчасти предоставляется 14-дневная гарантия на установку при условии возврата детали в полной комплектации.`
    },
    notApply: {
      title: "Нет гарантии",
      icon: "red-cross",
      text: `Гарантия не распространяется в следующих случаях:

- деталь была разобрана или вскрыта.
- дефекты вызваны клиентом.
- имеются последствия ошибок установки или несоблюдения инструкций.

Внимание! Гарантия не покрывает расходы, связанные с транспортировкой, установкой или снятием детали.
Расходы по возврату товара оплачивает покупатель.`
    },
    delivery: {
      title: "Доставка",
      icon: "yellow-box",
      text: `При желании приобрести деталь просьба заранее `,
      contactLink: "связаться с нами",
      textAfter: `, чтобы избежать ситуации, когда нужная деталь уже продана другому клиенту.

Доставка:
- Через постамат от 6 евро
- Курьер OSC от 10 евро`
    }
  }
};

export const guaranteesBoldPhrases = {
  ee: [
    "Garantii kehtib järgmistel juhtudel:",
    "Garantii ei kehti järgmistel juhtudel:",
    "NB!",
    "Kauba saatmine:",
    "Võta meiega ühendust"
  ],
  en: [
    "Warranty does apply in the following cases:",
    "Warranty does not apply in the following cases:",
    "NB!",
    "Shipping:"
  ],
  ru: [
    "Гарантия предоставляется в следующих случаях:",
    "Гарантия не распространяется в следующих случаях:",
    "NB!",
    "Доставка:",
    "Внимание!"
  ]
};

export const formLabels = {
  en: {
    smark: "Car brand",
    smudel: "Car model",
    aasta: "Year",
    skub: "Engine capacity (cm³)",
    mvoimsus: "Engine power (kW)",
    mtahis: "Engine code",
    kytus: "Fuel",
    rek: "Car reg. number",
    detail: "What parts are you looking for?",
    nimi: "Your name",
    email: "Your email",
    aadress: "Your address",
    telefon: "Your phone",
    markused: "Notes",
    send: "Send"
  },
  ee: {
    smark: "Sõiduki mark",
    smudel: "Sõiduki mudel",
    aasta: "Aasta",
    skub: "Mootori kubatuur (cm³)",
    mvoimsus: "Mootori võimsus (kW)",
    mtahis: "Mootori tähis",
    kytus: "Kütus",
    rek: "Auto reg. number",
    detail: "Milliseid detaile otsite?",
    nimi: "Teie nimi",
    email: "Teie email",
    aadress: "Teie aadress",
    telefon: "Teie telefon",
    markused: "Märkused",
    send: "Saada"
  },
  ru: {
    smark: "Марка автомобиля",
    smudel: "Модель автомобиля",
    aasta: "Год",
    skub: "Объем двигателя (см³)",
    mvoimsus: "Мощность двигателя (кВт)",
    mtahis: "Код двигателя",
    kytus: "Топливо",
    rek: "Рег. номер авто",
    detail: "Какие детали Вы ищите?",
    nimi: "Ваше имя",
    email: "Ваш email",
    aadress: "Ваш адрес",
    telefon: "Ваш телефон",
    markused: "Примечания",
    send: "Отправить"
  }
};
