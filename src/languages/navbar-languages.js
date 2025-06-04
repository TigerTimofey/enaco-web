const navbarMenus = {
  en: [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Services/Products', href: '#' },
    { label: 'Guarantees', href: '#' },
    { label: 'Contacts', href: '#' },
  ],
  ee: [
    { label: 'Avaleht', href: '#' },
    { label: 'Meist', href: '#' },
    { label: 'Teenused/Tooted', href: '#' },
    { label: 'Garantii', href: '#' },
    { label: 'Kontaktid', href: '#' },
  ],
  ru: [
    { label: 'Главная', href: '#' },
    { label: 'О нас', href: '#' },
    { label: 'Услуги/Товары', href: '#' },
    { label: 'Гарантии', href: '#' },
    { label: 'Контакты', href: '#' },
  ],
};

export const navbarLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ee', name: 'Eesti', flag: '🇪🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export function getNavbarMenu(lang = 'ee') {
  return navbarMenus[lang] || navbarMenus['ee'];
}
