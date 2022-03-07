function calcular(){
    //recupera os anos de nascimento e atual
    let nasc = Number(document.getElementById("nasc").value)
    let atual = Number(document.getElementById("atual").value)
    //calculando a)
    let idade = atual - nasc
    //calculando b)
    let idadem = idade*12
    //calculando c)
    let idaded = idade*365
    //calculando d)
    let idades = idade*52
    //concatenando
    let resultado
    resultado = "Esta pessoa tem " + idade + " anos de idade."
    resultado = resultado + "<br/>" + "Esta pessoa tem " + idadem + " meses de idade."
    resultado = resultado + "<br/>" + "Esta pessoa tem " + idaded + " dias de idade."
    resultado = resultado + "<br/>" + "Esta pessoa tem " + idades + " semanas de idade."
    //mostrando os resultados
    document.getElementById("saída").innerHTML = resultado
}