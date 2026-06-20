// Future AI API configuration

const AI_CONFIG = {
    provider: "OpenAI",
    apiKey: "", // Add your API key later
    model: "gpt-4.1-mini"
};

async function analyzeWithAI(text) {
    console.log("Sending to AI:", text);

    // Placeholder response until we connect a real backend
    return {
        risk: "Unknown",
        score: 0,
        explanation: "AI connection has not been configured yet."
    };
}
