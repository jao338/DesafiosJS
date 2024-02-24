let ask = document.querySelector("#inputAsk");
let response = document.querySelector("#inputResponse");
let span = document.querySelector("#spanResponse")

inputAsk.addEventListener("input", function(){
    
    response.value = ask.value.split('').reverse().join('');
    
    let arrayAsk = ask.value.split("").filter(function(item){
        return item !== " ";
    });

    let arrayResponse = response.value.split("").filter(function(item){
        return item !== " ";
    });

    if (arrayAsk.join("") == arrayResponse.join("")) {
        span.innerText = "É um palíndromo";
    }else{
        span.innerText = "Não é um palíndromo";
    }
    
});