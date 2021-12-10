
var imgs=Array.from(document.querySelectorAll(".img-fluid")); 
var lightboxContainer=document.getElementById("lightboxContainer");
var lightboxItem=document.getElementById("lightboxItem");

var closeIcon=document.getElementById("close");


var nextIcon=document.getElementById("next");
var prevIcon=document.getElementById("prev");
var currentIndex=0;

for(var i=0;i<imgs.length;i++){
   imgs[i].addEventListener("click",function(e){
      lightboxContainer.style.display="flex";
      currentIndex=imgs.indexOf(e.target);
      var imgSrc=e.target.src;
      lightboxItem.style.backgroundImage=`url(${imgSrc})`
   })
}

closeIcon.addEventListener("click",closeSlider)
function closeSlider(){
   lightboxContainer.style.display="none"
}

nextIcon.addEventListener("click",getNextSlide)

function getNextSlide(){
   currentIndex++;  
   if(currentIndex==imgs.length) 
   {
        currentIndex=0;
   }
   var imgSrc=imgs[currentIndex].src;
   lightboxItem.style.backgroundImage=`url(${imgSrc})`
}

prevIcon.addEventListener("click",getPrevSlide)
function getPrevSlide(){
   currentIndex--;
   if(currentIndex<0){
      currentIndex=imgs.length-1
   }
   var imgSrc=imgs[currentIndex].src;
   lightboxItem.style.backgroundImage=`url(${imgSrc})`
}

document.addEventListener("keydown",function(e){
    if(e.key=="Escape") 
    {
       closeSlider()
    }
    else if(e.key=="ArrowRight")
    {
         getNextSlide()
    }
    else if(e.key=="ArrowLeft")
    {
         getPrevSlide()
    }
})
