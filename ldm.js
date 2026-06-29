const btn = document.querySelector(".btn-light");
const body = document.querySelector("body")
let trueOrFalse = true;
btn.addEventListener('click',function(){    
    if(trueOrFalse){
        btn.classList.toggle('btn-light');
        btn.classList.toggle('btn-dark');
        btn.textContent = "Light mode";
        body.style.backgroundColor = "black"; 
        trueOrFalse = false;
    }else{
        btn.classList.toggle('btn-light');
        btn.classList.toggle('btn-dark');
        btn.textContent = "Dark mode";
        body.style.backgroundColor = "white"; 
        trueOrFalse = true;
        
    }
})