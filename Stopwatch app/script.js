
//variables used in the startTimer() function
let mili=0
let seconds1=0;
let seconds2=0;
let min1=0;
let min2=0;
let hours=0;

//variables used in the startTimerNew() function
let mili_2;
let seconds_1;
let seconds_2;
let min_1;
let min_2;
let hours_2;

//var assigned to setInterval()
let go;
let go2;

//count the number of times the start button is clicked
let countClicks=0;

//count the number of times the split button is clicked
let countClicks2=0;

//accessing the different elements of the app
let startbtn= document.querySelector('#start-btn');
let start=document.querySelector('.start');
let maintimer= document.querySelector('#main-timer-dig');
let laptimer=document.querySelector('#lap-timer-dig');
let pausebtn=document.querySelector('#pause-btn');
let pause=document.querySelector('.pause');
let resetbtn=document.querySelector('#reset-btn');
let reset=document.querySelector('.reset');
let splitbtn=document.querySelector('#split-btn');
let split=document.querySelector('.split');
let laps=document.querySelector('.laps');
let heading=document.querySelector('.heading');

//clicking the start button starts the central timer
startbtn.addEventListener('click', startTimer);

//if start button is clicked for the first time, lap timer starts from the beggining
startbtn.addEventListener('click', ()=>{
    if(countClicks<1){
        startTimerNew(0,0,0,0,0,0);
    }
    countClicks+=1;
});

//pauses both central and lap timer
pausebtn.addEventListener('click', endTimer);

//reloads the page
resetbtn.addEventListener('click',(e)=>{
    window.location.reload();
});

//logs the lap time and central time in The LAPS display and resets the lap timer
splitbtn.addEventListener('click', (event)=>{
    countClicks2+=1;
    //button can be used 12 times
    if(countClicks2<13){
        laps.style.border='solid 1px white';
        heading.style.display="block";

        //the lap timer is stopped, the values are logged and lap timer is reset
        clearInterval(go2);
        let p= document.createElement('p');
        p.textContent= `${hours_2}:${min_2}${min_1}:${seconds_2}${seconds_1}.${mili_2} ${hours}:${min2}${min1}:${seconds2}${seconds1}.${mili}`;
        laps.appendChild(p);
        startTimerNew(0,0,0,0,0,0);
    }
});


//starts the the central Timer
function startTimer(){
    pause.style.display= "block";
    split.style.display="block";
    start.style.display="none";
    reset.style.display="none";

    /*when timers were paused both intervals for the central timer and the lap timer were
    cleared, so when start button is pressed the lap timer also picks from where it left off*/
    if(countClicks>=1){
        startTimerNew(mili_2,seconds_1,seconds_2,min_1,min_2,hours_2);
    }
    
    //interval for the central timer
    go= setInterval(function(){
        mili+=1;
        if(mili==100){
            mili=0;
            seconds1+=1;
        }
        if(seconds1==10){
            seconds1=0;
            seconds2+=1;
        }
        if(seconds2==6){
            seconds2=0;
            min1+=1;
        }
        if(min1==10){
            min1=0;
            min2+=1;
        }
        if(min2==6){
            min2=0;
            hour+=1;
        }
        maintimer.textContent= `${hours}:${min2}${min1}:${seconds2}${seconds1}.${mili}`;
    },10);
}


//stops the central and lap timer but doesn't reset them
function endTimer(){
    pause.style.display= "none";
    split.style.display="none";
    start.style.display="block";
    reset.style.display="block";

    //intervals for both timers are cleared
    clearInterval(go);
    clearInterval(go2);
}


//starts the lap timer from the beginning or from where it is was paused
function startTimerNew(temp1,temp2,temp3,temp4,temp5,temp6){
    mili_2=temp1;
    seconds_1=temp2;
    seconds_2=temp3;
    min_1=temp4;
    min_2=temp5;
    hours_2= temp6;
    go2 = setInterval(function(){
        mili_2+=1;
        if(mili_2==100){
            mili_2=0;
            seconds_1+=1;
        }
        if(seconds_1==10){
            seconds_1=0;
            seconds_2+=1;
        }
        if(seconds_2==6){
            seconds_2=0;
            min_1+=1;
        }
        if(min_1==10){
            min_1=0;
            min_2+=1;
        }
        if(min_2==6){
            min_2=0;
            hour_2+=1;
        }
        laptimer.textContent= `${hours_2}:${min_2}${min_1}:${seconds_2}${seconds_1}.${mili_2}`;    
    },10);
}