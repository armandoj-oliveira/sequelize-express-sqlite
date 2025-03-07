module.exports = (objetoParams) => {
    for (let prop in objetoParams) {

         // Expressão regular para testar o prop e verifica o nome em qualquer uma das strings
        if(/Id|id/.test(prop)){
            objetoParams[prop] = Number(objetoParams[prop]);
        }
    }
    return objetoParams
}