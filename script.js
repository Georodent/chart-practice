console.log("let's build some charts!")
// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart', 'bar', 'timeline']});
     // -----Only have to do this once!! above


      // Set a callback to run when the Google Visualization API is loaded.
//      google.charts.setOnLoadCallback(drawChart1);
//      google.charts.setOnLoadCallback(drawChart2);
     
     google.charts.setOnLoadCallback(drawStudyBar);
     google.charts.setOnLoadCallback(drawDonationChart);
       function drawDonationChart(){
         
         var data = google.visualization.arrayToDataTable([
          ['Category', 'Expenditure'],
          ['Administrative',     4],
          ['Fundraising',      16],
          ['Youth Programs',  36],
          ['Adult Programs', 44]
        ]);
//          - 4 cents is for administrative costs
//  - 16 cents is for fundraising
//  - 36 cents funds youth programs
//  - 44 cents funds adult program
//         
         

        var options = {
          title: 'Expenditures for Marketing Team',
          pieHole: 0.4,
          slices: [{color: '#8AD1C2'},
                   {color: '#9F8AD1'},
                   {color: '#D18a99'},
                   {color: '#BCD18A'}
                  ],
          legend: 'top'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donation-chart'));
        chart.draw(data, options);
      }
       
      //--- added second google.charts callback and changed the drawchart to drawchart1, and drawchart2 to have another chart on page

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

      function drawChart1() {
      //----Updated drawChart to drawChart1 to have another chart on the page
        
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
        //  Changed chart_div to chart_div1 to have a second chart on page
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      //  Function is for onclick
      function showTimelineChart(){
        // TODO: validate that it's a legit color string
        let color = document.getElementById("color").value
        drawStudyTimeline(color)
      }
      //  End of onclick      

      //  Time Line Chart begins
      function drawStudyTimeline(color){
         var container = document.getElementById('study-timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Phase of Study' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'General Ed Reqs', new Date(2018, 8, 1), new Date(2019, 4, 1) ],
          [ 'Choose Major',      new Date(2019, 5, 1),  new Date(2019, 7, 1) ],
          [ '2 Courses Completed',  new Date(2019, 8, 1),  new Date(2020, 4, 1)],
          [ 'Complete 12 courses',  new Date(2020, 8, 1),  new Date(2022, 4, 1)]]);
        
        // Var for styling of time line
        var options = {
          timeline: { singleColor: color },
        };
        
        
        //  Pass in options after dataTable for the bars be all red
        chart.draw(dataTable, options);
      }
      // Time Line Chart ends



      function drawStudyBar(){
        
      }
      


      