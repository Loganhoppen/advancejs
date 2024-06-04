"use client";

import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-4">Unit Conversion</h1>
        <p className="text-lg">Convert between different units of measurement easily.</p>
      </main>
    </Layout>
  );
}
