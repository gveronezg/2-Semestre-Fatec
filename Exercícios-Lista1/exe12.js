function calcular(){
    // obter dados
    let smin = Number(document.getElementById("smin").value)
    let sfun = Number(document.getElementById("sfun").value)
    // calculando a área
    let dife = sfun/smin
    // saída de dados
    document.getElementById("saída").innerHTML = "O funcionário recebe " + dife.toFixed(2) + " salários mínimos."
}