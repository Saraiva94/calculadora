function calcular() {
    var txtv = window.document. getElementById('txtvel')
    
    var res = window.document.  getElementById('res')
    
    var vel = Number(txtv.value)
    
    res.innerHTML = `<p>Sua velocidade  atual é <strong> ${vel}KM/h</strong></p>`
    
    res.innerHTML += '<p>Dirija sempre  com cinto de segurança!</p>'

    if (vel > 60) {
        res.innerHTML += '<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>'
    }
}