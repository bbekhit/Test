var lis = document.querySelectorAll("li");
 

function mouseOver(x){
    x.style.color = "red"
    }
    


function mouseOut(x){
   x.style.color = "black"
}


this for h1
function clk(x){
    x.style.fontSize = "150px";
}

regular method
function clk(){
    document.querySelector("h1").style.color = "red"
}


//this metho
function clk(x){
    x.classList.add("done");
}


cant use it
function mouseOver(){
    for(var i =0; i < lis.length; i++){
        lis[i].style.color = "red"
    }
}






















