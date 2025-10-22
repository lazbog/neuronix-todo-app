# Neuronix Todo App

A simple and elegant todo application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Task counter
- Responsive design
- Clean and modern UI

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Project Structure

```
neuronix-todo-app/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts      # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main todo page
├── components/
│   ├── ui/
│   │   ├── button.tsx        # Reusable button component
│   │   └── input.tsx         # Reusable input component
│   └── todo-item.tsx         # Individual todo item component
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```