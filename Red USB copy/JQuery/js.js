
//3333333333333333333333333333333333//using multistyle with jQuery333333333333333333333333333333333333333333
//var styles = {
//    background: "red",
//    color: "white",
//    border: "1px dashed green"
//};
//
//$("h1").css(styles);--------------------$("h1").addClass("winner");

//$("h1").css("color","blue");



//3333333333333333333333333333333333333333333333333333multi styles regular#########################################
//document.querySelector("h1").classList.add("winner");    $("h1").addClass("winner");

//document.querySelector("h1").style.color = "red";




//3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
//regular method
//function mouseOver(x){
//    x.style.color = "red";
//}


//####################################with Jquery  #######################################################
//to change all li at a time
//$("li").mouseover(function(){                            
//    $("li").css("color","red");
//})

//to change on by one
//$("li").mouseover(function(){
//    $(this).css("color","red");
//})  

//$("li").mouseout(function(){
//    $(this).css("color","black");
//})


//#########################################Selector training#################################################3
//$("div").css("backgroundColor","purple");
//$(".highlight").css("width","200px");
//$("#third").css("border","2px solid orange");
//$("div:first-of-type").css("color","pink");


//##############################################important Example##############################################
//$(document).ready(function(){
//    $(".navbar-toggler").html('<i class="fa fa-chevron-down"></i>");
//})

//###############################################jquery methods################################################
//.text() ------------     textContent   .text("hello")

//.html() as example above

//.ready() as example above

//.attr()------ setAttribute("src","https://www.google.com")
//$("input").attr("type","color");
//$("img").attr("src","https://www.")
//$("img:first-of-type").attr("src","https://")
//$("img").last().attr().....first()
//
//$("input").val()  **i can know the value of an input with this method(which option user chose in dropdown)


//$('input[type="text"]').keypress()
 

//$("input").keypress(function(event){
//    if(event.which === 13){
//        $("h1:first-of-type").css("background","red")
//    }
//})

//$("input").on("keypress",function(event){
//    if(event.which === 13){
//        $("h1:first-of-type").css("background","red")
//    }
//})

//use of event in todo
//$("span").click(function(event){
//    $(this).parent().remove();
//    event.stopPropagation();
//})
//
//

//$("h1").click(function(){
//    $(this).css("fontWeight","700")
//})

//document.querySelector("h1").style.fontWeight = "700";


//$(".btnn").click(function(){
//    $(".fad").fadeOut(6000,function(){
//        $(".btnn").css("backgroundColor","blue");
//    });
//})
//

$(".btnn").click(function(){
    $(".fad").fadeToggle(5000)
})









