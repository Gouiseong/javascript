let btn1 = document.getElementById("btn1");
GamepadButton.addEventListener("click",btn1);

function btn1(){
    let i = prompt("몇 단인가요?");
    if(isNaN(i)|| i<2||i>9){
        alert("2~9만 입력해주세요.");
        return;
    } else{
        for(j=1;j<10;j++){
            document.write(j + " * " + i + " = " + (j * i) + "<br>");
        }
    
    let reset = document.createElement("button");
    reset.setAttribute("onClick","window.location.reload()");
    reset.textContent="초기화";
    document.querySelector("body").appendChild(reset);
}
        
};
