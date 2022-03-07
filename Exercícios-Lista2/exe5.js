function Calcular(){
    // puxar dados do html
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // calculando a média aritmética
    let resultado
    if (opcao == 1) {
        resultado = (n1 + n2) / 2
    } else if (opcao == 2) {
        if (n1 >= n2) {
            resultado = n1 - n2
        } else {
            resultado = n2 - n1 }
    } else if (opcao == 3) {
        resultado = n1 * n2
    } else if (opcao == 4) {
        if (n2 != 0) {
            resultado = n1 / n2
        } else {
            resultado = "Não se faz divisão por zero" }
    }
    // saída de dados
    document.getElementById("saida").innerHTML = resultado
}