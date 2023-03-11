let arr = [10, 20, 30, 50, 235, 3000]
console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])))
/////
for (var icom = 20; icom > 0; icom = icom - 1){
    console.log(icom)
}
/////
let svito = prompt('введите цвета')
 if (svito === 'красный'){
     alert('стоп')
 }else if(svito === 'зеленный'){
     alert('поехали')
 }else if(svito === 'желтый'){
     alert('ожидание')
 }else{
     alert('Пожалуйста введите цвета')
 }
const objsvito ={
    'красный':'стоп',
    'зеленный':'поехали',
    'желтый':'ожидание'
}

for (key in objsvito){
    console.log(objsvito[svito])
}



