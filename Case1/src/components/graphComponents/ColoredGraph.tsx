import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import styled from 'styled-components'

const OuterGrid = styled.div`
    max-width: 100%
`


export interface Props {
    points: any
    width: number
    height: number
}

const ColoredGraph: React.FC<Props> = (props) => {
    const width = props.width
    const height = props.height

    /* Make the values into an object so it's easier to work with
    and change the time into a date so it's easier to understand */
    var data = [{}]
    for(let i = 0; i<props.points.length; i++){
        data[i] = {time: (new Date(props.points[i][0])), value: props.points[i][1]}
    }

    
  return (
    <OuterGrid>
    <VictoryChart domainPadding={0} theme={VictoryTheme.material}>
        <VictoryBar
          style={{ data: { fill: "#c43a31" } }}
          data={data}
          x="time"
          y="value"
        />
      </VictoryChart>
  </OuterGrid>
  );
}

export default ColoredGraph;