let ask = document.querySelector("#inputAsk");
let response = document.querySelector("#inputResponse");
let inverse = [];

ask.addEventListener('input', function(){

    response.value = ask.value.split('').reverse().join('')

});

/* 

//  Funciona, mas é mais trabalhoso e verboso

//  Cria a variável "item" que recebe o valor do input tranformado em array
//  Adiciona no INÍCIO do array "inverse" o último item do array "item"
//  Adiciona ao elemento "response" o valor do array "inverse" transformado em string novamente

ask.addEventListener('input', function(){

    let item = ask.value.split('');

    inverse.unshift(item[item.length  - 1]);

    response.value = inverse.join('')
});

*/