let gasConsumption = 0;
let elecConsumption = 0;
let buildingArea = 0;

var xValues = ["NG", "Electricity"];
var yValues = [55, 45];
var yValues2 = [65, 35];
var yValues3 = [25, 75];

var barColors = ["#29C3EC", "#DBEFFF"];

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
        text: "Total Energy (GJ)",
      },
      aspectRatio: 1
    },
    plugins: {
      datalabels: {
          formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                  sum += data;
              });
              let percentage = (value*100 / sum).toFixed(2)+"%";
              return percentage;
          }
        }
      },
});

new Chart("emissions", {
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
        text: "Total Emissions (TCO2e)",
      },
      aspectRatio: 1
    }
  });

  new Chart("costs", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues3,
        borderWidth: 10
      }]
    },
    options: {
      title: {
        display: true,
        text: "Total Cost ($)",
      },
      aspectRatio: 1
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
  