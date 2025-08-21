const zeroFill = n => {
    return ('0' + n).slice(-2);
};
let interValid;
let twelve=document.querySelector(".twelve");
let twenty=document.querySelector(".twenty");
let text=document.querySelector("p");
twelve.addEventListener("click",function(){
    clearInterval(interValid);
    interValid=setInterval(function(){
        let date=new Date();
        let hours=date.getHours() % 12 || 12; 
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM'
        text.textContent=zeroFill(hours)+":"+zeroFill(date.getMinutes())+":"+zeroFill(date.getSeconds())+" "+ampm;
    },1000);
});

twenty.addEventListener("click",function(){
    clearInterval(interValid);
    interValid=setInterval(function(){
        let date=new Date();
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM'
        text.textContent=zeroFill(date.getHours())+":"+zeroFill(date.getMinutes())+":"+zeroFill(date.getSeconds())+" "+ampm;

    },1000);
});

let toggle=document.querySelector(".togg");
let flag=0;
toggle.addEventListener("click",function(){
    if(flag==0){
        toggle.style.backgroundColor="yellow";
        document.body.style.backgroundColor="white";
        text.style.color="black";
        flag=1;
    }
    else{
        document.body.style.backgroundColor="black";
        toggle.style.backgroundColor="red";
        text.style.color="aquamarine";
        flag=0;

    }
});