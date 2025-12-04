
x=document.getElementById("x")
y=document.getElementById("y")
op=document.getElementById("op")
res=document.getElementById("res")
function calculer(){
    init();
    document.querySelectorAll(".error").textContent=""
    test=true
    if(x.value==""){
        x.parentElement.querySelecter(".error").textContent="veuillez indiquer la valeur de x"
        test="false"
    }
    if(y.value==""){
        y.parentElement.querySelecter(".error").textContent="veuillez indiquer la valeur de y"
        test="false"
    }
    if(op.value=="/" && y.value==0){
        res.innerText="division par 0"
        test="false"
    }
    if (test){
        switch(op.value){
            case '+':r=parseInt(x.value)+parseInt(y.value);
                        break;

            case '-':r=parseInt(x.value)-parseInt(y.value);
                        break;
            case '*':r=parseInt(x.value)*parseInt(y.value);
                        break;
            case '/':r=parseInt(x.value)/parseInt(y.value);
                        break;
        }
        }
    res.textContent="le resultat est   "+r;
    }
function init(){
    document.querySelectorAll(".error").forEach((e)=>e.textContent=""); 
}   