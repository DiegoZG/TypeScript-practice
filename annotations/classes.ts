class Vehicle {
  drive(): void {
    console.log('chugga');
  }
  honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();