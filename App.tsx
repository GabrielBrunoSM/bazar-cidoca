
import React, { useState } from 'react';
import Logo from './components/Logo';
import PrintBanner from './components/PrintBanner';
import { InstagramMockup, WhatsAppMockup } from './components/MockupSection';
import { Download, Sparkles, Loader2 } from 'lucide-react';
import { toPng } from 'html-to-image';

const App: React.FC = () => {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (elementId: string, fileName: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    setDownloading(elementId);
    
    try {
      // Pequeno delay para garantir que fontes externas e estilos Inline foram processados
      await new Promise(r => setTimeout(r, 1000));
      
      const dataUrl = await toPng(element, { 
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#F2EDE1',
        // Filtro para ignorar erros de folhas de estilo de terceiros (CORS)
        filter: (node) => {
            if (node.tagName === 'LINK' && node.getAttribute('rel') === 'stylesheet') {
                return false;
            }
            return true;
        },
        style: {
          borderRadius: '0',
          transform: 'scale(1)',
          margin: '0'
        }
      });
      
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Erro detalhado no download:', err);
      alert('Não foi possível gerar a imagem devido a restrições de segurança do navegador. Tente usar o Google Chrome ou Firefox.');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="scale-75 origin-left">
          <Logo variant="horizontal" size="sm" />
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
          <a href="#id" className="hover:text-[#E68DA3]">Marca</a>
          <a href="#social" className="hover:text-[#E68DA3]">Redes</a>
          <a href="#downloads" className="text-[#E68DA3]">Downloads</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <header className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E68DA3]/10 px-4 py-2 rounded-full text-[#E68DA3] mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Nova Identidade</span>
          </div>
          <h1 className="text-6xl font-serif italic text-[#1A302B] mb-6 leading-tight">
            Seu Bazar, agora como <span className="text-[#E68DA3]">Boutique Profissional.</span>
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed">
            Aqui estão os materiais prontos para o seu novo ciclo. O banner abaixo foi desenhado conforme sua referência exata.
          </p>
        </header>

        {/* Seção do Banner */}
        <section id="downloads" className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-3xl font-serif italic text-[#1A302B]">1. Banner de Fachada</h2>
            <button 
              onClick={() => handleDownload('main-banner', 'banner-cidoca')}
              disabled={downloading === 'main-banner'}
              className="flex items-center gap-3 bg-[#1A302B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#E68DA3] transition-all disabled:opacity-50 shadow-lg active:scale-95"
            >
              {downloading === 'main-banner' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Gerando Arquivo...</>
              ) : (
                <><Download className="w-5 h-5" /> Baixar Banner (PNG)</>
              )}
            </button>
          </div>
          <PrintBanner id="main-banner" />
        </section>

        {/* Seção da Logo */}
        <section className="mt-40 space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-3xl font-serif italic text-[#1A302B]">2. Logo Oficial</h2>
            <button 
              onClick={() => handleDownload('logo-box', 'logo-cidoca')}
              disabled={downloading === 'logo-box'}
              className="flex items-center gap-2 text-[#E68DA3] font-black text-xs uppercase tracking-widest hover:underline disabled:opacity-50"
            >
               {downloading === 'logo-box' ? 'Processando...' : <><Download className="w-4 h-4" /> Baixar Logo</>}
            </button>
          </div>
          <div id="logo-box" className="bg-white p-24 rounded-[3rem] border border-stone-100 flex items-center justify-center shadow-sm">
             <Logo size="xl" />
          </div>
        </section>

        {/* Redes Sociais */}
        <section id="social" className="mt-40">
          <h2 className="text-3xl font-serif italic text-[#1A302B] mb-16">3. Visual das Redes Sociais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <InstagramMockup />
            <WhatsAppMockup />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
