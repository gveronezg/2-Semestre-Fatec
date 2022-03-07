function calcular(){
    // obter dados
    let dma = Number(document.getElementById("dma").value)
    let dme = Number(document.getElementById("dme").value)
    // calculando a área
    let area = (dma * dme) / 2
    // saída de dados
    document.getElementById("saída").innerHTML = "O tamanho da área deste losangulo é de: " + area
}