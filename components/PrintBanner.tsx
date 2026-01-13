
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const PrintBanner: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div id={id} className="w-full bg-[#F2EDE1] border border-stone-200 shadow-2xl rounded-sm overflow-hidden relative min-h-[450px] flex flex-col lg:flex-row items-stretch">
      {/* Textura de papel fundo sutil */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      {/* Lado Esquerdo: Conteúdo Identidade */}
      <div className="flex-[1.2] p-8 lg:p-14 flex flex-col items-center text-center justify-center space-y-4 z-10">
        
        {/* Logo Icon Area (Coração + Cabide) */}
        <div className="relative mb-2">
          <div className="absolute inset-0 bg-[#E68DA3]/15 rounded-full blur-2xl scale-150"></div>
          <svg viewBox="0 0 160 140" className="w-20 h-20 relative z-10" fill="none">
             {/* Coração Rosa ao fundo */}
             <path d="M80 25 C 100 10, 130 20, 130 50 C 130 80, 80 110, 80 110 C 80 110, 30 80, 30 50 C 30 20, 60 10, 80 25" fill="#E68DA344" />
             {/* Cabide */}
             <path d="M85 35 C 85 22, 65 22, 65 35 C 65 42, 80 48, 80 60" stroke="#1A302B" strokeWidth="4" strokeLinecap="round" />
             <path d="M80 60 L 40 95 C 60 100, 100 100, 120 95 L 80 60" stroke="#1A302B" strokeWidth="4" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Branding Central */}
        <div className="flex flex-col items-center">
          <span className="text-[12px] font-bold tracking-[0.6em] text-[#1A302B] mb-0 opacity-80 uppercase">BAZAR DA</span>
          <h2 className="text-[100px] font-script text-[#1A302B] leading-[0.7] -mt-2">Cidoca</h2>
          <div className="flex items-center gap-3 mt-4">
             <div className="h-[1px] w-5 bg-[#1A302B]/40"></div>
             <span className="text-[11px] font-bold tracking-[0.4em] text-[#1A302B] uppercase">MODA SUSTENTÁVEL</span>
             <div className="h-[1px] w-5 bg-[#1A302B]/40"></div>
          </div>
        </div>

        {/* Frase Citada Exata */}
        <p className="max-w-md pt-6 text-[22px] font-serif italic text-[#1A302B] leading-tight">
          "Moda consciente para quem valoriza a alma de cada peça e o carinho de uma marca de bairro."
        </p>

        {/* Rodapé com Contatos (Lado a Lado como na imagem) */}
        <div className="flex gap-8 pt-8 w-full justify-center items-center">
          <div className="flex items-center gap-2 text-[#1A302B]">
            <Instagram className="w-7 h-7" />
            <span className="text-xl font-bold">@bazar.cidoca</span>
          </div>
          <div className="flex items-center gap-2 text-[#1A302B]">
            <MessageCircle className="w-7 h-7 fill-[#1A302B]/10" />
            <span className="text-xl font-bold">98 98528-5143</span>
          </div>
        </div>
      </div>

      {/* Lado Direito: Ilustração e Tags */}
      <div className="flex-1 relative overflow-hidden bg-[#F2EDE1]">
        {/* Ilustração das 4 pessoas (Utilizando imagem que evoca o estilo da referência) */}
        <div className="absolute inset-0 flex items-end justify-center">
           <img 
            src="https://images.unsplash.com/photo-1594913785162-e6786b42dea3?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-[110%] object-cover object-center grayscale-[20%] sepia-[10%] opacity-90 mix-blend-multiply"
            alt="Ilustração Clientes"
            crossOrigin="anonymous"
          />
        </div>
        
        {/* Gradiente de suavização entre os lados */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EDE1] via-transparent to-transparent"></div>
        
        {/* Etiquetas Suspensas (Top Right) */}
        <div className="absolute top-4 right-8 flex gap-3 z-20">
           <div className="w-10 h-24 bg-[#B88C64] rounded-b-sm shadow-xl flex items-center justify-center pb-4 animate-tag" style={{ animationDelay: '0s' }}>
              <span className="[writing-mode:vertical-lr] text-white font-bold tracking-[0.3em] text-[10px]">BAZAR</span>
           </div>
           <div className="w-10 h-24 bg-[#2D453E] rounded-b-sm shadow-xl flex items-center justify-center pb-4 -mt-2 animate-tag" style={{ animationDelay: '1.5s' }}>
              <span className="[writing-mode:vertical-lr] text-white font-bold tracking-[0.3em] text-[10px]">BAZAR</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBanner;
