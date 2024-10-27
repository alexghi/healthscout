import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar"; // Make sure the path is correct
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HealthScout",
  description: "A quickstart template using the Assistants API with OpenAI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {assistantId ? children : <Warnings />}
      </body>
    </html>
  );
}
