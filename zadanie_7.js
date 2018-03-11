// Задание 7
// Задать массив из чисел ( не более 10)
// Пользователь вводит 1 числа
// Найти в массиве пару чисел которые в сумме бы дали это число

var num = +process.argv[2] , 
array = [1, 3, 7, 0, 9, 45, -45, 4, 8];
var newArr = [];
var num1, num2;
for (var i = 0; i < array.length; i++) {
	for ( var j = 0; j < array.length; j++) {
		if (array[i] + array[j] == num && array[j] > array[i]) {			
			num1 = array[i];
			num2 = array[j];
			newArr.push(num1,num2+'\t');
        }  
    }
}

console.log(`Ваша пара чисел это:  ${newArr} `); 
 




