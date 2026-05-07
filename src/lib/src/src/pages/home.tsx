import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Tag, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  // Dummy data jab tak backend connect nahi hota
  const featuredProducts = [
    { id: 1, name: "Premium Wireless Headphones", salePrice: 99.99, imageUrl: "" },
    { id: 2, name: "Smart Watch Series 7", salePrice: 199.50, imageUrl: "" }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-[#232f3e] text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Premium Electronics. Unbeatable Prices.</h1>
        <p className="text-lg text-gray-300 mb-6">Fast delivery to USA & Canada. Save up to $50 instantly.</p>
        <Link href="/products" className="bg-primary text-black px-8 py-3 rounded-full font-bold">
          Shop Now
        </Link>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t pt-10">
          <div className="flex flex-col items-center text-center">
            <Truck className="w-10 h-10 text-primary mb-2" />
            <h4 className="font-bold">Free Fast Shipping</h4>
            <p className="text-sm text-gray-600">Across USA & Canada</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-10 h-10 text-primary mb-2" />
            <h4 className="font-bold">Verified Authentic</h4>
            <p className="text-sm text-gray-600">100% Genuine Products</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <RotateCcw className="w-10 h-10 text-primary mb-2" />
            <h4 className="font-bold">Easy Returns</h4>
            <p className="text-sm text-gray-600">30-day hassle-free</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

