window.addEventListener('DOMContentLoaded', function(){
  
  var slideIndex = 0;
  var wrapper = document.querySelector(".wrapper");

  carousel();

  function carousel() {
    //needed for index
    var slide = document.getElementsByClassName("mySlides");
    //variables
    var logo = document.querySelector(".logo");
    var btn = document.querySelector(".btn");
    var txt1 = document.querySelector("#txt1");
    var txt2 = document.querySelector("#txt2");
    var txtBg = document.querySelector(".txtBg");
    var womanBg = document.querySelector(".womanBg");
    var womanLast = document.querySelector(".womanBg2");

    for (var i = 0; i < slide.length; i++) {
      slide[i].classList.remove("slideImg");
      slide[i].style.display = "none";
    }

    slideIndex = slideIndex + 1;
    var myTimeout = setTimeout(carousel, 4000);

    if (slideIndex > slide.length) {
      //beendet beim 3 Durchlauf
      slideIndex = 3
      clearTimeout(myTimeout)
    }

    if( slide[slideIndex-1].classList.contains("first") ){
      //startet animation durch die klasse
      womanBg.classList.add("womanAnim");
      txtBg.classList.add("txtBgAnim");
      txt1.classList.add("txtAnim");
      logo.classList.add("logoAnimation");
    }
    if( slide[slideIndex-1].classList.contains("second") ){
      txt2.classList.add("txtAnim");
    }
    if(slide[slideIndex-1].classList.contains("third")){
      
      womanLast.classList.add("womanAnim2");
      if(logo.classList.contains("logoAnimation")){
         logo.classList.remove("logoAnimation");
         logo.classList.add("logoAnimation2");
      }
      
      btn.classList.add("btnAnimation");
    }
    else{
      slide[slideIndex-1].style.display = "block";
    }

    slide[slideIndex-1].style.display = "block";

  }  
  
});
  
