  //////////svetofor
  
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

class Svito {
  constructor(options) {
    this.value = options.value
    this.color = options.color 
}
start(){
  console.log(`${this.value} ${this.color}`);
}
getInfo(){
  console.log(`это ${this.value} ${this.color}`)
}
}

class Red extends Svito {
    constructor(options){
      super(options);
     }
  }

  const Red = new Red({
    value: 'stop',
    color: 'red',
  })
  red.start()
  red.getInfo()

  ///
  class yellow extends Svito {
    constructor(options){
      super(options);
     }
  }

  const Yellow = new Yellow({
    value: 'gdi',
    color: 'yellow',
  })
  yellow.start()
  yellow.getInfo()
  /////
  class Green extends Svito {
    constructor(options){
      super(options);
     }
  }

  const Green = new green({
    value: 'go',
    color: 'green',
  })
  green.start()
  green.getInfo()

//////// class cars

class Cars {
  constructor(options){
    this.model = options.model
    this.color = options.color
    this.wheels = options.wheels
    this.price = options.price 
    this.motor = options.motor
    this.country = options.country
  }
  start(){
    console.log(`${this.model} заведен`)
  }
  getInfo(){
    console.log(`это ${this.model} ${this.color} ${this.wheels} ${this.price} ${this.motor} ${this.country}`)
  }
}

class Ferrari extends Cars {
  constructor(options){
    super(options);
  }
}

const ferrari = new Ferrari({
  model: 'ferrari',
  color: 'black',
  wheels: 3,
  price: "10000$"
})
ferrari.start()
ferrari.getInfo()

class Bmw extends Cars {
  constructor(options){
    super(options);
  }
}


const bmw = new Bmw({
  model: 'bmw',
  color: 'golden',
  wheels: 4,
  motor: 'v8 twin turbo'
})

bmw.start()
bmw.getInfo()

class Lamborghini extends Cars {
  constructor(options){
    super(options);
  }
}


const lamborghini = new Lamborghini({
  model: 'lamborghini',
  color: 'red',
  wheels: 2,
  country: 'italy'
})

lamborghini.start()
lamborghini.getInfo()