import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function Layout({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  const { totalItems } = useCart();
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-[#131921] text-white py-2">
        <div className="max-w-[1500px] mx-auto px-4 flex items-center gap-4">
          <Link href="/" className="font-bold text-2xl text-orange-400">G-SHOP</Link>
          <form onSubmit={(e) => { e.preventDefault(); setLocation(`/products?search=${search}`); }} className="flex flex-grow">
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="w-full p-2 text-black rounded-l" placeholder="Search items..." />
            <button className="bg-orange-400 p-2 rounded-r text-black"><Search /></button>
          </form>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative flex items-center">
              <ShoppingCart className="w-8 h-8" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-black rounded-full text-xs font-bold px-1.5">{totalItems}</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-[#232f3e] text-white p-10 text-center mt-10">
        <p>© 2026 G-SHOP USA & CANADA Official</p>
      </footer>
    </div>
  );
}

