
import { db, collection, addDoc } from "./firebase.js";

const scanBtn = document.getElementById("scanBtn");
const urlInput = document.getElementById("urlInput");
const result = document.getElementById("result");

scanBtn.addEventListener("click", async () => {

    const url = urlInput.value.trim();

    if (url === "") {
        alert("Please enter a website URL.");
        return;
    }

    // Temporary fake AI logic
    let verdict = "Safe";
    let score = 95;

    const suspiciousWords = [
        "free",
        "win",
        "gift",
        "bonus",
        "login",
        "verify",
        "bank",
        "crypto",
        "wallet"
    ];

    for (let word of suspiciousWords) {
        if (url.toLowerCase().includes(word)) {
            verdict = "Suspicious";
            score = 35;
        }
    }

    result.innerHTML = `
        <h3>${verdict}</h3>
        <p>Trust Score: ${score}%</p>
    `;

    try {
        await addDoc(collection(db, "reports"), {
            url,
            verdict,
            score,
            createdAt: new Date().toISOString()
        });

        console.log("Saved to Firestore!");
    } catch (err) {
        console.error(err);
    }
});
