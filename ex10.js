nom=document.getElementById("nom");
prenom=document.getElementById("prenom");
sexe=document.getElementByName("sexe");
ville=document.getElementById("ville");
emploi=document.getElementById("emploi");
phrase=document.getElementById("phrase");
dateN=document.getElementById("dateN");
  //à chaque fois qu'on clique sur le bouton on vide les messages d'erreur
function afficher(){
    document.querySelectedAll("error").forEach((e)=>e.textcontent="");
    let ok=true;
    if(nom.value.trim()==""){
        ok=false;
        nom.parentElement.querySelector("error").textContent="veuillez saisir le nom";
        console.log("nom vide");
    }
      
    if(prenom.value.trim()==""){
        ok=false;
        prenom.parentElement.querySelector("error").textContent="veuillez saisir le prénom";
        console.log("prénom vide");
    }   
}

