
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
      // Espera um pouco para garantir que as fontes do Google carregaram
      await new Promise(r => setTimeout(r, 1500));
      
      const dataUrl = await toPng(element, { 
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#F2EDE1',
        // O filtro abaixo evita o erro de "Cannot access rules" ao ignorar links de CSS externos problemáticos
        filter: (node: any) => {
            if (node.tagName === 'LINK' && node.rel === 'stylesheet' && !node.href.includes('fonts.googleapis.com')) {
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
      console.error('Erro ao gerar imagem:', err);
      alert('Houve um problema ao gerar a imagem. Tente usar o Google Chrome ou tirar um print da tela, pois alguns navegadores bloqueiam essa função por segurança.');
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
          <a href="#" className="hover:text-[#E68DA3]">Marca</a>
          <a href="#" className="hover:text-[#E68DA3]">Redes</a>
          <a href="#downloads" className="text-[#E68DA3]">Downloads</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <header className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E68DA3]/10 px-4 py-2 rounded-full text-[#E68DA3] mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Identidade Visual</span>
          </div>
          <h1 className="text-6xl font-serif italic text-[#1A302B] mb-6 leading-tight">
            Sua marca, agora com <span className="text-[#E68DA3]">alma e profissionalismo.</span>
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed">
            Abaixo você encontra o banner oficial do Bazar da Cidoca, desenhado conforme sua referência.
          </p>
        </header>

        {/* Seção do Banner */}
        <section id="downloads" className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-3xl font-serif italic text-[#1A302B]">Banner de Fachada</h2>
            <button 
              onClick={() => handleDownload('main-banner', 'banner-cidoca')}
              disabled={downloading === 'main-banner'}
              className="flex items-center gap-3 bg-[#1A302B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#E68DA3] transition-all disabled:opacity-50 shadow-lg"
            >
              {downloading === 'main-banner' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Gerando...</>
              ) : (
                <><Download className="w-5 h-5" /> Baixar Banner (PNG)</>
              )}
            </button>
          </div>
          <PrintBanner id="main-banner" />
        </section>

        {/* Logos e Redes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32">
          <InstagramMockup />
          <WhatsAppMockup />
        </div>
      </main>
    </div>
  );
};

export default App;
