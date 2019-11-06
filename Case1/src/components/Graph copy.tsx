import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import { scaleTime, scaleLinear } from '@vx/scale';
import {extent, max} from 'd3-array';
import { AreaClosed, LinePath, Bar } from '@vx/shape';
import { Group } from '@vx/group';



export interface Props {
    points: any
    width: number
    height: number
}

const Graph: React.FC<Props> = (props) => {
    const width = props.width
    const height = props.height

    /* Make the values into an object so it's easier to work with */
    var data = [{}]
    for(let i = 0; i<props.points.length; i++){
        data[i] = {time: props.points[i][0], value: props.points[i][1]}
    }

    const margin = {
        top: 60,
        bottom: 60,
        left: 80,
        right: 80,
      };
/*       const xMax = width - margin.left - margin.right;
      const yMax = height - margin.top - margin.bottom; */

      const xSelector = (d:any) => new Date(d.time); // d.date is unix timestamps
    const ySelector = (d:any) => d.value;

    if (!data) return null;

  const padding = 100;
  const xMax = width - padding;
  const yMax = height - padding;

  const xScale = scaleTime({
    range: [padding, xMax],
    domain: extent(data, xSelector),
  });

    const dataMax = max(data, ySelector);
    const yScale = scaleLinear({
      range: [yMax, padding],
      domain: [0, dataMax + (dataMax / 3)],
    });
    
  return (
    <div>
      <svg width={width} height={height}>
  <rect x={0} y={0} width={width} height={height} fill="#32deaa" />
  <LinePath
    data={data}
    xScale={xScale}
    yScale={yScale}
    x={xSelector}
    y={ySelector}
    strokeWidth={5}
    stroke="#FFF"
    strokeLinecap="round"
    fill="transparent"
  />
  <Bar
    x={0}
    y={0}
    width={width}
    height={height}
    fill="transparent"
    data={data}
  />
</svg>
    </div>
  );
}

export default Graph;
