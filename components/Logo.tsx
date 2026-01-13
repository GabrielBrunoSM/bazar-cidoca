
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  inverse?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'vertical', inverse = false }) => {
  const scale = {
    sm: 0.5,
    md: 0.7,
    lg: 1.1,
    xl: 1.4,
  }[size];

  const forestColor = '#0A2622';
  const roseColor = '#E68DA3';
  const paleRoseColor = '#FCF1F4'; 
  const mainColor = inverse ? '#FDFBF7' : forestColor;

  const BrandIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg 
      viewBox="0 0 160 140" 
      className={className} 
      style={style}
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Fundo de Coração Orgânico */}
      <path 
        d="M80 25 C 100 10, 130 20, 130 50 C 130 80, 80 110, 80 110 C 80 110, 30 80, 30 50 C 30 20, 60 10, 80 25" 
        fill={paleRoseColor} 
        stroke="none" 
      />
      
      {/* Gancho do Cabide (Sugerindo o 'C') */}
      <path 
        d="M85 35 C 85 22, 65 22, 65 35 C 65 42, 80 48, 80 60" 
        stroke={roseColor} 
        strokeWidth="4" 
      />
      
      {/* Ombros do Cabide */}
      <path 
        d="M80 60 L 40 95 C 60 100, 100 100, 120 95 L 80 60" 
        stroke={mainColor} 
        strokeWidth="3.5" 
      />
      
      {/* Detalhe de coração central para acabamento */}
      <path 
        d="M80 84 Q 82 81, 84 84 L 80 88 L 76 84 Q 78 81, 80 84" 
        fill={roseColor} 
        stroke="none" 
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <BrandIcon className="w-28 h-24" />;
  }

  return (
    <div 
      className={`inline-flex flex-col items-center select-none ${variant === 'horizontal' ? 'flex-row gap-6' : 'gap-0'}`}
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      <BrandIcon className="w-36 h-30 mb-[-10px]" />
      
      <div className={`flex flex-col items-center ${variant === 'horizontal' ? 'items-start' : ''}`}>
        <div className="flex items-center gap-2 mb-[-16px] relative z-10">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose/70">
             Bazar da
           </span>
        </div>
        
        <h1 className="text-[72px] font-script leading-tight tracking-normal py-2" style={{ color: mainColor }}>
          Cidoca
        </h1>
        
        <div className="mt-[-12px] flex items-center gap-2">
          <div className="h-[0.5px] w-4 bg-stone-200"></div>
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-300">
            Moda Sustentável
          </span>
          <div className="h-[0.5px] w-4 bg-stone-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
