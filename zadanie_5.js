// Задание 5,6
// Пользователь вводит 2 числа и операцию, нужно вывести результат + вывод ошибки при делении на ноль

var num1 = +process.argv[2] ,
num2 = +process.argv[3] ,
operation = process.argv[4];

switch(operation){
    case "+":
    console.log(num1 + num2);
    break;
    case "-":
    console.log(num1 - num2);
    break;
    case "*":
    console.log(num1 * num2);
    break;
    case "/":
    (num2==0) ? console.log("Вы пытаетесь разделить на ноль"): console.log(num1 / num2); 
    break;       
    case "%":
    console.log(num1 % num2);
    break;
    
}

