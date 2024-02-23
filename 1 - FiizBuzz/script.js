let numbers = document.querySelector('.numbers');

for (let index = 1; index <= 100; index++) {

    if(index == 100){
        numbers.innerHTML += "FizBuzz."
    }else if(index % 3 == 0){
        numbers.innerHTML += "Fizz, "
    }else if(index % 5 == 0){  
        numbers.innerHTML += "Buzz, "
    }else{
        numbers.innerHTML +=  "FizzBuzz, ";
    }
}
