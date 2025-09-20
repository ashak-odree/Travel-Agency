
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Travel Agency",
  description: "Landing page + Dashboard with JWT auth"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <nav className="container flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold">Travelly</Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="hover:underline">Login</Link>
              <Link href="/dashboard" className="btn btn-primary">Dashboard</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-10">
          <div className="container py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Travelly. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
