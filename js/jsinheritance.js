class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar1 = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = myCar.show();
  
  class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }
  
  const myCar = new Car("Ford");
  myCar.carname = "Volvo";
  document.getElementById("demo").innerHTML = myCar.carname;  



  //static class
  class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  const myCar = new Car("Ford");
  
  // You can call 'hello()' on the Car Class:
  document.getElementById("demo").innerHTML = Car.hello();
  
  // But NOT on a Car Object:
  // document.getElementById("demo").innerHTML = myCar.hello();
  // this will raise an error.
  
  