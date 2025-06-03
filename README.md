# 🎬 React Frontend for Video Q&A Chatbot

This is the **frontend** for an AI-powered full-stack web app. It allows users to:

- 🔐 **Login/Register**
- 🎥 **Search and chat about YouTube videos**
- 🤖 **Ask questions about video summaries**
- 🚪 **Logout securely**
- 🔄 Uses **React Query** for efficient API fetching
- ⚡ Built with **Vite** for fast development

---

## ⚙️ Tech Stack

- ⚛️ **React** (with TypeScript)
- ⚡ **Vite** (dev/build tool)
- 🔄 **React Query** for data fetching/caching
- 🧠 **Chatbot UI** for video Q&A
- 🎨 **SASS** for styling
- 🪝 **React Hook Form + Yup** for forms & validation
- 🌐 **React Router v7**

---

## 📁 Folder Structure

── src/
│ ├── components/ # Reusable components (Chat, Form, Navbar, etc.)
│ ├── pages/ # Login, Register, Chat, Landing
│ ├── hooks/ # Custom React Query + auth hooks
│ ├── styles/ # SASS styling
│ ├── App.tsx
│ └── main.tsx
├── public/
├── package.json
├── vite.config.ts
└── README.md


---

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd frontend
npm install

npm run dev

App will run at: http://localhost:5173

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
