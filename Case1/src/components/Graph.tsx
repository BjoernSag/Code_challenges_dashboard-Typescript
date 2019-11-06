import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import styled from 'styled-components'
import Blackgraph from './graphComponents/Blackgraph'
import ColoredGraph from './graphComponents/ColoredGraph'
import LineGraph from './graphComponents/ZoomableGraph'

const OuterGrid = styled.div`
    max-width: 100%
`



export interface Props {
    points: any
    width: number
    height: number
    style: string
}

/*
    Gets a string with the name of the graph the user wants to select,
    and use if statements to find and render that specific graph
*/
const Graph: React.FC<Props> = (props) => {
    const chooseGraph = (name:string) => {
        if(name==="BlackGraph") {
            return <Blackgraph points={props.points} width={props.width} height={props.height} />
        }else if(name==="ColoredGraph") {
            return <ColoredGraph points={props.points} width={props.width} height={props.height} />
        }else if(name==="LineGraph") {
            return <LineGraph points={props.points} width={props.width} height={props.height} />
        }
    }

    
  return (
    <OuterGrid>
    {chooseGraph(props.style)}
  </OuterGrid>
  );
}

export default Graph;
