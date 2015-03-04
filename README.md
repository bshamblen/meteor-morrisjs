meteor-morris
===============
A wrapper for version 0.5.1 of the JavaScript charting library [morris.js](http://morrisjs.github.io/morris.js/)

## Install
``` sh
meteor add bshamblen:morrisjs
```

## Your first chart
Start by adding a `<div>` to your page that will contain your chart. Make sure it has an ID so you can refer to it in your Javascript later.
```html
<div id="myfirstchart" style="height: 250px;"></div>
```
*Note: in order to display something, you’ll need to have given the div some dimensions. Here I’ve used inline CSS just for illustration.*
Next add a `<script>` block to the end of your page, containing the following javascript code:
```JavaScript
new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
```
Assuming everything’s working correctly, you should now see a line chart on your page.

## What Next?

Check out the rest of the documentation:

* [Line and area charts](http://morrisjs.github.io/morris.js/lines.html)
* [Bar charts](http://morrisjs.github.io/morris.js/bars.html)
* [Donut charts](http://morrisjs.github.io/morris.js/donuts.html)

Also, check out Ryan Bates’ excellent RailsCast [#223 Graphs and Charts](http://railscasts.com/episodes/223-charts-graphs-revised) (note: requires subscription).
