
import React from 'react';
import Logo from './components/Logo';
import PrintBanner from './components/PrintBanner';
import { InstagramMockup, WhatsAppMockup } from './components/MockupSection';
import { Download, Sparkles, Printer, ArrowRight } from 'lucide-react';

const App: React.FC = () => {

  const handleDownload = (type: string) => {
    // Simula a geração de um arquivo de imagem
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', `bazar-cidoca-${type}.png`);
    document.body.appendChild(link);
    alert(`Preparando o arquivo de alta resolução para: ${type.toUpperCase()}. O download começará em instantes.`);
    // Em um cenário real com bibliotecas como html2canvas, usaríamos a função aqui.
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">
        <div className="scale-75 origin-left">
          <Logo variant="horizontal" size="sm" />
        </div>
        <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-stone-400">
          <a href="#" className="hover:text-[#E68DA3] transition-colors">Identidade</a>
          <a href="#" className="hover:text-[#E68DA3] transition-colors">Redes Sociais</a>
          <a href="#" className="hover:text-[#E68DA3] transition-colors">Downloads</a>
        </div>
      </nav>

      <header className="max-w-7xl mx-auto px-6 pb-20">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E68DA3]/10 px-4 py-2 rounded-full text-[#E68DA3] mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Brand Kit Completo</span>
          </div>
          <h1 className="text-6xl font-serif italic text-[#1A302B] mb-6">Sua marca, agora com a <span className="text-[#E68DA3]">alma que ela merece.</span></h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed">
            Desenvolvemos uma identidade visual que une o rústico do bazar com a sofisticação de uma boutique. Baixe seus materiais abaixo.
          </p>
        </div>

        {/* Banner Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif italic">1. Banner de Fachada / Impressão</h2>
            <button 
              onClick={() => handleDownload('banner')}
              className="flex items-center gap-2 bg-[#1A302B] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#E68DA3] transition-all"
            >
              <Download className="w-4 h-4" /> Baixar em Alta Resolução
            </button>
          </div>
          <PrintBanner id="main-banner" />
        </div>

        {/* Logo Section */}
        <div className="mt-32 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif italic">2. Logo Oficial</h2>
            <button 
              onClick={() => handleDownload('logo')}
              className="flex items-center gap-2 text-[#E68DA3] font-black text-xs uppercase tracking-widest hover:underline"
            >
              <Download className="w-4 h-4" /> Baixar SVG/PNG
            </button>
          </div>
          <div className="bg-white p-20 rounded-3xl border border-stone-100 flex items-center justify-center shadow-sm">
             <Logo size="xl" />
          </div>
        </div>

        {/* Social Section */}
        <div className="mt-32 space-y-16">
          <div>
            <h2 className="text-2xl font-serif italic mb-2">3. Redes Sociais</h2>
            <p className="text-stone-400 text-sm">Visualize como sua marca aparece para as clientes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <InstagramMockup />
            <WhatsAppMockup />
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-40 bg-[#1A302B] rounded-[3rem] p-20 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#E68DA3]/10 rounded-full blur-3xl"></div>
           <h3 className="text-5xl font-serif italic mb-8">Tudo pronto para o sucesso.</h3>
           <p className="text-white/60 mb-12 max-w-xl mx-auto">Sua identidade está completa. Agora é só aplicar nas redes sociais e ver sua boutique de bairro brilhar.</p>
           <button 
             onClick={() => handleDownload('kit-completo')}
             className="bg-[#E68DA3] text-white px-12 py-6 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl"
           >
             Baixar Kit de Marca Completo (.zip)
           </button>
        </div>
      </header>
    </div>
  );
};

export default App;
