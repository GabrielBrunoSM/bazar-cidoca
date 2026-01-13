
import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import PrintBanner from './components/PrintBanner';
import { aiService } from './services/ai';
import { InstagramMockup, WhatsAppMockup } from './components/MockupSection';
import { Download, ShoppingBag, Loader2, ArrowRight, MessageCircle, Heart, Star, Sparkles, Scissors, Leaf, Printer } from 'lucide-react';

const App: React.FC = () => {
  const [bagImg, setBagImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisuals = async () => {
      setLoading(true);
      const bag = await aiService.generateBrandVisual("High-quality boutique paper bag, cream and forest green, minimalist logo of a hanger in a heart, elegant fashion photography style.");
      setBagImg(bag);
      setLoading(false);
    };
    fetchVisuals();
  }, []);

  const downloadAsset = (title: string) => {
    alert(`Preparando seu kit de marca: ${title}.`);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A2622] selection:bg-[#E68DA3] selection:text-white pb-20">
      {/* Navbar Minimalista */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <Logo size="sm" variant="horizontal" />
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-stone-400">
          <a href="#" className="hover:text-rose transition-colors">Catálogo</a>
          <a href="#" className="hover:text-rose transition-colors">Identidade</a>
          <a href="#" className="hover:text-rose transition-colors">Dicas</a>
        </div>
      </nav>

      {/* Hero: A Nova Identidade Profissional */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-rose/5 px-4 py-2 rounded-full text-rose">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest">Identidade Visual Pronta</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif italic text-forest leading-tight">
            Seu Bazar, agora uma <br/> <span className="text-rose">Boutique de Bairro.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-500 font-light leading-relaxed">
            Transformamos o Bazar da Cidoca em uma marca que transmite o cuidado de cada peça garimpada. 
            Abaixo, sua nova arte para redes sociais e materiais de impressão.
          </p>
        </div>

        {/* Banner de Impressão Recreado */}
        <div className="space-y-8">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-serif italic text-2xl text-forest">Banner Principal / Fachada</h3>
            <button 
              onClick={() => downloadAsset('Banner de Impressão')}
              className="flex items-center gap-2 text-rose font-bold text-sm hover:underline"
            >
              <Printer className="w-4 h-4" /> Download para Gráfica
            </button>
          </div>
          <PrintBanner />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-40">
        
        {/* Mockups Digitais */}
        <section className="space-y-16">
          <div className="max-w-2xl text-left space-y-4">
             <h2 className="text-4xl font-serif italic">Presença Digital</h2>
             <p className="text-stone-500 text-lg font-light leading-relaxed">
               Como sua marca se comporta onde as clientes mais estão: no WhatsApp e no Instagram.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
             <div className="space-y-6">
                <WhatsAppMockup />
                <p className="text-center text-stone-400 text-sm italic">"Atendimento que acolhe e converte."</p>
             </div>
             <div className="space-y-6">
                <InstagramMockup />
                <p className="text-center text-stone-400 text-sm italic">"O feed que valoriza cada garimpo."</p>
             </div>
          </div>
        </section>

        {/* Embalagem e Detalhes */}
        <section className="bg-forest rounded-[4rem] p-10 lg:p-24 text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-rose/5 rounded-full blur-[80px]"></div>
           
           <div className="flex-1 aspect-square bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-forest/10 flex items-center justify-center relative group">
              {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-rose opacity-20" />
                </div>
              ) : (
                <>
                  <img src={bagImg || ''} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]" alt="Sacola Cidoca" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-forest px-6 py-3 rounded-full font-bold shadow-xl">Ver Mockup de Luxo</button>
                  </div>
                </>
              )}
           </div>

           <div className="flex-1 space-y-8 text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-serif italic leading-tight text-white">A magia do <br/> Unboxing.</h3>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Transforme a entrega em um evento. Papel seda, cheirinho de cidreira e uma sacola que sua cliente vai querer guardar para sempre.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {["Sustentabilidade", "Artesanato", "Exclusividade", "Afeto"].map(tag => (
                   <div key={tag} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 bg-rose rounded-full"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{tag}</span>
                   </div>
                 ))}
              </div>
              <button 
                onClick={() => downloadAsset('Guia de Unboxing')}
                className="w-full lg:w-auto bg-rose text-white px-10 py-5 rounded-full font-black text-base hover:scale-105 transition-all shadow-xl shadow-rose/20"
              >
                Manual de Encantamento
              </button>
           </div>
        </section>

        {/* CTA Final */}
        <section className="text-center py-20 bg-rose/5 rounded-[4rem] px-8">
          <Logo size="lg" />
          <h2 className="text-5xl font-serif italic font-bold text-forest mt-8 mb-12">Pronta para brilhar, Cidoca?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => downloadAsset('Pack Completo')}
              className="bg-forest text-white px-12 py-6 rounded-full font-black text-lg hover:bg-rose transition-all shadow-2xl flex items-center gap-4 group"
            >
              Baixar Todo o Material <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="bg-white text-forest border-2 border-forest/10 px-12 py-6 rounded-full font-black text-lg hover:border-forest transition-all">
              Acessar Gestão de Vendas
            </button>
          </div>
        </section>

      </main>

      <footer className="py-20 text-center border-t border-rose/10 bg-white">
        <div className="opacity-20 hover:opacity-100 transition-opacity mb-8 scale-75 inline-block">
          <Logo size="md" />
        </div>
        <p className="text-[10px] uppercase tracking-[1em] font-black text-rose/40">Bazar da Cidoca · Moda Sustentável · MMXXIV</p>
      </footer>
    </div>
  );
};

export default App;
