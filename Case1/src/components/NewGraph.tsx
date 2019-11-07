import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import styled from 'styled-components'


const OuterGrid = styled.div`
`

const Headline = styled.h1`

`

const Text = styled.p`

`

export interface Props {
    addGraph : any
    graphs : Array<string>
    amountOfGraphs: number
}

/* Returns a dropdown menu for the user to select the type of graph they want to add next, 
    
    onClickEvents:
        addGraph -- sends a graph object(name and id) to parent
        
*/
const NewGraph: React.FC<Props> = (props) => {
    const [graphName, changeGraph] = useState(props.graphs[0])
  return (
    <OuterGrid>
        <h1>Create a new Graph:</h1>
        <h3>What kind of graph do you want to use?</h3>
        <br />
      <select onChange={(e) => changeGraph(e.target.value)} id='graphs'>
          {props.graphs.map(p => 
              <option key={p} onChange={() => console.log(changeGraph(p))} value={p}>{p}</option>
          )}
    </select>
    <br />
    <button type='button' onClick={() => props.addGraph({name: graphName, id:props.amountOfGraphs})}>Add graph!</button>

    </OuterGrid>
  );
}

export default NewGraph;
