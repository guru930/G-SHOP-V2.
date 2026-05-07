import { Link } from "wouter";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: any) {
  const { addItem } = useCart();
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg flex flex-col h-full group">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square bg-gray-100 mb-3 rounded overflow-hidden cursor-pointer">
          <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-4xl group-hover:scale-110 transition">G</div>
        </div>
      </Link>
      <h3 className="text-sm font-bold line-clamp-2 mb-2">{product.name}</h3>
      <div className="mt-auto">
        <p className="text-xl font-bold text-red-700">{formatCurrency(product.salePrice)}</p>
        <button onClick={() => addItem(product)} className="w-full bg-yellow-400 hover:bg-yellow-500 py-1.5 rounded-full mt-3 text-sm font-bold">Add to Cart</button>
      </div>
    </div>
  );
}

