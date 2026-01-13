
import React, { useState, useEffect } from 'react';
import { aiService } from '../services/ai';
import { Sparkles, Loader2, Package, Tag, MessageSquare, Camera } from 'lucide-react';

const BrandKit: React.FC = () => {
  const [logoImg, setLogoImg] = useState<string | null>(null);
  const [bagImg, setBagImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisuals = async () => {
      const logoPromise = aiService.generateBrandVisual("A professional and elegant logo for 'Bazar da Cidoca'. Minimalist on cream background. 'C' as clothes hanger hook. Deep forest green.");
      const bagPromise = aiService.generateBrandVisual("A high-end mockup of paper shopping bags in kraft color with 'Bazar da Cidoca' logo in dark teal. Soft natural lighting.");
      
      const [l, b] = await Promise.all([logoPromise, bagPromise]);
      setLogoImg(l);
      setBagImg(b);
      setLoading(false);
    };
    fetchVisuals();
  }, []);

  const kits = [
    { 
      icon: <Tag className="w-5 h-5" />, 
      title: "Tags Profissionais", 
      desc: "Use barbante de sisal e papel kraft para um toque rústico e chique." 
    },
    { 
      icon: <Package className="w-5 h-5" />, 
      title: "Kit Unboxing", 
      desc: "Um bilhetinho de agradecimento faz a cliente se sentir especial." 
    },
    { 
      icon: <MessageSquare className="w-5 h-5" />, 
      title: "WhatsApp Business", 
      desc: "Configure respostas rápidas para agilizar o atendimento." 
    },
    { 
      icon: <Camera className="w-5 h-5" />, 
      title: "Cenário de Fotos", 
      desc: "Um lençol de linho esticado é o fundo perfeito para valorizar as peças." 
    },
  ];

  return (
    <section className="py-16 bg-stone-100 rounded-[3rem] px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-amber-600" />
          <h2 className="text-3xl font-bold text-stone-800">Identidade Visual & Gestão</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Logo Showcase */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-4 text-stone-700">A Nova Logo</h3>
            <div className="aspect-video rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center border border-dashed border-stone-300">
              {loading ? <Loader2 className="w-8 h-8 animate-spin text-stone-300" /> : <img src={logoImg || 'https://picsum.photos/seed/cidoca-logo/800/450'} className="w-full h-full object-cover" />}
            </div>
            <p className="mt-4 text-sm text-stone-500 italic">"Identidade boutique que transmite cuidado e curadoria premium."</p>
          </div>

          {/* Bag Showcase */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-4 text-stone-700">Embalagem Sustentável</h3>
            <div className="aspect-video rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center border border-dashed border-stone-300">
              {loading ? <Loader2 className="w-8 h-8 animate-spin text-stone-300" /> : <img src={bagImg || 'https://picsum.photos/seed/cidoca-bag/800/450'} className="w-full h-full object-cover" />}
            </div>
            <p className="mt-4 text-sm text-stone-500 italic">"Papel Kraft: o toque eco-chic que valoriza o primeiro contato físico."</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kits.map((k, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-4 text-stone-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                {k.icon}
              </div>
              <h4 className="font-bold text-stone-800 mb-1">{k.title}</h4>
              <p className="text-sm text-stone-500 leading-relaxed">{k.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandKit;
