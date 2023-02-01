let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor( interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.innerHTML = startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration ); 
});

window.addEventListener('scroll', reveal);

 function reveal(){
   var reveals = document.querySelectorAll('.reveal');
 
   for(var i = 0; i < reveals.length; i++){
   
     var windowheight = window.innerHeight;
     var revealtop = reveals[i].getBoundingClientRect().top;
     var revealpoint = 150;
   
     if(revealtop < windowheight - revealpoint){
       reveals[i].classList.add('active');
     }
     else{
       reveals[i].classList.remove('active');
     }
   }
 }


 window.addEventListener('load' , login);
  effect = document.getElementById('main');
  function login(){
   
   effect.classList.add('blur');
  }
   elementfor = document.getElementById('sub');
   elementfor.onclick=function(){check()};
   function check(){
     em2 = document.getElementById('email').value;
      localStorage.setItem("myValue",em2);
      
    console.log(em2);
 
  ps2 = document.getElementById('pass').value;
    if(ps2 =="dav123"){
      effect.classList.remove('blur');
      document.getElementById('login').style.display="none";
    }
  else{
    ele55= document.getElementById('com').style.display="block";
     
     
     }
   }




