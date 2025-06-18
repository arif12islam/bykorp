// server/index.js - UPDATED with Full Business Info
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 5001;

const corsOptions = {
  origin: [
    'http://localhost:3000', // for local development
    'https://bykorp.vercel.app/' // for your live website
  ],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// --- UPDATED SYSTEM PROMPT WITH ALL SERVICES ---
const bykorpSystemPrompt = `
You are a friendly, professional, and helpful AI assistant for bykorp. Your name is byChat.

Your purpose is to answer questions about bykorp and its full range of services. bykorp is a digital agency that specializes in:
- Digital Marketing, including Social Media Management, Content Creation, and Social Media Marketing.
- Custom Website Building.
- AI Services, including custom AI chatbots and intelligent AI automation agents.

Always be polite and encouraging. Keep your answers concise and easy to understand. Do not make up services that bykorp does not offer.
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { history, prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    if (!history || !Array.isArray(history)) {
        return res.status(400).json({ error: 'History is required and must be an array' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro-latest",
      systemInstruction: bykorpSystemPrompt,
    });
    
    const chat = model.startChat({
        history: history,
    });
    
    const result = await chat.sendMessageStream(prompt);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }

    res.end();

  } catch (error) {
    console.error('API Error:', error);
    if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to get response from AI' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});