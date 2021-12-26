let btn_yes;
let btn_no;
let cursorItem;
let circle;
let x=0, y = 0;
let mouseX=0, mouseY = 0;

window.onload = function(){
    btn_yes = document.querySelector("#yes");
    btn_no = document.querySelector("#no");

    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");    

    //네 버튼 이벤트
    btn_yes.addEventListener("mouseover", function(e){
        circle.style.transform = "scale(.3)";
    })
    btn_yes.addEventListener("mouseout", function(e){
        circle.style.transform = "scale(1)";
    })

    //아니오 버튼 이벤트
    btn_no.addEventListener("mouseover", function(e){
        circle.style.transform = "scale(.3)";
    })
    btn_no.addEventListener("mouseout", function(e){
        circle.style.transform = "scale(1)";
    })

    window.addEventListener("mousemove", function(e){
        x = e.clientX;
        y = e.clientY;
        //cursorItem.style.transform = "translate("+ x +"px, "+ y + "px )";
    });
    
    loop();
}

function loop(){
    mouseX += (x - mouseX ) * .09;
    mouseY += (y - mouseY ) * .09; 
    cursorItem.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    requestAnimationFrame(loop);
}