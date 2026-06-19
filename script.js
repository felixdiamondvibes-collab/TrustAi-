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
