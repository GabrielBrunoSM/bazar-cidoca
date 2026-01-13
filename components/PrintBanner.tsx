
import React from 'react';
import Logo from './Logo';
import { Instagram, MessageCircle } from 'lucide-react';

const PrintBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#FDFBF7] border border-stone-200 shadow-xl rounded-[2rem] overflow-hidden relative group">
      {/* Textura de papel sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Lado Esquerdo: Identidade e Contatos */}
        <div className="flex-1 p-12 lg:p-16 flex flex-col justify-between items-center lg:items-start text-center lg:text-left space-y-8 z-10">
          <div className="scale-75 lg:scale-100 origin-center lg:origin-left">
            <Logo variant="vertical" size="lg" />
          </div>

          <div className="max-w-md">
            <p className="text-2xl lg:text-3xl font-serif italic text-forest/80 leading-relaxed">
              "Moda consciente para quem valoriza a alma de cada peça e o carinho de uma marca de bairro."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 pt-4">
            <div className="flex items-center gap-3 text-forest group/social cursor-pointer">
              <div className="p-2 border-2 border-forest/10 rounded-xl group-hover/social:bg-forest group-hover/social:text-white transition-all">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">@bazar.cidoca</span>
            </div>
            <div className="flex items-center gap-3 text-forest group/social cursor-pointer">
              <div className="p-2 border-2 border-forest/10 rounded-xl group-hover/social:bg-forest group-hover/social:text-white transition-all">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">98 98528-5143</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Ilustração das Mulheres */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-full overflow-hidden">
          {/* Usando uma imagem que remete ao estilo de ilustração watercolor/fashion da referência */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FDFBF7]/20 to-[#FDFBF7] lg:block hidden z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90 group-hover:scale-105 transition-transform duration-[10000ms]"
            alt="Ilustração de moda sustentável"
          />
          
          {/* Overlay de Etiquetas de Preço (como na imagem) */}
          <div className="absolute top-8 right-8 flex gap-4 rotate-12 lg:flex hidden z-20">
            <div className="w-16 h-28 bg-[#B4846C] rounded-lg flex flex-col items-center justify-end pb-4 shadow-lg border-t-[10px] border-[#A3735B]">
               <span className="[writing-mode:vertical-lr] text-white font-black tracking-[0.3em] text-[10px]">BAZAR</span>
            </div>
            <div className="w-16 h-28 bg-[#2D433E] rounded-lg flex flex-col items-center justify-end pb-4 shadow-lg border-t-[10px] border-[#1C322D] -mt-4">
               <span className="[writing-mode:vertical-lr] text-white font-black tracking-[0.3em] text-[10px]">CIDOCA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBanner;
