
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const PrintBanner: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div id={id} className="w-full bg-[#F4F1E8] border border-stone-200 shadow-2xl rounded-sm overflow-hidden relative min-h-[400px] flex flex-col lg:flex-row">
      {/* Textura de papel fundo */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      
      {/* Lado Esquerdo: Conteúdo */}
      <div className="flex-[1.2] p-12 lg:p-16 flex flex-col items-center text-center justify-center space-y-4 z-10">
        
        {/* Logo Icon Area */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-[#E68DA3]/20 rounded-full blur-2xl scale-150"></div>
          <svg viewBox="0 0 160 140" className="w-24 h-24 relative z-10" fill="none">
             <path d="M80 25 C 100 10, 130 20, 130 50 C 130 80, 80 110, 80 110 C 80 110, 30 80, 30 50 C 30 20, 60 10, 80 25" fill="#E68DA333" />
             <path d="M85 35 C 85 22, 65 22, 65 35 C 65 42, 80 48, 80 60" stroke="#E68DA3" strokeWidth="4" strokeLinecap="round" />
             <path d="M80 60 L 40 95 C 60 100, 100 100, 120 95 L 80 60" stroke="#1A302B" strokeWidth="4" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Text Branding */}
        <div className="flex flex-col items-center">
          <span className="text-[14px] font-bold tracking-[0.5em] text-[#1A302B]/60 mb-1">BAZAR DA</span>
          <h2 className="text-[90px] font-script text-[#1A302B] leading-[0.8]">Cidoca</h2>
          <div className="flex items-center gap-3 mt-4">
             <div className="h-[1px] w-6 bg-[#1A302B]/30"></div>
             <span className="text-[12px] font-bold tracking-[0.3em] text-[#1A302B]/80 uppercase">Moda Sustentável</span>
             <div className="h-[1px] w-6 bg-[#1A302B]/30"></div>
          </div>
        </div>

        {/* Citação exata */}
        <p className="max-w-md pt-8 text-2xl font-serif italic text-[#1A302B]/90 leading-tight">
          "Moda consciente para quem valoriza a alma de cada peça e o carinho de uma marca de bairro."
        </p>

        {/* Contatos */}
        <div className="flex flex-wrap gap-8 pt-8 w-full justify-center">
          <div className="flex items-center gap-2 text-[#1A302B]">
            <Instagram className="w-6 h-6" />
            <span className="text-xl font-bold">@bazar.cidoca</span>
          </div>
          <div className="flex items-center gap-2 text-[#1A302B]">
            <MessageCircle className="w-6 h-6 fill-[#1A302B]/10" />
            <span className="text-xl font-bold">98 98528-5143</span>
          </div>
        </div>
      </div>

      {/* Lado Direito: Ilustração das 4 pessoas */}
      <div className="flex-1 relative overflow-hidden min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[10%] opacity-90"
          alt="Clientes Bazar da Cidoca"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F4F1E8]"></div>
        
        {/* Price Tags exactly like in the picture */}
        <div className="absolute top-6 right-10 flex gap-4 z-20">
           <div className="w-12 h-28 bg-[#B4846C] rounded-b-md shadow-xl border-t-8 border-white/20 flex items-center justify-end pb-4 animate-tag" style={{ animationDelay: '0s' }}>
              <span className="[writing-mode:vertical-lr] text-white font-black tracking-widest text-[9px]">BAZAR</span>
           </div>
           <div className="w-12 h-28 bg-[#2D433E] rounded-b-md shadow-xl border-t-8 border-white/20 flex items-center justify-end pb-4 -mt-4 animate-tag" style={{ animationDelay: '1s' }}>
              <span className="[writing-mode:vertical-lr] text-white font-black tracking-widest text-[9px]">BAZAR</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBanner;
