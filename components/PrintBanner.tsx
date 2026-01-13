
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const PrintBanner: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <div id={id} className="w-full bg-[#F2EDE1] border border-stone-200 shadow-2xl rounded-sm overflow-hidden relative min-h-[420px] flex flex-col lg:flex-row items-stretch">
      {/* Textura de papel fundo */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      {/* Lado Esquerdo: Conteúdo Identidade */}
      <div className="flex-[1.1] p-8 lg:p-12 flex flex-col items-center text-center justify-center space-y-4 z-10">
        
        {/* Logo Icon Area */}
        <div className="relative mb-0">
          <div className="absolute inset-0 bg-[#E68DA3]/20 rounded-full blur-2xl scale-150"></div>
          <svg viewBox="0 0 160 140" className="w-24 h-24 relative z-10" fill="none">
             <path d="M80 25 C 100 10, 130 20, 130 50 C 130 80, 80 110, 80 110 C 80 110, 30 80, 30 50 C 30 20, 60 10, 80 25" fill="#E68DA355" />
             <path d="M85 35 C 85 22, 65 22, 65 35 C 65 42, 80 48, 80 60" stroke="#1A302B" strokeWidth="4" strokeLinecap="round" />
             <path d="M80 60 L 40 95 C 60 100, 100 100, 120 95 L 80 60" stroke="#1A302B" strokeWidth="4" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Branding Central */}
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.6em] text-[#1A302B] mb-0 opacity-90 uppercase">BAZAR DA</span>
          <h2 className="text-[105px] font-script text-[#1A302B] leading-[0.65] -mt-1 mb-2">Cidoca</h2>
          <div className="flex items-center gap-3 mt-4">
             <div className="h-[1px] w-6 bg-[#1A302B]/40"></div>
             <span className="text-[10px] font-bold tracking-[0.45em] text-[#1A302B] uppercase">MODA SUSTENTÁVEL</span>
             <div className="h-[1px] w-6 bg-[#1A302B]/40"></div>
          </div>
        </div>

        {/* Frase Citada */}
        <p className="max-w-md pt-4 text-[21px] font-serif italic text-[#1A302B] leading-tight">
          "Moda consciente para quem valoriza a alma de cada peça e o carinho de uma marca de bairro."
        </p>

        {/* Rodapé com Contatos (Ícones lado a lado) */}
        <div className="flex gap-10 pt-8 w-full justify-center items-center">
          <div className="flex items-center gap-2 text-[#1A302B]">
            <Instagram className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">@bazar.cidoca</span>
          </div>
          <div className="flex items-center gap-2 text-[#1A302B]">
            <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.613.062-1.637-.325-1.284-.487-2.096-1.803-2.16-1.887-.063-.084-.512-.612-.512-1.168 0-.557.291-.831.396-.941.105-.11.231-.138.307-.138.077 0 .154.015.222.015.074.003.173-.03.271.205.1.242.342.834.372.89.03.059.014.127-.022.19-.037.062-.056.105-.114.171-.058.066-.121.147-.173.197-.06.059-.121.124-.051.245.07.121.311.511.666.827.458.408.845.535.966.595.121.06.192.051.264-.031.071-.083.307-.358.39-.481.083-.122.166-.103.281-.059.114.045.722.341.846.403.125.062.208.093.239.144.031.052.031.298-.113.704zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.179L2 22l4.959-1.3c1.543.982 3.367 1.554 5.326 1.554 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.724 0-3.331-.482-4.698-1.315l-.337-.205-2.433.639.65-2.373-.225-.358C4.127 15.029 3.6 13.568 3.6 12c0-4.632 3.768-8.4 8.4-8.4s8.4 3.768 8.4 8.4-3.768 8.4-8.4 8.4z"/>
                </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">98 98528-5143</span>
          </div>
        </div>
      </div>

      {/* Lado Direito: Ilustração estilizada */}
      <div className="flex-1 relative overflow-hidden bg-[#F2EDE1]">
        <div className="absolute inset-0 flex items-end justify-center">
           <img 
            src="https://images.unsplash.com/photo-1594913785162-e6786b42dea3?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover object-center grayscale-[15%] sepia-[5%] opacity-90 mix-blend-multiply"
            alt="Ilustração Clientes"
            crossOrigin="anonymous"
          />
        </div>
        
        {/* Gradiente de transição suave */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F2EDE1] to-transparent"></div>
        
        {/* Etiquetas Suspensas (Top Right) */}
        <div className="absolute top-6 right-10 flex gap-4 z-20">
           <div className="w-11 h-26 bg-[#B88C64] rounded-b-[2px] shadow-2xl flex items-center justify-center pb-5 animate-tag" style={{ animationDelay: '0s' }}>
              <span className="[writing-mode:vertical-lr] text-white font-black tracking-[0.35em] text-[9px]">BAZAR</span>
           </div>
           <div className="w-11 h-26 bg-[#2D453E] rounded-b-[2px] shadow-2xl flex items-center justify-center pb-5 -mt-3 animate-tag" style={{ animationDelay: '1.2s' }}>
              <span className="[writing-mode:vertical-lr] text-white font-black tracking-[0.35em] text-[9px]">BAZAR</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBanner;
