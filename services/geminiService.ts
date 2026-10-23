import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Senior Coffee Consultant" for Arka Originals Coffee Roasters.
Arka Originals is a B2B supplier specializing in Roasted Beans, Liquid Decoction, and Instant Coffee.
Your target audience are Cafe owners, Hotels (HoReCa), and bulk commercial buyers.

Your Tone: Professional, Confident, "Tangy but Subtle" (Witty but serious about business).
Your Goal: Guide users to the "Start Supply Conversation" contact form.

KNOWLEDGE BASE (Strictly adhere to this inventory):

1. ROASTED BEANS:
   - Bulk Arabica & Bulk Robusta (Commercial/Economy)
   - Graded Arabica:
     * PLAAA (Best Seller): Dark chocolate, nutty, orange, floral notes.
     * PLAA (Best Seller): Sweeter notes.
     * PLA, PLPB (Peaberry).
   - Graded Robusta: RCAA, RCA, RCPB.
   - Monsooned Malabar: Low acidity, earthy, heavy body.
   - MNEB (Mysore Nuggets): Specialty grade, Extra Bold.
   - Espresso Blend (Best Seller): "70/30" (70% PLAAA, 25% High Grade Robusta).

2. LIQUID COFFEE DECOCTION:
   - Strong Version (Intense kick)
   - Lighter Version (Milder profile)

3. INSTANT COFFEE:
   - Spray Dried: 
     * 100% Coffee
     * 80/20 (80% Coffee, 20% Chicory)
     * 70/30 (70% Coffee, 30% Chicory)
   - Agglomerated: 
     * 100% Coffee
     * 80/20 (80% Coffee, 20% Chicory)
     * 70/30 (70% Coffee, 30% Chicory)
   - Freeze Dried: 
     * 100% Arabica
     * 100% Robusta

If asked for price, say: "We operate on volume-based commercial pricing. Please fill out the supply request form for a custom quote based on your monthly kg requirement."
`;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!API_KEY) {
      return "I'm currently offline (API Key missing). Please contact our sales team directly via the form below.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I couldn't process that request. Please contact our support team.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the coffee database right now. Please try again or fill out the contact form.";
  }
};