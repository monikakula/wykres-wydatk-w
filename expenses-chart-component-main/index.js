const tab=[17.45,34.91,52.36,31.07,43.28,25.48,43.28];
const btnDay=document.querySelectorAll('.day');
const daysw=document.querySelector('.days');
const dayEl=document.querySelectorAll('.day');
const currentDay=new Date().getDay();
const days=document.querySelectorAll('.days');

const btnPrice=document.querySelectorAll('.price');
const priceEl=document.querySelector('.price');
const chartContainer = document.querySelector('.chart-container');

console.log(btnDay);
for(let i=0; i<btnDay.length;i++){
    btnDay[i].addEventListener('mouseover',function(){
        btnPrice[i].innerHTML = tab[i];
        btnPrice[i].classList.toggle('hidden');
        if(currentDay==0)
        dayEl[currentDay+5].classList.add('current-day');
    else if(currentDay>0 && currentDay<=6)
    dayEl[currentDay-1].classList.add('current-day');
    });
}
chartContainer.addEventListener('mouseover',function(){
btnPrice[i].classList.toggle('hidden');
});
console.log(currentDay);
