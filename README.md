# Quode 💻

A modern, interactive coding challenge platform built with **Next.js** and **TypeScript**. Solve programming problems, write code in your favorite language, and track your progress with a beautiful, responsive UI.

## ✨ Features

- 🎯 **Comprehensive Problem Set** - Curated coding challenges with varying difficulty levels (Easy, Medium, Hard)
- 💾 **Multi-Language Support** - Solve problems in multiple programming languages
- 🔐 **Secure Authentication** - Account creation and login with NextAuth.js
- 📝 **Code Editor** - Monaco Editor integration for a professional coding experience
- ✅ **Test Cases** - Run and validate your code against predefined test cases
- 🎨 **Modern UI** - Beautiful, responsive interface built with Tailwind CSS
- 👤 **User Profiles** - Track your solutions and progress
- 🚀 **Performance Optimized** - Built with Next.js 15 and Turbopack for lightning-fast development

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quode.git
cd quode
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your database URL and authentication secrets.

4. Setup the database:
```bash
npx prisma migrate dev
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [NextAuth.js v5](https://authjs.dev/)
- **Code Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for rich problem descriptions
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- **Security**: [Bcryptjs](https://github.com/dcodeIO/bcrypt.js) for password hashing

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router
├── entities/         # Domain entities (Problem, User, Solution, Language)
├── features/         # Feature modules (Auth, etc.)
├── shared/           # Shared utilities, hooks, UI components
├── widgets/          # Complex UI widgets (CodeEditor, MDXRenderer, etc.)
├── middleware.ts     # Next.js middleware
│
prisma/
├── schema.prisma     # Database schema
├── migrations/       # Database migrations
└── seed.ts          # Database seeding script
```

## 🎮 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run prettier` | Format code with Prettier |

## 🗄️ Database Schema

The application uses the following core models:

- **User** - User accounts with authentication
- **Problem** - Coding challenges with descriptions and difficulty levels
- **Solution** - User submissions and solutions
- **Template** - Code templates for different programming languages
- **Test** - Test cases for validating solutions
- **Account** - OAuth account integrations

## 🔐 Authentication

The project uses NextAuth.js v5 with:
- Email/password authentication
- OAuth provider support
- Secure session management
- PostgreSQL adapter for session persistence

## 👨‍💻 Author

Created with ❤️ by @yatskeech
