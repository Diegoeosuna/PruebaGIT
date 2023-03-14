/*function mayorDeEdad (edad){
    if(edad >= 18){
        return "Mayor de edad";
    } else if(edad < 18){
        return "Menor de edad";
    }
}
console.log("El usuario es: ", mayorDeEdad(18));
console.log("El usuario es: ", mayorDeEdad(17));

function sum(a,b){
    if(a >= b){
    return a+b;
} else if(a < b){
    return a*b;
}}

console.log(sum(5,1))*/

/*var pares = []
for(let i = 0; i <= 100; i++){
        if(i%2 === 0){
            console.log(pares + i)
        }
}*/

/*var letra
function letter(letra){
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    return "Vocal"
} else{
    return "Consonante"
}}*/

/*var numero = prompt ("Inserte un número")
console.log(numero)
function multiple (numero){
    if (numero%5 && numero%11) {
        return "true"
    }  else{
        return "false"
    }
} */


/*var pares = [''];
for ( pares=0; pares<=100; pares=pares +1 *2) {
      console.log( pares);
}*/

//Factorial
/*let n = 1;
let numero = 1;
let factorial = prompt ("Ingrese el número que quieres conocer el factorial:")
while (n<factorial){
    numero = numero * (n+1)
    console.log(numero)
    n++
}*/

//Pares
/*let numero = 1;
let pares = prompt ("Ingrese el número que quieres conocer todos los pares que contiene:")
while (numero<=pares){
    if(numero%2 == 0){
        console.log("Par: ",numero);
    } else {
        console.log("Inpar: ",numero)
    }
    
    numero++
}*/

//Sumatoria
let numero = 1;
let resultado = 0;
let sumatoria = prompt ("Ingrese el número mayor de la sumatoria:")
while (numero<=sumatoria){
    resultado = numero + resultado;
    console.log(resultado)
    numero++
}