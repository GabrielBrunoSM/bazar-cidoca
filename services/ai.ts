
import { GoogleGenAI } from "@google/genai";

export class AIService {
  private ai: GoogleGenAI;

  constructor() {
    // Fixed: Initialize with the process.env.API_KEY directly.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateBrandVisual(prompt: string): Promise<string | null> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error) {
      console.error("Erro ao gerar imagem:", error);
      return null;
    }
  }

  async generateProductCopy(productName: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Escreva uma descrição encantadora para um item de brechó chamado "${productName}". Use um tom acolhedor, destacando a sustentabilidade e o estilo vintage.`,
      });
      // Fixed: response.text is a property, not a method.
      return response.text || "Descrição não disponível.";
    } catch (error) {
      return "Erro ao gerar descrição.";
    }
  }
}

export const aiService = new AIService();
