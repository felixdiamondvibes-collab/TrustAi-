function scanText(){

const input=document.getElementById("scanInput").value.toLowerCase();

const result=document.getElementById("result");

if(input===""){
result.innerHTML="Please enter text or a website.";
result.style.background="#ffe8e8";
return;
}

const scamWords=[
"bitcoin",
"crypto",
"investment",
"double your money",
"urgent",
"click here",
"bank",
"password",
"gift card",
"verify account",
"lottery",
"airdrop",
"wallet"
];

let risk=0;

scamWords.forEach(word=>{
if(input.includes(word)){
risk++;
}
});

if(risk>=3){
result.innerHTML="🚨 HIGH RISK SCAM DETECTED";
result.style.background="#ffb3b3";
}
else if(risk>=1){
result.innerHTML="⚠️ Suspicious Content";
result.style.background="#ffe08a";
}
else{
result.innerHTML="✅ Looks Safe";
result.style.background="#b7f5b7";
}

}
