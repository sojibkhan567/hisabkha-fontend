import {
  CalendarDays,
  ChartColumn,
  Clock,
  DollarSign,
  LayoutDashboardIcon,
  LogOut,
  Megaphone,
  Settings,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-card transition-transform duration-200 md:static md:z-auto md:w-60 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"} `}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link className="flex items-center gap-2.5" href="/dashboard">
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
          onClick={() => setOpen(false)}
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
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/employees"
        >
          <Users className="h-4.5 w-4.5 shrink-0" />
          Employees
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/attendance"
        >
          <Clock className="h-4.5 w-4.5 shrink-0" />
          Attendance
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/leave"
        >
          <CalendarDays className="h-4.5 w-4.5 shrink-0" />
          Leave
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/payroll"
        >
          <DollarSign className="h-4.5 w-4.5 shrink-0" />
          Payroll
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/finance"
        >
          <TrendingUp className="h-4.5 w-4.5 shrink-0" />
          Finance
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/reports"
        >
          <ChartColumn className="h-4.5 w-4.5 shrink-0" />
          Reports
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/notices"
        >
          <Megaphone className="h-4.5 w-4.5 shrink-0" />
          Notices
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="/dashboard/activity"
        >
          <Clock className="h-4.5 w-4.5 shrink-0" />
          Activity Log
        </Link>
      </nav>
      {/** settings section */}
      <div className="space-y-1 border-t p-3">
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
          href="dashboard/settings"
        >
          <Settings className="h-4.5 w-4.5 shrink-0" />
          Settings
        </Link>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <span
            data-slot="avatar"
            data-size="default"
            className="group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6 h-8 w-8"
          >
            <span
              data-slot="avatar-fallback"
              className="flex size-full items-center justify-center rounded-full group-data-[size=sm]/avatar:text-xs bg-green-100 text-xs font-semibold text-green-700"
            >
              BU
            </span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Business Owner</p>
            <p className="truncate text-[11px] text-muted-foreground">
              ORG ADMIN
            </p>
          </div>
          <button
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-red-600"
            aria-label="Logout"
            title="Logout"
          >
            <LogOut className="h-4.5 w-4.5 shrink-0" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
