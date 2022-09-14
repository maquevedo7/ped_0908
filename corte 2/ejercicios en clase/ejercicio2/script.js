function validar() {
    let checkboxp=document.getElementById("p").checked;
    console.log(checkboxp);
    let checkboxq=document.getElementById("q").checked;
    console.log(checkboxq);
    let resultado="p AND q es: "+(checkboxp&&checkboxq)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
    resultado=resultado+" p OR q es: "+(checkboxp||checkboxq)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
    resultado=resultado+"La negación de p es: "+(!checkboxp)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
    resultado=resultado+"La negación de q es: "+(!checkboxq)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
}