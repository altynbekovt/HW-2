// click  

let counter = 0; 
document.addEventListener('DOMContentLoaded', function(){ 
    document.querySelector('#redmibus').onclick = function(){ 
        document.querySelector('#hello').style.color = 'red' 
        counter--; 
         
            if(counter >= 0){ 
                document.querySelector('#hello').innerHTML = counter; 
        } 
    } 
    document.querySelector('#greenplus').onclick = function(){ 
        document.querySelector('#hello').style.color = 'green' 
        counter++; 
        document.querySelector('#hello').innerHTML = counter; 
    } 
})

//////курсор
document.querySelector('.blocks').onmousemove = function(event) {
    event = event || window.event; 
    document.querySelector('.x').innerHTML = event.offsetX;
    document.querySelector('.y').innerHTML = event.offsetY;
}
//////////////////////////// светофор
let hello = prompt('');
let red = document.getElementById('#red')
let yellow = document.getElementById('#yellow')
let green = document.getElementById('green')
document.addEventListener('DOMContentLoaded', function(){
    if(hello == 'красный'){
        document.querySelector('#red').style.background = 'red';
        document.getElementById('h').innerHTML = 'STOP';
    }else if(hello == 'желтый'){
        document.querySelector('#yellow').style.background = 'yellow'
        document.getElementById('h').innerHTML = 'READING';
    }else if(hello == 'зеленный'){
        document.querySelector('#green').style.background = 'green'
        document.getElementById('h').innerHTML = 'GO';
    }else {
        alert('error');
    }
})