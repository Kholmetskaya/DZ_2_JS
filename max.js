// Задание 1
// Пользователь вводит 3 значения (числовые) необходимо выбрать максимальное
// Решить 2мя способами (swich / if / ? )
var num1 = +process.argv[2];
var num2 = +process.argv[3];
var num3 = +process.argv[4];
var array = [num1,num2,num3];
var max = array[0];
for( var i=0; i<array.length; i++){
// с помощью условного оператора if
    // if(array[i] > max){
    //     max = array[i];
    // } 

// с помощью тернарного оператора
    // max = (array[i] > max) ? array[i]: max;

// с помощью конструкции switch
    // switch(true){
    //     case max < array[i]:
    //     max = array[i];
    //     break;       
    // }

}
console.log("Максимальное число:" + max);

