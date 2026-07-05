const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";
button.style.transition=".3s";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

setInterval(()=>{

const bars=document.querySelectorAll(".bar div");

bars.forEach(bar=>{

let random=Math.floor(Math.random()*80)+20;

bar.style.width=random+"%";

});

},3000);
