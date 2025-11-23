# 💼 Personal Portfolio – Tech Stack Overview

This project is a modern, responsive personal portfolio built with a lightweight, maintainable,
and scalable tech stack. Below is a detailed breakdown of the technologies and tools used.

Check it out live 👉 [[https://syed-uzair-shah.vercel.app](https://syed-uzair-shah.vercel.app/)]

---

## 🧱 Languages & Syntax

| Technology   | Purpose                                      |
|--------------|----------------------------------------------|
| **HTML**     | Structure of the UI (via JSX)                |
| **CSS**      | Styling (via Tailwind CSS)                   |
| **JavaScript** | Logic and interactivity                    |
| **JSX**      | JavaScript + HTML used in React components   |

---

## ⚛️ React Ecosystem

| Library             | Purpose                                                      |
|---------------------|--------------------------------------------------------------|
| **React**           | Building reusable UI components                              |
| **React DOM**       | Rendering React components in the browser                    |
| **Create React App**| Bootstraps the React project with Webpack, Babel, etc.       |
| **React Scripts**   | Bundled scripts and configuration from CRA                   |

---

## 🎨 Styling & Layout

| Tool                 | Purpose                                                     |
|----------------------|-------------------------------------------------------------|
| **Tailwind CSS**     | Utility-first CSS framework for rapid UI development        |
| **PostCSS**          | CSS processor that allows plugin support like Tailwind      |
| **Autoprefixer**     | Adds vendor prefixes to ensure cross-browser compatibility  |

---

## ✨ Animations & Effects

| Library                     | Purpose                                                       |
|-----------------------------|---------------------------------------------------------------|
| **Framer Motion**           | Modern animations and transitions for React                   |
| **react-intersection-observer** | Detects when elements enter or leave the viewport         |

---

## 🎨 Iconography

| Library          | Purpose                                   |
|------------------|-------------------------------------------|
| **lucide-react** | Icon library (Lucide = improved Feather)  |

---

## ⚙️ Build & Tooling

| Tool              | Purpose                                                     |
|-------------------|-------------------------------------------------------------|
| **Webpack**       | Bundles JS, CSS, and assets (via `react-scripts`)           |
| **Babel**         | Transpiles modern JS/JSX to browser-compatible JS           |
| **npm**           | Dependency/package manager                                  |
| **VS Code**       | Code editor (recommended with Tailwind and React extensions)|
| **Browserslist**  | Helps Autoprefixer & Babel target specific browser versions |

---

## 📁 Project Structure Support Files

| File / Config               | Purpose                                                   |
|-----------------------------|-----------------------------------------------------------|
| `tailwind.config.js`        | Tailwind customization (theme, colors, screens, etc.)     |
| `postcss.config.js`         | Registers PostCSS plugins (Tailwind, Autoprefixer)        |
| `index.css`                 | Main stylesheet with Tailwind's `@tailwind` directives    |
| `App.jsx`, `components/`    | Your actual React code and UI layout                      |
| `package.json`              | Lists dependencies and scripts used by the project        |

---

## 🧰 Dependency Versions (Compatible)

| Dependency                     | Version     | Purpose                        |
|--------------------------------|-------------|--------------------------------|
| `react`                        | ^18.2.0     | Core UI library                |
| `react-dom`                   | ^18.2.0     | DOM rendering                  |
| `react-scripts`               | 5.0.1       | CRA toolchain                  |
| `tailwindcss`                 | ^3.4.1      | CSS framework                  |
| `postcss`                     | ^8.4.35     | CSS processor                  |
| `autoprefixer`                | ^10.4.17    | Cross-browser CSS support      |
| `framer-motion`               | ^10.12.16   | Animation library              |
| `lucide-react`                | ^0.252.0    | SVG icon library               |
| `react-intersection-observer`| ^9.5.2      | Scroll-triggered animations    |

---

## 🧪 Development Scripts

| Command          | Description                                      |
|------------------|--------------------------------------------------|
| `npm start`      | Starts the development server                    |
| `npm run build`  | Builds the project for production                |
| `npm test`       | Runs tests (if configured)                       |
| `npm run eject`  | Ejects CRA config (not recommended for beginners)|

---

## 📸 Live Preview

```bash
npm install
npm start
