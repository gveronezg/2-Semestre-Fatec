function Calcular(){
    // puxar dados do html
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // calculando a média aritmética
    let resultado
    switch (opcao) {
        case 1: resultado = (n1 + n2) / 2
        break // sai do switch
        case 2: if (n1 >= n2) {
                resultado = n1 - n2
            } else {
                resultado = n2 - n1 }
        break // sai do switch
        case 3: resultado = n1 * n2
        break // sai do switch
        case 4: if (n2 != 0) {
                resultado = n1 / n2
            } else {
                resultado = "Não se faz divisão por zero" }
        break // sai do switch
    default: resultado = "Opção inválida."
    }
    // saída de dados
    document.getElementById("saida").innerHTML = resultado
}