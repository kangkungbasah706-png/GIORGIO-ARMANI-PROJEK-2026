import React from 'react';
import { FORMAT_CURRENCY } from '../constants';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Use override totalIncome if provided, otherwise calculate
  const totalKeuntungan = product.totalIncome !== undefined ? product.totalIncome : (product.price + product.profit);
  const actionText = product.statusText || 'Detail';
  
  return (
    <div className="bg-[var(--bg-panel)] border border-[var(--color-border-dim)] rounded-xl flex flex-row overflow-hidden shadow-2xl transition-all duration-700 group h-full relative hover:border-[var(--color-border-mid)] hover:shadow-[0_25px_50px_-12px_rgba(179,139,77,0.2)]">
      
      {/* LEFT COLUMN: PREMIUM VISUAL (60%) */}
      <div className="w-[60%] h-full relative overflow-hidden bg-black border-r border-white/5">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 opacity-75 group-hover:opacity-100 grayscale-[10%] group-hover:grayscale-0"
        />
        {/* Subtle Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30"></div>
        
        {/* Category Label */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
           <span className="text-[clamp(11px,1vw,13px)] font-bold text-white px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 tracking-[0.15em] uppercase rounded-sm shadow-lg">
             {product.label}
           </span>
        </div>
      </div>

      {/* RIGHT COLUMN: REVISED LUXURY PANEL (40%) */}
      <div className="w-[40%] flex flex-col p-2.5 sm:p-4 justify-between relative bg-gradient-to-br from-[#333333] via-[#262626] to-[#1a1a1a] backdrop-blur-md shadow-[inset_0_0_30px_rgba(179,139,77,0.1)] border-l border-white/10">
        
        {/* Subtle Edge Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-[var(--accent)]/20 transition-colors duration-700"></div>

        {/* Product Title Section - Shrink-0 keeps it at top */}
        <div className="space-y-1 sm:space-y-1.5 relative z-10 shrink-0">
          <h3 className="text-[clamp(15px,2.2vw,19px)] font-bold text-[#FFFFFF] leading-tight uppercase tracking-wide line-clamp-2 text-glow-gold [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
            {product.name}
          </h3>
          <div className="h-[0.5px] w-full bg-gradient-to-r from-[var(--accent)] to-transparent opacity-60"></div>
        </div>

        {/* Data Matrix Grid - mt-auto pushes this block down, gaps distributed for balance */}
        <div className="space-y-5 sm:space-y-7 mt-auto mb-2 sm:mb-3 relative z-10">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <span className="text-[clamp(11px,1.1vw,12px)] font-medium text-[#E5E5E5] uppercase tracking-[0.1em] mb-1 opacity-80">HARGA</span>
              <span className="text-[clamp(14px,1.6vw,17px)] font-semibold text-[#fdfcf0] tracking-tight leading-none [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                {FORMAT_CURRENCY(product.price)}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[clamp(11px,1.1vw,12px)] font-medium text-[var(--accent)] uppercase tracking-[0.1em] opacity-100">PROFIT</span>
                <span className="text-[10px] font-medium text-[var(--accent)] opacity-70">({product.commission}%)</span>
              </div>
              <span className="text-[clamp(14px,1.6vw,17px)] font-semibold text-[#94f3b8] leading-none brightness-110 [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
                {FORMAT_CURRENCY(product.profit)}
              </span>
            </div>
          </div>

          <div className="pt-5 sm:pt-7 border-t border-white/20 flex flex-col">
            <span className="text-[clamp(11px,1.1vw,12px)] font-medium text-[#E5E5E5] uppercase tracking-[0.15em] mb-1 opacity-80">Total Pendapatan</span>
            <span className="text-[clamp(18px,2.2vw,22px)] font-bold text-[#ffef9c] text-glow-gold leading-none [text-shadow:0_2px_8px_rgba(0,0,0,1)]">
              {FORMAT_CURRENCY(totalKeuntungan)}
            </span>
          </div>
        </div>

        {/* Minimalist Detail Action */}
        <div className="flex items-center justify-between pt-1 sm:pt-2 group/btn cursor-pointer relative z-10 border-t border-white/5">
           <span className="text-[clamp(11px,1.1vw,12px)] font-semibold text-[#E5E5E5] uppercase tracking-[0.2em] group-hover/btn:text-[var(--accent-bright)] transition-all opacity-90">
             {actionText}
           </span>
           <div className="flex-grow ml-2 h-[0.5px] bg-[var(--accent)] opacity-30 group-hover/btn:opacity-80 transition-all origin-left group-hover/btn:scale-x-105"></div>
           <svg className="w-3 h-3 ml-1 text-[var(--accent)] opacity-60 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
           </svg>
        </div>
      </div>
      
      {/* LUXURY DECORATIVE ELEMENT */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[var(--accent)] opacity-[0.05] rounded-full blur-2xl pointer-events-none group-hover:opacity-[0.08] transition-opacity"></div>
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[var(--accent)] opacity-[0.02] rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;