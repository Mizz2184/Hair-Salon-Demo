import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, Star, ShoppingBag, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface ProductDrawerProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({ product, onClose }) => {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 w-full max-w-xl h-full sm:h-auto sm:max-h-[90vh] sm:rounded-3xl overflow-y-auto shadow-2xl relative text-zinc-900 dark:text-white flex flex-col justify-between">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-2.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Product Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-amber-400 text-zinc-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {product.brand}
            </span>
          </div>

          {/* Product Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{product.category}</span>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span>{product.rating.toFixed(1)} ({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
              {product.name}
            </h3>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-zinc-500 font-mono">{product.size}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-sans-body">
            {product.description}
          </p>

          {/* Key Benefits */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">BENEFICIOS CLAVE</h4>
            <div className="grid grid-cols-2 gap-2">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 p-2.5 rounded-lg">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex-1 font-bold uppercase tracking-widest text-xs py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:opacity-90"
          >
            <span>CONOCER MÁS</span>
          </button>
        </div>

      </div>
    </div>
  );
};
