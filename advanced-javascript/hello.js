class Car {
    static wheels = 4;
    constructor(
      color,
      wheelsColor,
      brand,
      engine
    ) {
      this.color = color;
      this.wheelsColor = wheelsColor;
      this.brand = brand;
      this.engine = engine;
    }
  }
  
  class ElectricCar extends Car {
    constructor(
      color,
      wheelsColor,
      brand,
      engine,
      batteryBackup,
      chargingTime
    ) {
      this.batteryBackup = batteryBackup;
      this.chargingTime = chargingTime;
      super(color, wheelsColor, brand, engine);
    }
  }
  
  class PetrolCar extends Car {
    constructor(
      color,
      wheelsColor,
      brand,
      engine,
      milaege
    ) {
      this.milaege = milaege;
      super(color, wheelsColor, brand, engine);
    }
  }
  
  var json = {
    color: "White",
    wheelsColor: "Black",
    brand: "Tesla",
    engine: 3000,
    batteryBackup: "450Kms",
    chargingTime: "2 hours",
    type: "ELECTRIC",
  };
  
  if (json.type === "ELECTRIC") {
    var car1 = new ElectricCar(
      json.color,
      json.wheelsColor,
      json.brand,
      json.engine,
      json.batteryBackup,
      json.chargingTime
    );
    console.log(car1);
  } else {
    var car2 = new PetrolCar("White", "Black", "Tesla", 3000, 18);
    console.log(car2);
  }
  