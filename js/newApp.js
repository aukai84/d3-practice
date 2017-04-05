console.log("hellow orld")

let container = d3.select('.container')
    .append('svg')
    .attr('width', 960)
    .attr('height', 600);

let path = d3.geoPath();

d3.json("https://d3js.org/us-10m.v1.json", (error, us) => {
    if(error) throw error;

    container.append('g')
        .attr('class', 'counties')
    .selectAll('path')
    .data(topojson.feature(us, us.objects.counties).features)
    .enter().append('path')
        .attr('d', path);
})