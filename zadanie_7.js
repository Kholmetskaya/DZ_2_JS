// Задание 7
// Задать массив из чисел ( не более 10)
// Пользователь вводит 1 числа
// Найти в массиве пару чисел которые в сумме бы дали это число

var num = +process.argv[2] , 
array = [1, 3, 7, 6, 9, 45, -45, 4, 8];

for (var i = 0; i < array.length; i++) {
	for ( var j = 0; j < array.length; j++) {
		if (array[i] + array[j] == num && array[j] > array[i]) {			
			console.log(`Ваша пара чисел это:  ${array[i]}  и   ${array[j]} `);
        }  
    }
}



