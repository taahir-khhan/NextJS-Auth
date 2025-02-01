"use client";
import { Footer, Header, Main } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
