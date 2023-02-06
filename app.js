var test=0;
var array=[];
async function chartdata(){
    const fechdata=await fetch('./data.json');
     data=await fechdata.json();
     for(let i=0;i<6;i++)
     {
        array.push(data[i]);
     }
    }
    chartdata()

const daily=document.getElementById('Daily');
const weekly=document.getElementById('Weekly');
const monthly=document.getElementById('Monthly');
const worktime=document.getElementById('worktime');
const worklastperiod=document.getElementById('worklastperiod');
const playtime=document.getElementById('playtime');
const playlastperiod=document.getElementById('playlastperiod');
const studytime=document.getElementById('studytime');
const studylastperiod=document.getElementById('studylastperiod');
const exercisetime=document.getElementById('exercisetime');
const exerciselastperiod=document.getElementById('exerciselastperiod');
const socialtime=document.getElementById('socialtime');
const sociallastperiod=document.getElementById('sociallastperiod');
const selfcaretime=document.getElementById('selfcaretime');
const selfcarelastperiod=document.getElementById('selfcarelastperiod');
if(test==0)
    weekly.style.color="white";
daily.onclick=function(){
    weekly.style.color="hsl(235, 45%, 61%)";
    monthly.style.color="hsl(235, 45%, 61%)"; 
    worktime.innerHTML=array[0].timeframes.daily.current+"hrs"
    playtime.innerHTML=array[1].timeframes.daily.current+"hrs"
    studytime.innerHTML=array[2].timeframes.daily.current+"hrs"
    exercisetime.innerHTML=array[3].timeframes.daily.current+"hrs"
    socialtime.innerHTML=array[4].timeframes.daily.current+"hrs"
    selfcaretime.innerHTML=array[5].timeframes.daily.current+"hrs"
    worklastperiod.innerHTML="Yesterday-"+array[0].timeframes.daily.previous+"hrs"
    playlastperiod.innerHTML="Yesterday-"+array[1].timeframes.daily.previous+"hrs"
    studylastperiod.innerHTML="Yesterday-"+array[2].timeframes.daily.previous+"hrs"
    exerciselastperiod.innerHTML="Yesterday-"+array[3].timeframes.daily.previous+"hrs"
    sociallastperiod.innerHTML="Yesterday-"+array[4].timeframes.daily.previous+"hrs"
    selfcarelastperiod.innerHTML="Yesterday-"+array[5].timeframes.daily.previous+"hrs"
    test=1;
}
weekly.onclick=function(){
    weekly.style.color="white";  
    daily.style.color="hsl(235, 45%, 61%)"; 
    monthly.style.color="hsl(235, 45%, 61%)"; 
    worktime.innerHTML=array[0].timeframes.weekly.current+"hrs"
    playtime.innerHTML=array[1].timeframes.weekly.current+"hrs"
    studytime.innerHTML=array[2].timeframes.weekly.current+"hrs"
    exercisetime.innerHTML=array[3].timeframes.weekly.current+"hrs"
    socialtime.innerHTML=array[4].timeframes.weekly.current+"hrs"
    selfcaretime.innerHTML=array[5].timeframes.weekly.current+"hrs"
    worklastperiod.innerHTML="Last Week-"+array[0].timeframes.weekly.previous+"hrs"
    playlastperiod.innerHTML="Last Week-"+array[1].timeframes.weekly.previous+"hrs"
    studylastperiod.innerHTML="Last Week-"+array[2].timeframes.weekly.previous+"hrs"
    exerciselastperiod.innerHTML="Last Week-"+array[3].timeframes.weekly.previous+"hrs"
    sociallastperiod.innerHTML="Last Week-"+array[4].timeframes.weekly.previous+"hrs"
    selfcarelastperiod.innerHTML="Last Week-"+array[5].timeframes.weekly.previous+"hrs"
    test=0;
}
monthly.onclick=function(){
    monthly.style.color="white"; 
    weekly.style.color="hsl(235, 45%, 61%)";   
    daily.style.color="hsl(235, 45%, 61%)"; 
    worktime.innerHTML=array[0].timeframes.monthly.current+"hrs"
    playtime.innerHTML=array[1].timeframes.monthly.current+"hrs"
    studytime.innerHTML=array[2].timeframes.monthly.current+"hrs"
    exercisetime.innerHTML=array[3].timeframes.monthly.current+"hrs"
    socialtime.innerHTML=array[4].timeframes.monthly.current+"hrs"
    selfcaretime.innerHTML=array[5].timeframes.monthly.current+"hrs"
    worklastperiod.innerHTML="Last Month-"+array[0].timeframes.monthly.previous+"hrs"
    playlastperiod.innerHTML="Last Month-"+array[1].timeframes.monthly.previous+"hrs"
    studylastperiod.innerHTML="Last Month-"+array[2].timeframes.monthly.previous+"hrs"
    exerciselastperiod.innerHTML="Last Month-"+array[3].timeframes.monthly.previous+"hrs"
    sociallastperiod.innerHTML="Last Month-"+array[4].timeframes.monthly.previous+"hrs"
    selfcarelastperiod.innerHTML="Last Month-"+array[5].timeframes.monthly.previous+"hrs"
    test=2;
}
daily.onmouseover=function(){

    daily.style.color="white";
}
daily.onmouseout=function(){
    daily.style.color="hsl(235, 45%, 61%)";
    if(test==1)
    daily.style.color="white";
    if(test==2)
    monthly.style.color="white";
    if(test==0)
    weekly.style.color="white";
}
weekly.onmouseover=function(){

    weekly.style.color="white";
}
weekly.onmouseout=function(){
    weekly.style.color="hsl(235, 45%, 61%)";
    if(test==1)
    daily.style.color="white";
    if(test==2)
    monthly.style.color="white";
    if(test==0)
    weekly.style.color="white";
}
monthly.onmouseover=function(){

    monthly.style.color="white";
}
monthly.onmouseout=function(){
    monthly.style.color="hsl(235, 45%, 61%)";
    if(test==1)
    daily.style.color="white";
    if(test==2)
    monthly.style.color="white";
    if(test==0)
    weekly.style.color="white";
}

