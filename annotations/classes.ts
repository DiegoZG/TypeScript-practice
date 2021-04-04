class Vehicle {
  public honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProccess(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrivingProccess()
car.honk()