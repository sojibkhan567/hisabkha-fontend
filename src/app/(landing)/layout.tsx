import Navbar from "@/components/Navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="min-h-screen bg-white dark:bg-gray-950">{children}</div>
      </main>
    </div>
  );
}
