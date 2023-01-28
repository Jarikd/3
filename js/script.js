let date=new Date();  
let day=date.getDate();  
let month=date.getMonth()+1;  
let year=date.getFullYear();  

document.getElementById('time').innerHTML=day+"/"+month+"/"+year;  