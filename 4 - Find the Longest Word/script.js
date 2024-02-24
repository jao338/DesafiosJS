let inputAsk = document.querySelector("#inputAsk");
let spanResponse = document.querySelector("#spanResponse");

function returnString(value){

    let words = value.split(" ");
    let biggerWord = "";

    for (let index = 0; index < words.length; index++) {

        //  Se o index for maior que zero, verifica se a palavra atual é maior que a palavra anterior
        if (index > 0 && words[index].length > words[index - 1].length) {
            biggerWord = words[index];
        }else if(index == 0){
            biggerWord = words[index];
        }
    }

    spanResponse.innerText = "A maior palavra é: " + biggerWord

}

inputAsk.addEventListener("input", function(){
    returnString(inputAsk.value)
});