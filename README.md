
# ADmyBRAND Dashboard

A sleek, responsive analytics dashboard built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI components**. Designed for modern marketing insights and campaign performance tracking.

## Features Implemented

### Dashboard Page (`/dashboard`)
- Displays overview metrics and charts.
- Clean layout with responsive grid and dark mode support.

### Components

####  Charts and Cards
- `BarChartCard.tsx`
- `LineChartCard.tsx`
- `DonutChartCard.tsx`
- `ChartCard.tsx`
- `DashboardChart.tsx`

These components provide various visualizations for impressions, clicks, conversions, and revenue.

####  Data Tables
- `CampaignTable.tsx`: Sortable campaign performance table.
- `DataTable.tsx`: Generic data table, reusable for other data sets.

####  UI & Utilities
- `MetricCard.tsx`: Displays single-value KPIs in a card format.
- `ThemeToggle.tsx`: Toggle between light/dark themes using Shadcn’s built-in theming.

### Static Data
- `mockData.ts`: Contains sample campaign and metrics data.
- `utils.ts`: (placeholder for helper functions or formatting logic)

## Tech Stack

- **Next.js 15 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **Recharts** (for data visualizations)

## Project Structure

```
src/
├── app/
│   ├── dashboard/           # Route: /dashboard
│   │   └── page.tsx
│   ├── layout.tsx           # App layout
│   ├── page.tsx             # Root route (optional)
│   └── globals.css          # Tailwind styles
├── components/              # All custom + Shadcn UI components
│   ├── BarChartCard.tsx
│   ├── CampaignTable.tsx
│   ├── ChartCard.tsx
│   ├── DashboardChart.tsx
│   ├── DataTable.tsx
│   ├── DonutChartCard.tsx
│   ├── LineChartCard.tsx
│   ├── MetricCard.tsx
│   └── ThemeToggle.tsx
├── lib/
│   ├── mockData.ts          # Sample JSON data
│   └── utils.ts             # Utility functions (optional)

````

##  Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/admybrand-dashboard.git
cd admybrand-dashboard
npm install
npm run dev
````

Open `http://localhost:3000/dashboard` in your browser.

## Next Steps

* Integrate API backend (or CMS) for dynamic data.
* Add auth and admin routes.
* Optimize mobile UI with responsive cards and charts.
* Add filters/date range selectors for better campaign control.



