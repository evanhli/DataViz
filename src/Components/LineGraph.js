import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

function LineGraph() {
  const graphContainer = useRef(null);
  useEffect(() => {
    d3.csv('http://localhost:4000/static/data/test.csv')
      .then(data => {
        // console.log(data);
        const close = data.map(data => data.close);
        const x = d3.scaleLinear().domain([24000, d3.max(close)]).range([0, 800])
        d3.select('.chart')
          .selectAll('div')
          .data(close.slice(0, 10))
            .enter()
            .append('div')
            .style('width', (d) => x(d) + 'px')
            .text(d => d)
      });
  })
  return <div className='chart' ref={graphContainer}></div>
}

export default LineGraph;