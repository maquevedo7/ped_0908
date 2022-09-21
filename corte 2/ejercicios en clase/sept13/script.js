//alert("Hola");
document.write("Escuela de artes y letras");
console.log("Martes 13");
let name="Hiromi";
document.getElementById("cuadro1").innerHTML=name;
let name2=prompt("Por favor escriba su nombre");
let age=Number(prompt("Escriba su edad"));
let final=age+10;
let ant=parseInt(age)-5; //otra forma de cambiar en número
let mult=age*3;
let div=age/2;
let par=age%2;
console.log(par)
//let exp=age**; -> para exponentes
//let mod=age%; -> modulo
alert("Hola "+name2+", su edad en 10 años será: "+final+". Hace 5 años era: "+ant+". Su edad triplicada es: "+mult+". Y la mitad de su edad es: "+div+".");
// Tipos de datos -> primitivos - String, number, undefined, null
if(par==0){
    alert("Su edad es par");
}else{
    alert("Su edad es impar");
}
if(age>=22){
    alert("Usted tiene más o 22 años");
}else{
    alert("Usted tiene menos de 22 años");
}