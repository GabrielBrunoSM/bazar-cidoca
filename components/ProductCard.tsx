
import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onWant: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onWant }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-stone-600" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xs font-medium bg-emerald-600/80 px-2 py-1 rounded">
            {product.condition}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-stone-800 leading-tight">
            {product.name}
          </h3>
          <span className="text-emerald-800 font-bold text-lg">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="space-y-1 mb-4">
          <p className="text-sm text-stone-500">Tam: <span className="text-stone-800 font-medium">{product.size}</span></p>
          <p className="text-sm text-stone-500">Tecido: <span className="text-stone-800 font-medium">{product.fabric}</span></p>
        </div>

        <button 
          onClick={() => onWant(product)}
          className="w-full bg-stone-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          EU QUERO
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
