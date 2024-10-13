var item=document.querySelector(".item");
var item_1=document.querySelector(".item_1");
var item_2=document.querySelector(".item_2");
 var iconarrowlight=document.querySelector(".icon-arrow-light");
 var iconarrowlight_1=document.querySelector(".icon-arrow-light_1");
 var iconarrowlight_2=document.querySelector(".icon-arrow-light_2");
 var side_items=document.querySelector(".side_items");
 var side_items_1=document.querySelector(".side_items_1");
 var side_items_2=document.querySelector(".side_items_2");

 item.addEventListener("click",()=>{
    side_items.classList.toggle("active");
    iconarrowlight.classList.toggle("active");
})
item_1.addEventListener("click",()=>{
    side_items_1.classList.toggle("active");
    iconarrowlight_1.classList.toggle("active");
})
item_2.addEventListener("click",()=>{
    side_items_2.classList.toggle("active");
    iconarrowlight_2.classList.toggle("active");
})
// //////
var iconarrowdark=document.querySelector(".icon-arrow-dark");
var iconarrowdark_1=document.querySelector(".icon-arrow-dark_1");
var iconarrowdark_2=document.querySelector(".icon-arrow-dark_2");
var navbar=document.querySelector(".navbar");
var hamburger=document.querySelector(".hamburger");
var iconclose=document.querySelector(".icon-close");
item.addEventListener("click",()=>{
    iconarrowdark.classList.toggle("active");
})
item_1.addEventListener("click",()=>{
    iconarrowdark_1.classList.toggle("active");
})
item_2.addEventListener("click",()=>{
    iconarrowdark_2.classList.toggle("active");
})
hamburger.addEventListener("click",()=>{
   hamburger.setAttribute("style","display:none");
   iconclose.setAttribute("style","display:block")
    navbar.classList.add("active")

})
iconclose.addEventListener("click",()=>{
    hamburger.setAttribute("style","display:block");
   iconclose.setAttribute("style","display:none")
    navbar.classList.remove("active")
})

