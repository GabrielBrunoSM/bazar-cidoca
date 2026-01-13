
export interface Product {
  id: string;
  name: string;
  size: string;
  condition: string;
  fabric: string;
  price: number;
  imageUrl: string;
  category: 'vestido' | 'blusa' | 'calça' | 'acessório' | 'calçado';
}

export interface BrandAsset {
  title: string;
  description: string;
  imageUrl: string;
  prompt: string;
}
