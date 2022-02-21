function calcular(){
    //obter dados
    let peso = Number(document.getElementById("peso").value)
    //calculos
    let resultado = peso * 0.15
    let engordar = peso + resultado
    let resultado2 = peso * 0.20
    let emagrecer = peso - resultado2
    //saída de dados
    document.getElementById("engordar").innerHTML = "Seu novo peso caso vc engorde 15% (KG):" +  engordar.toFixed(2)
    document.getElementById("emagrecer").innerHTML = "Seu novo peso caso vc emagreça 20% (KG):" +  emagrecer.toFixed(2)
}