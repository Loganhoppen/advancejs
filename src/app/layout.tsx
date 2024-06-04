"use client";

import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Unit Conversion</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
