let gasConsumption = 0;
let elecConsumption = 0;
let buildingArea = 0;

var xValues = ["NG", "Electricity"];
var yValues = [55, 45];
var yValues2 = [65, 35];

var barColors = ["#71eff8", "#b8f7fc"];

new Chart("energy", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
        borderWidth: 10
      }]
    },
    options: {
      title: {
        display: true,
        text: "Total Energy GJ",
      
      layout: {
        padding: 20
      }
      
    }
  }});

new Chart("electricity", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues2,
        borderWidth: 10
      }]
    },
    options: {
      title: {
        display: true,
        text: "Total Energy GJ"
      }
    }
  });
  
function storeValue(element) {
    if (element.id == "gas") { 
        gasConsumption = element.value;
        console.log(gasConsumption);
    }

    else if (element.id == "elec") {
        elecConsumption = element.value;
        console.log(elecConsumption);
    }

    else if (element.id == "area") {
        buildingArea = element.value;
        console.log(buildingArea);
    }
}
  