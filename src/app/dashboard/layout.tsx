import Sidebar from "@/components/layouts/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | হিসাব খাতা",
  description:
    "Smart Attendance &amp; Payroll Management for SMBs in Bangladesh",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-muted/20">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <h1>Header</h1>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
