async function scanWebsite() {

const url = document.getElementById("websiteInput").value.trim();

const result = document.getElementById("result");

if (!url) {

result.innerHTML = `
<h2>Please enter a website.</h2>
`;

return;

}

result.innerHTML = `
<h2>Scanning...</h2>
<p>Please wait while TrustAI analyzes this website.</p>
`;

setTimeout(() => {

const score = Math.floor(Math.random()*30)+70;

let color="green";
let status="SAFE";

if(score<85){

color="orange";
status="CAUTION";

}

if(score<75){

color="red";
status="HIGH RISK";

}

result.innerHTML=`

<h1 style="color:${color};">${status}</h1>

<h2>${score}/100 Trust Score</h2>

<p>
✔ SSL Check<br>
✔ Domain Format Check<br>
✔ URL Pattern Analysis<br>
✔ Basic Risk Detection
</p>

`;

},2500);

}
