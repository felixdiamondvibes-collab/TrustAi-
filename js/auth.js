import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const auth = getAuth();

async function signup() {

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

try{

await createUserWithEmailAndPassword(auth,email,password);

alert("Account created successfully!");

window.location="dashboard.html";

}catch(error){

alert(error.message);

}

}

async function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Login successful!");

window.location="dashboard.html";

}catch(error){

alert(error.message);

}

}
