
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAdvice = async (spots: string[], date: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `I am visiting these spots in Tokyo on ${date}: ${spots.join(', ')}. 
      Please provide 3 very concise, professional travel tips for these specific locations. 
      Keep it brief (max 10 words per tip). Use Traditional Chinese.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini advice error:", error);
    return "祝您旅途愉快！記得檢查交通資訊。";
  }
};

export const getWeatherAlert = async (temp: number) => {
  if (temp > 8) return null;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The temperature in Tokyo is ${temp}°C. Give a very short (1 sentence) warm advice in Traditional Chinese.`,
    });
    return response.text;
  } catch (error) {
    return "天氣寒冷，請注意保暖！";
  }
};
