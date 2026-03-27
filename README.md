# Atreu1s Portfolio

**Personal portfolio** of a Fullstack Developer. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

[![Live Demo](https://img.shields.io/badge/live-demo-%23A656E1?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-two-peach-46.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## Table of Contents

- [Tech Stack](#-tech-stack)
- [About](#-about)
- [Key Features](#-key-features-implemented)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-%2361DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-%233178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-%23000?style=for-the-badge&logo=framer&logoColor=white)

### Backend & Database
![Node.js](https://img.shields.io/badge/Node.js-20-%23339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-%23000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-%234169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-8-%23880000?style=for-the-badge&logo=mongoose&logoColor=white)

### Tools & DevOps
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitLab](https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

---

## About

This portfolio showcases my skills as a **Fullstack Developer** specializing in **React**, **Node.js**, and modern web technologies.

### 🔹 Architecture Highlights

| Solution | Technology / Approach | Purpose |
|----------|----------------------|---------|
| **Component Architecture** | Atomic Design (UI, sections, layouts) | Reusability, logic isolation |
| **Type Safety** | TypeScript (strict mode) | Safety, autocomplete, refactoring |
| **Routing** | Next.js App Router | File-based routing, SSR/SSG |
| **Styling** | Tailwind CSS + PostCSS | Utility-first approach, responsive, theming |
| **Configuration** | Environment variables (.env.local) | Secure storage of API keys, DB URI |
| **Logic** | Custom React hooks | Reusable logic across components |
| **Performance** | Code splitting + next/image | Fast loading, optimized assets |
| **Fonts** | next/font (Almendra, AlumniSans) | No layout shift, automatic optimization |
| **Code Style** | ESLint (Flat Config) + Prettier | Consistent style, auto-fix errors |
| **Package Manager** | pnpm | Fast installation, disk space efficiency |

### ✨ Key Features Implemented

| Feature | Description |
|---------|-------------|
| **🎨 Animated UI** | Scroll-triggered animations (Framer Motion), typing text effect, pulse dividers, hover transitions |
| **📱 Fully Responsive** | Mobile-first design, adaptive grid layouts, touch-friendly interactions (320px – 2000px+) |
| **⚡ Performance Optimized** | Next.js Image component (WebP), `next/font` (no layout shift), code splitting, lazy loading |
| **♿ Accessible** | Semantic HTML5, ARIA labels, keyboard navigation, proper heading hierarchy (H1 → H2 → H3) |
| **🔄 Reusable Components** | Modular architecture: `TypingText`, `Seporator`, `SkillsGrid`, `CodeStats` (Codewars API) |
| **📄 Downloadable Resume** | PDF resume with custom filename on download (`resume.pdf` → `Резюме - Захаров Артем.pdf`) |
| **🔗 Multi-Platform Deploy** | Synced repositories (GitHub + GitLab), auto-deploy on Vercel via CI/CD |

### Animations & Interactions
- **TypingText Component**: Animated text with customizable cursor, speed, and loop behavior
- **Seporator Component**: Decorative scroll-triggered divider with pulse animation
- **Scroll Animations**: Sections fade in and slide up as user scrolls (`whileInView`)
- **Hover Effects**: Cards and buttons with subtle scale/glow transitions

###  File Structure

```
Portfolio
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ postcss.config.mjs
├─ public
│  ├─ 019d253f-c669-7574-bc78-b0fc5f7157ba.png
│  ├─ favicon.svg
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ MainImg.webp
│  ├─ next.svg
│  ├─ RealImg.webp
│  ├─ RealImgS.webp
│  ├─ resume.pdf
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  └─ app
│     ├─ components
│     │  ├─ CodeStats.tsx
│     │  ├─ Contacts.tsx
│     │  ├─ Education.tsx
│     │  ├─ footer.tsx
│     │  ├─ header.tsx
│     │  ├─ Projects.tsx
│     │  ├─ Seporator.tsx
│     │  ├─ skills.tsx
│     │  ├─ TypingText.tsx
│     │  └─ Works.tsx
│     ├─ favicon.ico
│     ├─ globals.css
│     ├─ icon.svg
│     ├─ layout.tsx
│     └─ page.tsx
└─ tsconfig.json

```

