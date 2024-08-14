import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Zypherium Labs",
  description: "Zypherium Labs - Building the Future with Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>

      <body className="text-gray-700">{children}</body>
    </html>
  );
}
