user = 'timpil@gmail.com';
pass = 'Timpilrasu17';

let usercheck = function(usr){
    if(usr.includes('@'))
    {
        return true;
    }
    else{
        return false;
    }

}

console.log(usercheck(user));

let passcheck = function(pas){
    if((pas.includes('@')) && (pas.length > 6)){
        return true;
    }else
        {
            return false;
        }
    }
console.log(passcheck(pass));