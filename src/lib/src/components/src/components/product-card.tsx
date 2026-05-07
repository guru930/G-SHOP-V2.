import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product, onBuyNow }: any) {
  const { addItem } = useCart();

  return (
    <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <Link href={`/product/${product.id}`} className="block mb-3">
        <div className="aspect-square bg-[#f8f8f8] rounded flex items-center justify-center overflow-hidden">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="object-contain w-full h-full" />
          ) : (
            <span className="text-4xl font-bold text-gray-200">G</span>
          )}
        </div>
      </Link>
      
      <Link href={`/product/${product.id}`}>
        <h3 className="text-sm font-medium text-[#0F1111] line-clamp-2 hover:text-orange-700 cursor-pointer mb-2">
          {product.name}
        </h3>
      </Link>

      <div className="mt-auto">
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-xl font-bold">{formatCurrency(product.salePrice)}</span>
        </div>
        
        <button 
          onClick={() => addItem(product)}
          className="w-full bg-primary hover:bg-[#f0a130] text-black text-xs font-bold py-2 rounded-full mb-2"
        >
          Add to Cart
        </button>
        
        <button 
          onClick={() => onBuyNow?.(product)}
          className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black text-xs font-bold py-2 rounded-full"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

