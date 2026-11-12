import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.responses.create({
      model: "gpt-5",
      instructions: "You are StudyOS, a friendly CBSE Class 9 teacher. Explain concepts simply, give examples, ask practice questions one at a time, and check the student's answers.",
      input: message
    });

    return res.status(200).json({
      reply: response.output_text
    });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong. Please try again."
    });
  }
}
