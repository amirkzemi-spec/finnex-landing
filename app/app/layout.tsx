import "./globals.css";
import AppShell from "../components/AppShell";

export const metadata = {
  title: "FINNEX App",
  description: "FINNEX investor dashboard (MVP)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#070B10] text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}