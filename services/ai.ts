
import { GoogleGenAI } from "@google/genai";

export class AIService {
  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateBrandVisual(prompt: string): Promise<string | null> {
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
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
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Escreva uma descrição encantadora para um item de brechó chamado "${productName}". Use um tom acolhedor, destacando a sustentabilidade e o estilo vintage.`,
      });
      return response.text || "Descrição não disponível.";
    } catch (error) {
      console.error("Erro ao gerar cópia:", error);
      return "Erro ao gerar descrição.";
    }
  }
}

export const aiService = new AIService();
