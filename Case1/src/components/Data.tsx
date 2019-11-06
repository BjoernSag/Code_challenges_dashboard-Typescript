import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import Table from './Table'
import Graph from './Graph'
import NewGraph from './NewGraph'
import Dataset from '../data/pri_de_intraday_emwh_cet_h_a.json'
import styled from 'styled-components'

const OuterGrid = styled.div`
  padding-top: 4em;
  padding-left: 4em;
  
`

const Dropdown = styled.div`
position: relative;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
`

const DropdownContent = styled.div`
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
padding: 12px 16px;
z-index: 1;
`

const GraphComponents = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
`
export interface Props {
}


  /* Data is passed down to child Table, and will return the values present in the table when the user
  presses the "save data" component */
const DashboardComponents: React.FC<Props> = (props) => {
  const [data, setData] = useState('')
  const [editData, isEditing] = useState(false)
  const [currentDataset, setCurrentDataset] = useState(Dataset)
  const [graphs, setGraphs] = useState(['BlackGraph', 'ColoredGraph', 'LineGraph'])
  const [graphsArray, addToGraphArray] = useState([{name:'', id:-1}])


  /* Remove Graphelement from being shown and also from state by filtering on id */
  const removeElement = (id:number) => {
    let newObject = graphsArray.filter(p => p.id!==id)
    for(let i = 0; i<newObject.length; i++){
      newObject[i] = {name:newObject[i].name, id:i}
    }
    addToGraphArray(newObject)
  }

  /* Add a graph to state -- will be rendered
    I had to add name and id when I declared graphsArray state, which is why there is an extra "else if"
    to delete the first object of the array once we add a new one
  */
  const addGraph = (newName:string, newId:number) => {
    if(graphsArray[0]===undefined ) {
      addToGraphArray(graphsArray.concat({ name:newName, id:newId }))
    }
    else if(graphsArray[0].name==='')
      addToGraphArray([{ name:newName, id:newId }])
    else {
      addToGraphArray(graphsArray.concat({ name:newName, id:newId }))
      }
  }

  /* Render the table to the screen if the user clicks the Edit data button */
  const table = () => {
    return <div>
    <button onClick={() => isEditing(!editData)}>Edit data?</button>
    {editData ? <Table points={currentDataset.points} data={(value:any) => setData(value)}/> : '' }
  </div>
  }

  /* Renders a dropdown select where the user can select a new type of graph to add to the view, based
  on the available dataset */
  const addNewGraphComponent = () => {
    return <NewGraph graphs={graphs} amountOfGraphs={graphsArray.length} addGraph={(value:any) => 
      addGraph(value.name , value.id)}
    />
  }

  /* Renders the chosen graph components to the screen

    The type of graph is chosen based on the props style, where we give the name of the graph to get the
    corrent one

    Checks if the id is not '-1', which is the id we gave for the empty graph in the declaration,
     before rendering the button to delete

    onClickEvents:
      removeElements -- remove element based on id
  */
  const renderGraphComponents = () => {
    return <GraphComponents>
    {graphsArray.map(( p:any ) =>
      <div key={p.id}>
        <Graph style={p.name} points={data!=='' ? data : currentDataset.points} width={750} height={400} />
        <br />
        {p.id !==-1 ? <button onClick={() => removeElement(p.id)}>Remove element</button> : ''}
      </div>
    )}
  </GraphComponents>
  }

  return (
    <OuterGrid>
        {table()}
        {addNewGraphComponent()}
        {renderGraphComponents()}
    </OuterGrid>
  );
}

export default DashboardComponents;
