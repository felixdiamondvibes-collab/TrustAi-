import { db, collection, addDoc } from "./firebase.js";

const scanBtn = document.getElementById("scanBtn");
const scanInput = document.getElementById("scanInput");
const result = document.getElementById("result");

scanBtn.addEventListener("click", async () => {

    const text = scanInput.value.trim();

    if (!text) {
        alert("Please paste some text, email or URL.");
        return;
    }

    let verdict = "Safe";
    let score = 95;
    let reason = "No suspicious keywords detected.";

    const suspiciousWords = [
        "free",
        "winner",
        "win",
        "gift",
        "bonus",
        "verify",
        "password",
        "bank",
        "crypto",
        "wallet",
        "bitcoin",
        "investment",
        "urgent",
        "click",
        "claim",
        "limited",
        "login"
    ];

    for (const word of suspiciousWords) {
        if (text.toLowerCase().includes(word)) {
            verdict = "Suspicious";
            score = 35;
            reason = `Detected suspicious keyword: "${word}"`;
            break;
        }
    }

    result.innerHTML = `
        <h3>${verdict}</h3>
        <p><strong>Trust Score:</strong> ${score}%</p>
        <p>${reason}</p>
    `;

    try {
        await addDoc(collection(db, "reports"), {
            text: text,
            verdict: verdict,
            score: score,
            reason: reason,
            createdAt: new Date().toISOString()
        });

        console.log("Report saved.");
    } catch (error) {
        console.error("Firestore Error:", error);
    }

});
