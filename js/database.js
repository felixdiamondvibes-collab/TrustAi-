import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function saveScan(result, score){

await addDoc(collection(db,"scans"),{

result:result,

score:score,

date:new Date()

});

console.log("Scan Saved");

}
