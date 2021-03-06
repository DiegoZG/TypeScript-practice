const carMakers = ['ford','toyota', 'chevy']
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [];

//help with inference when extracting values

const car1 = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values

carMakers.push(100)

//Help with 'map'

carMakers.map((car: string): string => {
  return car
})

// flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push('2020-10-10')