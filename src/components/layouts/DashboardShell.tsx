"use client";
import DashboardHeader from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React, { useState } from "react";

const DashboardShell = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-muted/20">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <DashboardHeader setOpen={setOpen} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardShell;
