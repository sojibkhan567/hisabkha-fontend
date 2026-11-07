import { LayoutDashboardIcon, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside>
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link className="flex items-center gap-2.5" href="/en/dashboard">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-lg font-bold text-white">
            হ
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold">হিসাব খাতা</p>
            <p className="max-w-32.5 truncate text-[11px] text-muted-foreground">
              Demo Restaurant
            </p>
          </div>
        </Link>
        <button
          className="rounded-md p-1.5 hover:bg-muted md:hidden"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors bg-green-600 text-white shadow-sm"
          aria-current="page"
          href="/dashboard"
        >
          <LayoutDashboardIcon className="h-4.5 w-4.5 shrink-0" />
          Dashboard
        </Link>
      </nav>
      Sidebar
    </aside>
  );
};

export default Sidebar;
