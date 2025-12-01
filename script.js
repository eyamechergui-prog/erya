let age=parseInt(prompt)
if(!isNaN(age)){
    alert("saisir un entier valide");
}
else if(age<1 || age>120){
    alert("age invalide");
}
else{
    if(age>=1 && age<=6){
        alert("enfant");
    else if(age>=7 && age<=17){
        alert("adolescent");
    else if(age>=18 && age<=64){
        alert("adulte");
    

    }
    
}