let apples: number = 5;
let speed: string = 'fast'

let hasName: boolean = true;


let colors: string[] = ['red', 'blue', 'yellow']

let myNumbers: number[] = [1,2,3,5]

let truth: boolean[] = [true,true,false]


// Classes

class Car {

}

let car: Car = new Car();

//Object literal

let point: {x: number; y:number;} = {
  x: 10,
  y: 20
};

//Functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}


let numbers = [-10,-1,12]
let numberAboveZero: number | boolean = false

for(let i=0; i<numbers.length; i++){
  if(numbers[i]>0){
    numberAboveZero = numbers[i]
  }
}