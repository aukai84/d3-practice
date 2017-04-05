console.log("hello world");

let container = d3.select('.container')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500)

let circle = container.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 25)
    .style('fill', 'cornflowerblue')

let line = container.append('line')
    .attr('x1', 20)
    .attr('y1', 20)
    .attr('x2', 233)
    .attr('y2', 233)
    .attr('stroke-width', 2)
    .attr('stroke', 'tomato')

let circle2 = container.append('circle')
    .attr('cx', 300)
    .attr('cy', 100)
    .attr('r', 25)
    .style('fill', 'cornflowerblue')

let data = [
  {x: 10, y: 0},
  {x: 20, y: 5},
  {x: 30, y: 10},
  {x: 40, y: 50},
  {x: 50, y: 20},
  {x: 60, y: 100},
  {x: 100, y: 80}
]

let lineGraph = d3.line()
    .x(function(d){
        return d.x*4
    })
    .y(function(d){
        return d.y*4
    })
    .curve(d3.curveBundle)

document.onmousemove = function(e){
    console.log(e.pageX)
    data[3].x = e.pageX
    linePath.attr('d', lineGraph(data))
}


let linePath = container.append('path')
    .attr('d', lineGraph(data))
    .attr('fill', 'none')
    .attr('stroke-width', 5)
    .attr('stroke', 'rebeccapurple')

let food = [
        {name: 'pizza', votes: 10},
        {name: 'salad', votes: 16},
        {name: 'Ahi Bowl', votes: 30},
        {name: 'Soup', votes: 4},
        {name: 'Pirosky', votes: 3}
    ];

let food2 = [
        {name: 'pizza', votes: 5},
        {name: 'salad', votes: 24},
        {name: 'Ahi Bowl', votes: 3},
        {name: 'Soup', votes: 7},
        {name: 'Pirosky', votes: 20}
    ];


let barGraph = d3.select('.bar-graph')
    .selectAll('div')
        .data(food)
    .enter().append('div')
    .style('background-color', 'cornflowerblue')
    .style('width', (d) => (d.votes)*20 + 'px')
    .style('height', '50px')
    .style('border', '1px solid black')
    .text((d) => (d.name));

function updateGraph(){
    console.log('working')
    barGraph.data(food2)
    .style('background-color', 'yellow')
    .style('width', (d) => (d.votes)*20 + 'px')
    .style('height', '50px')
    .style('border', '1px solid black')
    .text((d) => (d.name))
}