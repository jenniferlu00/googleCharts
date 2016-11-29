google.charts.load('current', {'packages':['corechart']}); 

google.charts.setOnLoadCallback(drawChart);

// start drawing the chart

function drawChart() {

  // create the table that holds our data

  var data = new google.visualization.DataTable(); 
  data.addColumn('string', 'Fruits'); 
  data.addColumn('number', 'Number Consumed'); 
  data.addRows([
    ['Apple', 3], 
    ['Passion Fruit', 4], 
    ['Pineapple', 1], 
    ['Blueberries', 20], 
    ['Dragon Fruit', 2]
    ]); 

  // add style

  var options = {
    'title': 'How many different kinds of fruite I ate', 
    is3D : true,
    'height': 700, 
    'width': 900
    
  }; 

  var chart = new google.visualization.PieChart(document.getElementById('chart_div')); 
    chart.draw(data,options); 

} // ends func

 google.charts.setOnLoadCallback(drawChartTwo);

 function drawChartTwo() {


  var data = new google.visualization.DataTable();
  data.addColumn('string','Cities');
  data.addColumn('number','Population');
  
  data.addRows([
    
    ['New York', 8.4],
    ['Taipei', 2.7],
    ['Sydney', 4.2],
    ['Seoul', 10.01],
    ['London', 8.6]
    ]);

  var options = {
    'title': 'Population of Different Cities. Unit: Millions',
    'height': 700,
    'width': 900,
    'bar': {groupWidth:"30%"},
      };

  var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
  chart.draw(data,options);

 }