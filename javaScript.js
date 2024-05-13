google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartMH);

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawColumn);

const nav = document.querySelector('nav');
window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    } 
    else {
        nav.classList.remove("sticky");
    }
})

function drawChartMH() {

    var data = google.visualization.arrayToDataTable([
        ['Opinion', 'Percentage'],
        ['No idea what employer offers', 11],
        ['No support or programs available', 42],
        ['Support and programs available', 47]
    ]);

    var options = {
      title: 'Mental Health Awareness',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartMH'));

    chart.draw(data, options);
  }

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Opinion', 'Percentage'],
        ['A bad thing', 16],
        ['Neither good nor bad', 28],
        ['A good thing', 56]
    ]);

    var options = {
      title: 'A Majority of Workers say Fousing on DEI at work is a good thing'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }



function drawColumn() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Controlled', 'Uncontrolled'],
      ['2015', 0.97, 0.74],
      ['2016', 0.98, 0.76],
      ['2017', 0.98, 0.77],
      ['2018', 0.98,0.78],
      ['2019', 0.98, 0.77],
      ['2020', 0.98,0.78]
    ]);

    var options = {
      chart: {
        title: 'Global gender pay gap from 2016 to 2020 (in US dollars)',
        subtitle: 'Pay gap in U.S. dollars',
      }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
