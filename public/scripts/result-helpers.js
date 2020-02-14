$(document).ready(() => {

  let importChoices = $('.choice-names');
  let choices = [];
  for (let i = 0; i < importChoices.length; i++) {
    choices.push(importChoices[i].innerHTML);
  }

  let myChart = document.getElementById("myChart").getContext('2d');


  let temp = new Chart(myChart, {
    type: 'pie',
    data: {
      labels: choices,
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: $('.total-votes').text()
      }]
    }
  });

  myChart.scale(1, 1);
});
