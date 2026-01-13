
import React from 'react';
import Logo from './Logo';
import { Instagram, MessageCircle } from 'lucide-react';

const PrintBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#FDFBF7] border border-stone-100 shadow-2xl rounded-[1.5rem] overflow-hidden relative group">
      {/* Textura de papel sutil */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      
      <div className="flex flex-col lg:flex-row min-h-[450px]">
        {/* Lado Esquerdo: Identidade e Conteúdo (Layout idêntico à imagem) */}
        <div className="flex-[0.9] p-10 lg:p-16 flex flex-col items-center lg:items-center text-center space-y-4 z-10 relative">
          
          {/* Logo Icon (Coração + Cabide) */}
          <div className="scale-90 mb-2">
            <Logo variant="icon-only" />
          </div>

          {/* Nome da Marca */}
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-forest/60 mb-[-8px]">
              BAZAR DA
            </span>
            <h2 className="text-[82px] font-script text-forest leading-none">
              Cidoca
            </h2>
            <div className="flex items-center gap-4 mt-1">
              <div className="h-[1px] w-8 bg-forest/20"></div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-forest/70">
                MODA SUSTENTÁVEL
              </span>
              <div className="h-[1px] w-8 bg-forest/20"></div>
            </div>
          </div>

          {/* Citação da Marca */}
          <div className="max-w-md pt-6">
            <p className="text-xl lg:text-2xl font-serif italic text-forest/90 leading-snug">
              "Moda consciente para quem valoriza a alma de cada peça e o carinho de uma marca de bairro."
            </p>
          </div>

          {/* Info de Contato (Base do banner) */}
          <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t border-forest/5 w-full justify-center lg:justify-start">
            <div className="flex items-center gap-3 text-forest">
              <Instagram className="w-8 h-8 stroke-[1.5px]" />
              <span className="text-2xl font-bold tracking-tight">@bazar.cidoca</span>
            </div>
            <div className="flex items-center gap-3 text-forest">
              <MessageCircle className="w-8 h-8 stroke-[1.5px]" />
              <span className="text-2xl font-bold tracking-tight">98 98528-5143</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Ilustração das Mulheres (Representação visual da arte) */}
        <div className="flex-1 relative min-h-[400px] lg:min-h-full overflow-hidden flex items-end">
          {/* Imagem de mulheres estilosas em tons terrosos para casar com a ilustração original */}
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[15%] sepia-[15%] opacity-90 transition-transform duration-[8000ms] group-hover:scale-105"
            alt="Moda Bazar da Cidoca"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FDFBF7]/10 to-[#FDFBF7] lg:block hidden"></div>
          
          {/* Etiquetas Penduradas (Canto superior direito) */}
          <div className="absolute top-0 right-12 flex gap-4 z-20">
             {/* Tag Bege */}
             <div className="w-14 h-32 bg-[#B4846C] rounded-b-lg flex flex-col items-center justify-end pb-4 shadow-xl border-t-[12px] border-white/10 animate-float" style={{ animationDelay: '0s' }}>
               <div className="absolute top-2 w-2 h-2 bg-white/20 rounded-full"></div>
               <span className="[writing-mode:vertical-lr] text-white/90 font-black tracking-[0.4em] text-[10px] uppercase">BAZAR</span>
             </div>
             {/* Tag Verde */}
             <div className="w-14 h-36 bg-[#2D433E] rounded-b-lg flex flex-col items-center justify-end pb-4 shadow-xl border-t-[12px] border-white/10 -mt-4 animate-float" style={{ animationDelay: '1.5s' }}>
               <div className="absolute top-2 w-2 h-2 bg-white/20 rounded-full"></div>
               <span className="[writing-mode:vertical-lr] text-white/90 font-black tracking-[0.4em] text-[10px] uppercase">CIDOCA</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBanner;
