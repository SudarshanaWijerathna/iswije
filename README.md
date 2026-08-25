# iswije

A modern portfolio website built with **Next.js 15**, **Payload CMS 3.0**, and **TypeScript**.

## 🚀 Features

- **Next.js 15 & React 19** App Router architecture
- **Payload CMS 3.0** with SQLite database integration
- Responsive, modern UI design
- Content-managed portfolio projects and globals

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set your `PAYLOAD_SECRET` and server URL in `.env`.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website, or [http://localhost:3000/admin](http://localhost:3000/admin) to access the Payload CMS admin panel.

### 4. Database Seed (Optional)

```bash
npm run seed
```

## 📦 Build

```bash
npm run build
npm run start
```
