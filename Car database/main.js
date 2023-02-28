const carForm = document.getElementById("car-form");
const license = document.querySelector("#license");
const maker = document.querySelector("#maker");
const model = document.querySelector("#model");
const owner = document.querySelector("#owner");
const price = document.querySelector("#price");
const color = document.querySelector("#color");
const btnSubmit = document.querySelector("#btn-submit");
const btnReset = document.querySelector("#btn-reset");

const carList = document.querySelector(".car-list");
const carTable = document.querySelector("#car-table");

let cars = [];
function carObj(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
  
  // Create a Person object
  const newcar1 = new carObj("123456", "Toyota", "Camry", "John", "10000", "red");

  function add_car() {

      const newcar = new carObj(license.value, maker.value, model.value, owner.value, price.value, color.value);
      cars.push(newcar);
        console.log(cars);
     let carObjdata =[...cars];
      // display values of carObj
        carObjdata.forEach(function (car) {
            // display data carObj in table, under thead in car-table and append to car-list
            carTable.innerHTML += `
            <tr>
                <td>${car.license}</td>
                <td>${car.maker}</td>
                <td>${car.model}</td>
                <td>${car.owner}</td>
                <td>${car.price}</td>
                <td>${car.color}</td>
            </tr>
            `;
            carList.appendChild(carTable);
        }
        );
    }

btnSubmit.addEventListener("click", add_car);
function reset() {
    carTable.innerHTML = "";    
}
btnReset.addEventListener("click", reset);



