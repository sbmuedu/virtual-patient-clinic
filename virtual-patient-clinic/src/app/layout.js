import "./globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "Virtual Patient Clinic",
  description: "Interactive 3D Medical Examination Simulator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
