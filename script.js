function scanWebsite(){

const url=document.getElementById("websiteInput").value;

const result=document.getElementById("result");

if(url===""){

result.innerHTML="<h2>Please enter a website.</h2>";

return;

}

result.innerHTML=`
<h2>Scanning...</h2>
<p>Analyzing ${url}</p>
`;

setTimeout(()=>{

const score=Math.floor(Math.random()*41)+60;

let status="Safe";

if(score<75){

status="Suspicious";

}

result.innerHTML=`
<h2>Trust Score: ${score}/100</h2>

<h3>Status: ${status}</h3>

<p>This is currently a demonstration scanner.</p>

`;

},2000);

}
function signup(){

const user={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value
};

localStorage.setItem("trustUser",JSON.stringify(user));

alert("Account created successfully!");

window.location="login.html";

}

function login(){

const saved=JSON.parse(localStorage.getItem("trustUser"));

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;

if(saved && email===saved.email && password===saved.password){

localStorage.setItem("loggedIn","true");

window.location="dashboard.html";

}else{

alert("Incorrect email or password.");

}

}

function logout(){

localStorage.removeItem("loggedIn");

window.location="login.html";

}

if(document.getElementById("welcome")){

const user=JSON.parse(localStorage.getItem("trustUser"));

if(user){

document.getElementById("welcome").innerHTML="Hello, "+user.name+" 👋";

}

}
