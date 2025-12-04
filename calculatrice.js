        var x=prompt("entrez un entier");
        var y=prompt("entrez un autre entier");
        var ok=prompt("veuillez entrer votre choix (+ - * / )");
        x=parseInt(x);
        y=parseInt(y);
        switch(ok){
            case"+": {
                alert(x+y);
                break;
            }
        case"-":{
            alert(x-y);
            break;
        } 
    case"*": {
        alert(x*y);
        break;
    }   
    case"/": {
        alert(x/y);
        break;
    }
    }