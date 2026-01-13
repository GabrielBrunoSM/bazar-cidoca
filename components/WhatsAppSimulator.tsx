
import React from 'react';
import { Send, Image as ImageIcon, Smile, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const WhatsAppSimulator: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-stone-200 my-16">
      {/* Header */}
      <div className="bg-[#075E54] p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden flex items-center justify-center text-stone-500 font-bold">
            C
          </div>
          <div>
            <h4 className="font-bold text-sm">Garimpos da Cidoca ✨</h4>
            <p className="text-[10px] opacity-80">visto por último hoje às 14:30</p>
          </div>
        </div>
        <div className="flex gap-4 opacity-80">
          <Video className="w-5 h-5" />
          <Phone className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="h-[400px] bg-[#E5DDD5] p-4 overflow-y-auto space-y-4 flex flex-col">
        <div className="self-center bg-[#D1E9FF] text-[10px] px-3 py-1 rounded-full text-stone-600 shadow-sm uppercase font-bold tracking-wider">
          Hoje
        </div>

        {/* Admin message */}
        <div className="self-start max-w-[85%] bg-white p-2 rounded-lg rounded-tl-none shadow-sm">
          <div className="relative aspect-[4/5] rounded overflow-hidden mb-2">
             <img src="https://picsum.photos/seed/msg/300/400" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-stone-800 leading-relaxed">
            <span className="block font-bold mb-1 text-pink-600">🛍️ NOVIDADE: Vestido Midi Floral</span>
            • Tamanho: G<br/>
            • Estado: Impecável ✨<br/>
            • Valor: R$ 45,00<br/><br/>
            Mande <span className="font-bold text-emerald-700">"QUERO"</span> no meu privado para reservar! 🏃‍♀️💨
          </p>
          <span className="block text-[9px] text-stone-400 text-right mt-1">14:35</span>
        </div>

        {/* User response */}
        <div className="self-end max-w-[80%] bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow-sm">
          <p className="text-xs text-stone-800">Nossa, que lindo! Vou mandar no privado agora! 😍</p>
          <span className="block text-[9px] text-stone-400 text-right mt-1">14:36</span>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 bg-stone-50 flex items-center gap-3">
        <Smile className="w-6 h-6 text-stone-400" />
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-stone-400 text-xs shadow-sm border border-stone-100">
          Mensagem
        </div>
        <div className="flex gap-3 text-stone-400">
           <Paperclip className="w-5 h-5" />
           <ImageIcon className="w-5 h-5" />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center text-white">
          <Send className="w-5 h-5 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppSimulator;
