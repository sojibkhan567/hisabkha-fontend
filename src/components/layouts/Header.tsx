"use client";
import { Menu } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import NoficationDropdrown from "../dashboard/header/notification-dropdrown";
import AvatarDropdown from "../dashboard/header/avatar-dropdown";
import { useState } from "react";

const DashboardHeader = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b bg-card px-4 sm:px-6">
      <button
        onClick={() => setOpen(true)}
        data-slot="button"
        data-variant="ghost"
        data-size="icon"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 md:hidden"
        aria-label="Open menu"
      >
        <Menu />
      </button>
      <h1 className="flex-1 truncate text-base font-semibold sm:text-lg">
        Dashboard
      </h1>
      <ThemeToggle />
      <NoficationDropdrown />
      <AvatarDropdown />
    </header>
  );
};

export default DashboardHeader;
