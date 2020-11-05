
//document.querySelector("#but").style.background = "red";
//
//
//var isBlue = false;
//function togg(){
//    if(isBlue){
//        document.body.style.background = "white";
//    }else{
//        document.body.style.background = "blue"
//    }
//    isBlue = !isBlue
//}




//function togg(){
//    document.body.classList.toggle("bg-color");
//}


$("#but").click(function(){
    $("body").toggleClass("bg-color");
})

//$("#but").click(function(){
//    $(this).toggleClass("bg-color");
//})