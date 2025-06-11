# Enaco

Enaco is a multilingual web application for Enaco Group OÜ, a company specializing in the sale of new, reconditioned, and used auto parts across Estonia and the European Union.

## Video

https://github.com/user-attachments/assets/7e61755e-ea09-44bc-8cda-d9b52c0bda98


## Features

- Multilingual support: Estonian, English, Russian
- Product catalog with detailed descriptions
- Contact and order forms with EmailJS integration
- Responsive design for desktop and mobile
- Cookie consent popup
- Animated UI and smooth navigation
- SEO meta tags for better discoverability

## Tech Stack

- React (with Vite)
- React Router DOM
- EmailJS for form submissions
- Custom CSS-in-JS styling
- No backend required (static hosting compatible)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Copy `.env` and set your EmailJS and ESTO API credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
VITE_EMAILJS_TEMPLATE_REQUEST_ID=your_template_request_id
VITE_ESTO_SHOP_ID=your_shop_id
VITE_ESTO_SECRET_KEY=your_secret_key
VITE_ESTO_API_URL=https://api.esto.ee/v2/purchase
VITE_ESTO_COUNTRY=EE
VITE_ESTO_NOTIFICATION_URL=https://yourdomain.ee/esto-notify
VITE_ESTO_TEST=true
```

## Deployment

The project is ready for static hosting (e.g., Vercel, Netlify). See `vercel.json` for Vercel configuration.

## License

MIT

---

