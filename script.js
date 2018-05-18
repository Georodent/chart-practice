console.log("let's build some charts!")
// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
     // -----Only have to do this once!! above
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart1() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Pineapple', 5],
          ['Olives', 1],
          ['Roasted Garlic', 3],
          ['Red Peppers', 2]
        ]);

        // Set chart options
        var options = {'title':'What kinds of Pizza I Ate Last Night',
                       'width':600,
                       'height':600,
                       'legend': 'left',
                         'is3D':true};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
      }

     function drawChart2() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Pineapple', 5],
          ['Olives', 1],
          ['Roasted Garlic', 3],
          ['Red Peppers', 2]
        ]);

        // Set chart options
        var options = {'title':'What kinds of Pizza I Ate Last Night',
                       'width':600,
                       'height':600,
                       'legend': 'left',
                         'is3D':true};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
      } 