var time = 486 - int(document.getElementById('timeInput').innerHTML);

time.addEventListener('change',(e)=>{
   document.getElementById('timeOutput').innerText = time;
});

