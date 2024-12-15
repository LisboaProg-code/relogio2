/* Variaveis hora, minuto e segundo */
const hr = document.getElementById('hora')
const min = document.getElementById('minuto')
const seg = document.getElementById('segundo')

/* Variáveis */
/* Função para atualizar hora */

function atualizarhora() {
    const agora = new Date()
    let h = agora.getHours()
    let m = agora.getMinutes()
    let s = agora.getSeconds()

    /* 0 a esquerda em números menor que 10. */
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    /* aparecer os coisa na tela */
    hr.innerText = h
    min.innerText = m
    seg.innerText = s
}


setInterval(atualizarhora, 1000)
atualizarhora()
