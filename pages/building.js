//Initial values - as set in HTML element value
var gasConsumption = document.getElementById('gas').value;
var elecConsumption = document.getElementById('elec').value;
var buildingArea = document.getElementById('area').value;

//Constants for calculations
const A = 0.001888, B = 0.00002, C = 0.038, D = 0.0036, E = 0.16, F = 0.23;

//Initialize calulation variables
var naturalGasEnergy = 0, elecEnergy = 0, naturalGasEmissions = 0, elecEmissions = 0, naturalGasCost = 0, elecCost = 0,
    energy = 0, emissions = 0, cost = 0;

//Chart setup
var energyChart = null;
var emissionsChart = null;
var costChart = null;
var config1 = { options: { title: { display: true, text: "Total Energy (GJ)"}, aspectRatio: 1 }, type:'pie' };
var config2 =  { options: { title: { display: true, text: "Total Emissions (TCO2e)"}, aspectRatio: 1 }, type:'pie' };
var config3 =  { options: { title: { display: true, text: "Total Cost ($)"}, aspectRatio: 1 }, type:'pie' };
var barColors = ["#29C3EC", "#DBEFFF"];

updateChart();

//Update charts when forms are updated
function updateChart() {
  
  getCalculations();
  
  var xValues1 = ["NG", "Electricity"];
  var yValues1 = [naturalGasEnergy, elecEnergy];
  ctx = document.getElementById('energyChart').getContext('2d');
  
  config1.data = {
    labels: xValues1,
    datasets: [{
      data: yValues1,
      backgroundColor: barColors,
      hoverBackgroundColor: barColors,
      borderWidth: 10
      }]
  }
    
  if (energyChart == null) {
    energyChart = new Chart(ctx, config1);
  }
  else {
    energyChart.update()
  }

  document.getElementById("total-energy").textContent = "Total Energy: " + energy + " GJ";

  var xValues2 = ["NG", "Electricity"];
  var yValues2 = [naturalGasEmissions, elecEmissions];
  ctx2 = document.getElementById('emissionsChart').getContext('2d');
  
  config2.data = {
    labels: xValues2,
    datasets: [{
      data: yValues2,
      backgroundColor: barColors,
      hoverBackgroundColor: barColors,
      borderWidth: 10
      }]
  }
    
  if (emissionsChart == null) {
    emissionsChart = new Chart(ctx2, config2);
  }
  else {
    emissionsChart.update()
  }

  document.getElementById("total-emissions").textContent = "Total Emissions: " + emissions + " TCO2e";


  var xValues3 = ["NG", "Electricity"];
  var yValues3 = [naturalGasCost, elecCost];
  ctx3 = document.getElementById('costsChart').getContext('2d');
  
  config3.data = {
    labels: xValues3,
    datasets: [{
      data: yValues2,
      backgroundColor: barColors,
      hoverBackgroundColor: barColors,
      borderWidth: 10
      }]
  }
    
  if (costChart == null) {
    costChart = new Chart(ctx3, config3);
  }
  else {
    costChart.update()
  }

  document.getElementById("total-cost").textContent = "Total Cost: $" + cost;

}

//Perform energy calculations based on formulas
function getCalculations() {

  naturalGasEnergy = gasConsumption * C;
  elecEnergy = elecConsumption * D;
  energy = naturalGasEnergy + elecEnergy;

  naturalGasEmissions = gasConsumption * A;
  elecEmissions = elecConsumption * B;
  emissions = naturalGasEmissions + elecEmissions;

  naturalGasCost = gasConsumption * E;
  elecCost = elecConsumption * F;
  cost = naturalGasCost + elecCost;
}

//Store form values as they are entered on the webpage
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
  