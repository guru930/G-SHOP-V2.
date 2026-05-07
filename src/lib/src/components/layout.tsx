import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function Layout({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  const { totalItems } = useCart();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) setLocation(`/products?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <header className="sticky top-0 z-50 bg-[#131921] text-white">
        <div className="max-w-[1500px] mx-auto px-4 h-[60px] flex items-center gap-4">
          <Link href="/" className="font-bold text-2xl text-primary">G-SHOP</Link>
          
          <form onSubmit={handleSearch} className="flex-grow flex">
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 text-black rounded-l" 
              placeholder="Search G-Shop..." 
            />
            <button type="submit" className="bg-primary p-2 rounded-r text-black px-4">
              <Search className="w-5 h-5" />
            </button>
          </form>

          <Link href="/orders" className="flex items-center gap-1 border border-transparent hover:border-white p-1">
            <div className="text-xs">Returns<br/><span className="font-bold">& Orders</span></div>
          </Link>

          <Link href="/cart" className="flex items-center gap-1 border border-transparent hover:border-white p-1">
            <div className="relative">
              <ShoppingCart className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 bg-primary text-black rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            </div>
            <span className="font-bold self-end">Cart</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#232f3e] text-[#ccc] py-10 mt-10">
        <div className="max-w-[1500px] mx-auto px-4 text-center">
          <p className="text-white font-bold mb-4">G-Shop USA & Canada Official</p>
          <p className="text-xs">© {new Date().getFullYear()} G-Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

