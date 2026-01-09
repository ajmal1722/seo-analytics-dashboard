# SEO Analytics Dashboard

A responsive SEO dashboard built to demonstrate frontend development skills using React, TypeScript, and shadcn/ui.
The project focuses on UI composition, state management, and clean component architecture using mock data.

## 🚀 Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **UI & Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router DOM
- **Charts:** Recharts
- **Icons:** Lucide React

## 🛠️ Local Setup

Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open in browser

http://localhost:5173

## � Implemented Screens & Features

### 1. Dashboard

- **KPI Cards:** Overview metrics for Traffic, Rankings, Backlinks, and Domain Authority (mock data).
- **Charts:**
  - Organic Traffic trend (Line chart)
  - Keyword Position Distribution (Bar chart)
- **Top Keywords Performance Table:** Displays keyword performance with Position, Change, Traffic, and Difficulty.

### 2. Backlink Manager

- **Backlink Tasks Table:** Columns include Task, URL, Due Date, Priority, Status, and Assignee.
- **Filters:**
  - Search by task or URL
  - Filter by Status and Priority
- **New Backlink Task Modal:**
  - Create new backlink tasks using a modal built with shadcn/ui.
  - New tasks are added to the table using React state.

### 3. Content Tasks

- **Content Tasks Table:** Lists content items with Title, Type, Status, Priority, Due Date, and Assignee.
- **Content Viewer:** Clicking a row opens a side panel (drawer) showing:
  - Title
  - URL / slug
  - Content body (mock text)
  - Status, Priority, and meta information (word count, target keyword)

### 4. Normal Tasks

- **General Tasks Table:** Used for non-SEO tasks with Category, Priority, Status, Due Date, and Assignee.
- **Filters:** Search, Status, and Priority filters.
- **New Task Modal:** Create new tasks using a modal; tasks are managed via local React state.

## 🧭 Navigation & UI

- Sidebar / navigation to switch between all screens:
  - Dashboard
  - Backlink Manager
  - Content Tasks
  - Normal Tasks
- Responsive layout for desktop and smaller screens
- Custom error page for unexpected routing or rendering errors

## 🧠 State Management & Interactions

- Uses local React state (useState, useMemo)
- No backend or API integration
- All interactions handled client-side:
  - Opening / closing modals
  - Adding new tasks
  - Filtering and searching tables
  - Selecting content tasks to view details

## 📌 Assumptions & Trade-offs

- **Mock Data:** All data is static and stored in local files or component state.
- **No Persistence:** Reloading the page resets the data.
- **No Backend:** Backend integration and full CRUD functionality were intentionally excluded to match the assignment scope.
- **Scope Focus:** The project prioritizes frontend structure, clarity, and correctness over advanced features.

## 📦 Deployment

The application is deployed using Vercel / Cloudflare Pages.

- **Live URL:** `<live-app-url>`
- **GitHub Repository:** `<github-repo-url>`

## ✅ Summary

This project demonstrates:

- Clean React component structure
- Type-safe development with TypeScript
- Practical use of shadcn/ui components
- State-driven UI without over-engineering
- Clear separation of concerns across screens
