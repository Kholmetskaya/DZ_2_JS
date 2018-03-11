// Задание 2
// Пользователь вводит число, нужно выбрать каким числам оно кратно (из списка 1 - 10)

var num = +process.argv[2];
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var massage = [];
var num1;

for(var i=0; i<array.length; i++){
  
    switch(true){
        case num%array[i]==0:      
        num1 = array[i] ; 
        massage.push(num1);       
    } 
  
}

// for(var j=0;j<k;j++){massage[massage.length]=num1;}
// console.log("Число кратно:" + massage);  

console.log("Число кратно:" + massage);



