class Car{
  constructor() {
    this.carContainerElement = document.getElementById("root");
    this.searchBtn = document.getElementById("btn-search");
    this.driverType = document.getElementById("driverType");
    this.warning = document.querySelector(".warning");
    this.date = document.getElementById("inputDate");
    this.pickupTime = document.getElementById("pickupTime");
    this.totalPassenger = document.getElementById("totalPassenger");
  }

  async init(){
    await this.load();

    document.body.onload = this.carAvailable;
    this.searchBtn.onclick = this.run;
  }

  carAvailable = () => {
    let cars = "";
    Component.list
      .filter((car) => car.available)
      .map((car) => {
        cars += car.render();
        this.carContainerElement.innerHTML = cars;
      });
  }

  run = () => {
    let dateTime = new Date(`${this.date.value} ${this.pickupTime.value}`);
    let cars = "";
    let driverType = this.driverType.value === "true";
    const getCarLength = Component.list
      .filter((car) => 
        car.available === driverType &&
        new Date(car.availableAt) >= dateTime && car.capacity >= this.totalPassenger.value
      )
      .map((car) => {
        cars += car.render();
        this.carContainerElement.innerHTML = cars;
      });
      console.log(getCarLength.length);

      if (getCarLength.length === 0) {
        this.carContainerElement.innerHTML = "";
        this.warning.classList.remove("hidden");
      } else {
        this.warning.classList.add("hidden");
      }
  }

  async load() {
    const cars = await Binar.listCars();
    Component.init(cars);
  }

}