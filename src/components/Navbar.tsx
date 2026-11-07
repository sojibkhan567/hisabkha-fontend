"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import {
  ChartColumn,
  Clock,
  DollarSign,
  LayoutDashboard,
  Menu,
  Users,
  X,
} from "lucide-react";
import DropdownMenuDemo from "./DropDownMenu";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-transparent">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
          <Link
            className="flex items-center gap-2.5 shrink-0 min-w-0 group"
            href={"/"}
          >
            <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-green-700 transition-colors">
              হ
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-bold text-gray-900 dark:text-white text-sm">
                হিসাব খাতা
              </div>
              <div className="text-[10px] text-gray-400 font-medium tracking-wide">
                HISHAB KHATA
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            <Link
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <Users className="w-4 h-4" />
              Employees
            </Link>
            <Link
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <Clock className="w-4 h-4" />
              Attendance
            </Link>
            <Link
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <DollarSign className="w-4 h-4" />
              Payroll
            </Link>
            <Link
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <ChartColumn className="w-4 h-4" />
              Reports
            </Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 min-w-0">
            <ThemeToggle />
            {/* <div
              data-orientation="vertical"
              role="none"
              data-slot="separator"
              className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px h-6 mx-1 hidden sm:block"
            ></div> */}

            <DropdownMenuDemo />

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 md:hidden"
              aria-label="Toggle menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/** mobile menu */}
        {isOpen && (
          <div className="border-t border-border py-3 space-y-0.5 pb-4 md:hidden">
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <Users className="w-4 h-4" />
              Employees
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <Clock className="w-4 h-4" />
              Attendance
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <DollarSign className="w-4 h-4" />
              Payroll
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              href={"/dashboard"}
            >
              <ChartColumn className="w-4 h-4" />
              Reports
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
