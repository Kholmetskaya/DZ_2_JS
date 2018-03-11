// Задание 1
// Пользователь вводит 3 значения (числовые) необходимо выбрать максимальное
// Решить 2мя способами (swich / if / ? )
var num1 = +process.argv[2];
var num2 = +process.argv[3];
var num3 = +process.argv[4];
var array = [num1,num2,num3];

for( var i=0; i<array.length; i++){
// с помощью условного оператора if
    // if(array[i] > array[0]){
    //     array[0] = array[i];
    // } 

// с помощью тернарного оператора
    // array[0] = (array[i] > max) ? array[i]: array[0];

// с помощью конструкции switch
    // switch(true){
    //     case array[0] < array[i]:
    //     array[0] = array[i];
    //     break;       
    // }

}
console.log("Максимальное число:" + array[0]);

