"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white dark:bg-zinc-900 shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">ADmyBRAND</h2>
        <nav className="space-y-4">
          <Link href="/dashboard" className="block hover:text-primary font-medium">
            Dashboard
          </Link>
          {/* Add more links here */}
        </nav>
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 transform bg-black/50 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className="w-64 bg-white dark:bg-zinc-900 shadow-md p-6 h-full"
          onClick={(e) => e.stopPropagation()} // prevent background click
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">ADmyBRAND</h2>
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-4">
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="block hover:text-primary font-medium"
            >
              Dashboard
            </Link>
            {/* Add more links */}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b dark:border-zinc-800">
          <div className="flex items-center gap-4">
            {/* Hamburger menu for mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-zinc-800 dark:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <ThemeToggle />
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
