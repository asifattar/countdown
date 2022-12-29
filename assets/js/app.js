var cl = console.log;

let countdownDate=document.getElementById(`countdown`);


function countdown(){
    
let futureDate = new Date(2023,08,17);

let currantDate = new Date();
cl(currantDate);


let diff = futureDate.getTime()-currantDate.getTime();
cl(diff);

let days = Math.floor(diff / (1000*60*60*24));
cl(days);

let hr = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
cl(hr);

let min = Math.floor( diff % (1000*60*60) / (1000*60));
cl(min);

let sec = Math.floor( diff % (1000*60) / (1000));
cl(sec)

let result = `<div class="counter">
                <p>days</p>
                <p>${setzero(days)}</p>
            </div>
            <div class="counter">
                <p>hours</p>
                <p>${setzero(hr)}</p>
            </div><div class="counter">
                <p>min</p>
                <p>${setzero(min)}</p>
            </div>
            <div class="counter">
                <p>sec</p>
                <p>${setzero(sec)}</p>
            </div>`
countdownDate.innerHTML=result;
}
countdown();

function setzero(num){
    return (num<10) ? " 0 "+ num : num
}

setInterval(countdown, 1000);
