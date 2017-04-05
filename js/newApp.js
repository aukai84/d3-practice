
let container = d3.select('.container')
    .append('svg')
    .attr('width', 960)
    .attr('height', 600);

let path = d3.geoPath();

d3.json("https://d3js.org/us-10m.v1.json", (error, us) => {
    if(error) throw error;

    container.append('g')
        .attr("class", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .enter().append('path')
        .attr('d', path);
    console.log(us.objects.states)
    container.append("path")
        .attr("path", "state-borders")
        .attr('d', path(topojson.mesh(us, us.objects.counties, (a,b) => (a !== b))));

    // container.append('g')
    //     .attr("class", "counties")
    // .selectAll("path")
    // .data(topojson.feature(us, us.objects.counties).features)
    // .enter().append('path')
    //     .attr('d', path);

    // container.append("path")
    //     .attr("path", "county-borders")
    //     .attr('d', path(topojson.mesh(us, us.objects.counties, (a,b) => (a !== b))));
});