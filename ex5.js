const login="user";
const pw="1234";
let userLogin=prompt("Enter your login:"); 
let userPw=prompt("Enter your password:");
if(userLogin===login && userPw===pw){
    alert("Access granted");
}
else{
    alert("Access denied");
}   