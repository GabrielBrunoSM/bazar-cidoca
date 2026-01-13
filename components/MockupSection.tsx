
import React from 'react';
import { MoreHorizontal, Heart, MessageSquare, Send, Bookmark, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export const InstagramMockup = () => (
  <div className="bg-white border border-rose/10 rounded-[4rem] overflow-hidden shadow-2xl max-w-xs mx-auto group">
    {/* IG Header */}
    <div className="flex items-center justify-between p-6 border-b border-rose/5 bg-[#FDFBF7]/40">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-rose/30 bg-white overflow-hidden shadow-inner">
           <div className="scale-[0.35]">
             <Logo variant="icon-only" />
           </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-black text-forest tracking-tight">bazardacidoca</span>
          <span className="text-[9px] font-black uppercase tracking-widest text-rose">Moda Sustentável</span>
        </div>
      </div>
      <MoreHorizontal className="w-5 h-5 text-stone-300" />
    </div>
    
    {/* IG Image - Roupa em destaque */}
    <div className="aspect-square bg-stone-50 overflow-hidden relative">
      <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]" alt="Vestido Vintage" />
      <div className="absolute top-6 left-6 bg-rose text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
        Moda Consciente
      </div>
    </div>
    
    {/* IG Actions */}
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <div className="flex gap-7">
          <Heart className="w-7 h-7 text-rose fill-rose" />
          <MessageSquare className="w-7 h-7 text-stone-200" />
        </div>
        <Bookmark className="w-7 h-7 text-stone-200" />
      </div>
      <p className="text-sm leading-relaxed text-stone-600 font-medium">
        <span className="font-black text-forest mr-2">bazardacidoca</span>
        O linho que conta histórias. 🌿 Escolher o que já existe é o ato mais sustentável da moda. Esse garimpo espera por você! ✨ #modasustentavel #consumoconsciente #cidoca
      </p>
    </div>
  </div>
);

export const WhatsAppMockup = () => (
  <div className="bg-[#EFEAE2] border border-rose/10 rounded-[4rem] overflow-hidden shadow-2xl max-w-xs mx-auto relative h-[580px]">
    {/* WA Header */}
    <div className="bg-[#0A2622] p-8 flex items-center gap-5 text-white shadow-2xl">
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-rose shadow-xl">
         <div className="scale-[0.4]">
           <Logo variant="icon-only" />
         </div>
      </div>
      <div>
        <h4 className="font-bold text-lg leading-none font-serif italic">Bazar da Cidoca ✨</h4>
        <p className="text-[10px] opacity-60 mt-1 uppercase tracking-[0.2em] font-black text-rose">Moda Sustentável</p>
      </div>
    </div>

    {/* Messages Area */}
    <div className="p-6 space-y-8 h-[340px] overflow-y-auto">
      <div className="bg-white p-5 rounded-[2rem] rounded-tl-none shadow-xl max-w-[95%] border-l-8 border-rose relative">
        <div className="aspect-[4/5] bg-stone-50 rounded-2xl overflow-hidden mb-5 border border-rose/10 shadow-inner">
          <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Peça do Bazar" />
        </div>
        <p className="text-sm text-stone-800 leading-tight">
          <span className="font-black text-rose block mb-3 uppercase tracking-widest text-[11px]">🌿 GARIMPO CONSCIENTE</span>
          Blusa de Seda Estampada<br/>
          R$ 89,00 | Tam: M<br/>
          <span className="opacity-40 italic mt-5 block text-[11px]">Envie "RESERVAR" para garantir!</span>
        </p>
      </div>
    </div>
    
    {/* Input Area */}
    <div className="absolute bottom-10 inset-x-8 p-3 bg-white rounded-full flex items-center gap-5 shadow-2xl border border-rose/10">
      <div className="flex-1 px-5 py-1 text-sm text-stone-300 italic">Quero reservar essa blusa!</div>
      <div className="w-14 h-14 rounded-full bg-rose flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform cursor-pointer">
        <MessageCircle className="w-7 h-7" />
      </div>
    </div>
  </div>
);
