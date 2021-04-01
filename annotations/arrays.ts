const carMakers = ['ford','toyota', 'chevy']
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [];

//help with inference when extracting values

const car1 = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values

carMakers.push(100)
