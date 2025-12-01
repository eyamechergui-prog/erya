alert("bienvenue sur notre site");
let nom=prompt("donner votre nom");
let ok=confirm("voulez vous afficher votre nom sur la page ");
console.log(ok);
if(ok){
    document.write("votre nom est "+nom);
}   
document.writeIn("bonjour $ (nom)");