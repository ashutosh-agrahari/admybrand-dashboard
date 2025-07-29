
# ADmyBRAND Dashboard

A modern, responsive analytics dashboard built using **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI**. This dashboard simulates marketing campaign analytics with beautiful charts, dynamic data tables, and a clean UI optimized for both desktop and mobile.

## ✅ Features Implemented

### 📊 Dashboard (`/dashboard`)

* Responsive layout with sidebar navigation and topbar
* Overview cards showing KPIs like revenue, conversions, etc.
* Integrated charts: line, bar, donut
* Sortable and filterable campaign performance table
* Theme toggle: Dark/Light mode using `next-themes`

### 🧱 Reusable Components

* `MetricCard.tsx`: KPI display card
* `LineChartCard.tsx`, `BarChartCard.tsx`, `DonutChartCard.tsx`: Chart wrappers using **Recharts**
* `DashboardChart.tsx`: Combined or additional chart
* `CampaignTable.tsx`: Sortable table with dummy campaign data
* `ThemeToggle.tsx`: Dark/light switch
* `DashboardLayout.tsx`: Layout wrapper with sidebar and topbar
* `DataTable.tsx`: (Optional) reusable generic table logic

### 🔧 Utilities

* `mockData.ts`: Static data for dashboard metrics and charts
* `utils.ts`: Placeholder for future helper functions

## 🧰 Tech Stack

* **Next.js 15 (App Router)**
* **TypeScript + React 18**
* **Tailwind CSS**
* **Shadcn UI**
* **Recharts**

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── dashboard/           # Dashboard route
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home (optional)
│   └── globals.css          # Tailwind & custom styles
├── components/              # All UI components
│   ├── BarChartCard.tsx
│   ├── CampaignTable.tsx
│   ├── ChartCard.tsx
│   ├── DashboardChart.tsx
│   ├── DataTable.tsx
│   ├── DonutChartCard.tsx
│   ├── LineChartCard.tsx
│   ├── MetricCard.tsx
│   ├── ThemeToggle.tsx
│   └── DashboardLayout.tsx
├── lib/
│   ├── mockData.ts
│   └── utils.ts
```

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/admybrand-dashboard.git
cd admybrand-dashboard
npm install
npm run dev
```

Then visit [http://localhost:3000/dashboard](http://localhost:3000/dashboard) in your browser.

