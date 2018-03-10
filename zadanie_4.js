// Задание 4
// Пользователь вводит до 10 цифр, нужно записать их в массив 

var num1 = +process.argv[2] || null,
num2 = +process.argv[3] || null,
num3 = +process.argv[4] || null,
num4 = +process.argv[5] || null,
num5 = +process.argv[6] || null,
num6 = +process.argv[7] || null,
num7 = +process.argv[8] || null,
num8 = +process.argv[9] || null,
num9 = +process.argv[10] || null,
num10 = +process.argv[11] || null;
var array = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]
console.log(array)

    var sum = 0 , sr = 0, rz = 0, max, min, kolEven = 0, kolOdd = 0, kolPos = 0, kolNeg = 0;
    max = array[0];   
    min = max;
        for (var i = 0; i <array.length; i++){
        if(array[i] != null){
 // сумма всех элементов       
            sum += array[i];  
//  среднее  значение   
            sr = sum / (i+1); 
// Разность всех элементов
            rz -= array[i]; 
// Максимум         
            if(array[i] > max){
                max = array[i];
            } 
// Минимум    
            if(min > array[i] ){
                min = array[i];
            } 
// Количество четных / нечетных элементов
            if(array[i] %2 == 0){
                kolEven ++;
            }else{
                kolOdd ++;
            }
// Количество положительных и отрицательных элементов
            if(array[i] > 0){
                kolPos ++;
            }else{
                kolNeg ++;
            }
        }   
    }

console.log(`сумма всех элементов: ${sum}
среднее значение: ${sr.toFixed(2)}
разность всех элементов: ${rz}
максимум: ${max}
минимум: ${min} 
количество четных элементов:  ${kolEven}
количество нечетных элементов:  ${kolOdd} 
количество положительных элементов:  ${kolPos}
количество отрицательных элементов:  ${kolNeg}`) ;




