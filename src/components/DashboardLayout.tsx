"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { Menu, X, ChevronLeft, ChevronRight, LayoutDashboard } from "lucide-react";
import clsx from "clsx";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Mobile
  const [isCollapsed, setCollapsed] = useState(false);     // Desktop

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  const NavLinks = ({ collapsed }: { collapsed: boolean }) => (
    <nav className="space-y-4">
      <Link
        href="/dashboard"
        className={clsx(
          "flex items-center gap-2 hover:text-primary font-medium",
          collapsed && "justify-center"
        )}
      >
        <LayoutDashboard className="h-5 w-5" />
        {!collapsed && "Dashboard"}
      </Link>
      {/* Add more links as needed */}
    </nav>
  );

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      {/* Desktop Sidebar */}
      <aside
        className={clsx(
          "hidden md:flex flex-col bg-white dark:bg-zinc-900 shadow-md transition-all duration-200 p-4",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className={clsx("text-xl font-bold", isCollapsed && "hidden")}>ADmyBRAND</h2>
          <button onClick={() => setCollapsed(!isCollapsed)} className="text-zinc-500 hover:text-primary">
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
        <NavLinks collapsed={isCollapsed} />
      </aside>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-zinc-900 shadow-lg z-50 p-6 md:hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">ADmyBRAND</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <NavLinks collapsed={false} />
          </aside>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b dark:border-zinc-800">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
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
