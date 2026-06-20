// Future AI API configuration

const AI_CONFIG = {
    provider: "OpenAI",
    apiKey: "", // Add your API key later
    model: "gpt-4.1-mini"
};

async function analyzeWithAI(text) {

text = text.toLowerCase();

let score = 0;
let risk = "Safe";
let explanation = [];

const keywords = [
"bitcoin",
"crypto",
"investment",
"wallet",
"bank",
"password",
"otp",
"urgent",
"gift card",
"click here",
"verify",
"lottery",
"free money",
"double your money",
"claim now",
"limited time"
];

keywords.forEach(word => {
    if (text.includes(word)) {
        score += 10;
        explanation.push(`Found suspicious keyword: "${word}"`);
    }
});

if (score >= 70) {
    risk = "🚨 High Risk Scam";
}
else if (score >= 30) {
    risk = "⚠️ Suspicious";
}
else {
    risk = "✅ Looks Safe";
}

return {
    risk: risk,
    score: Math.min(score, 100),
    explanation: explanation.length
        ? explanation.join("<br>")
        : "No suspicious indicators were found."
};

}
