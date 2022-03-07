function calculaImc(){
    // recupera os dados digitados pelo usuário
    // JS é não tipado => não se define o tipo da variável
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    // calcular o IMC
    let imc = (peso / (altura * altura))
    // mostra o resultado para o usuário
    document.getElementById("imc").innerHTML = "O IMC é " + imc.toFixed(2) // duas casas depois da vírgula
if (imc < 18.5){
    alert("Seu estado : Magreza")
}
else if ((imc >= 18.5) && (imc < 25)){
    document.getElementById("tipo").innerHTML = "Seu estado : Normal"
}
else if ((imc >= 25) && (imc < 30)){
    alert("Seu estado : Sobrepeso")
}
else if ((imc >= 30) && (imc < 35)){
    alert("Seu estado : Obesidade Grau I")
}
else if ((imc >= 35) && (imc < 40)){
    alert("Seu estado : Obesidade Grau II")
}
else if (imc >= 40){
    alert("Seu estado : Obesidade Grau III ou Mórbida")
}
}