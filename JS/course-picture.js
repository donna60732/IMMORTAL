document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded

    const small_image_1=document.querySelector("#small_image_1");
    const small_image_2=document.querySelector("#small_image_2");
    const small_image_3=document.querySelector("#small_image_3");
    const small_image_4=document.querySelector("#small_image_4");

    const big_image_1=document.querySelector("#big_image_1");
    const big_image_2=document.querySelector("#big_image_2");
    const big_image_3=document.querySelector("#big_image_3");
    const big_image_4=document.querySelector("#big_image_4");

    small_image_1.style.border="2px solid  #fff";//#A3383C
    big_image_1.style.display="block";
    big_image_2.style.display="none";
    big_image_3.style.display="none";
    big_image_4.style.display="none";

    small_image_1.addEventListener('click',function(e){
        big_image_1.style.display="block";
        big_image_2.style.display="none";
        big_image_3.style.display="none";
        big_image_4.style.display="none";
    },false)

    small_image_2.addEventListener('click',function(){
        big_image_1.style.display="none";
        big_image_2.style.display="block";
        big_image_3.style.display="none";
        big_image_4.style.display="none";
    })
    small_image_3.addEventListener('click',function(){
        big_image_1.style.display="none";
        big_image_2.style.display="none";
        big_image_3.style.display="block";
        big_image_4.style.display="none";
    })
    small_image_4.addEventListener('click',function(){
        big_image_1.style.display="none";
        big_image_2.style.display="none";
        big_image_3.style.display="none";
        big_image_4.style.display="block";
    })  
});