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

const TopGrid = styled.div`
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



const DashboardComponents: React.FC<Props> = (props) => {
  /* Data is passed down to child Table, and will return the values present in the table when the user
  presses the "save data" component */
  const [data, setData] = useState('')
  const [editData, isEditing] = useState(false)
  const [currentDataset, setCurrentDataset] = useState(Dataset)
/*   const [datasetArray, setDatasetArray] = useState([Dataset, Dataset]) */
  const [graphs, setGraphs] = useState(['BlackGraph', 'ColoredGraph', 'LineGraph'])
  const [graphsArray, addToGraphArray] = useState([{name:'', id:-1}])

  const removeElement = (id:number) => {
    let newObject = graphsArray.filter(p => p.id!==id)
    for(let i = 0; i<newObject.length; i++){
      newObject[i] = {name:newObject[i].name, id:i}
    }
    addToGraphArray(newObject)
  }

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

  return (
    <OuterGrid>
      <TopGrid>
{/*       <Dropdown>
    <span><b>Choose Dataset:</b> Chosen is <b>{currentDataset.name}</b></span>
    <DropdownContent className="dropdown-content">
    {datasetArray.map(p => 
    <div key={p.id}>
      <button onClick={() => setCurrentDataset(p)}>{p.name}</button>
      <br />
    </div>
    )}
    </DropdownContent>
  </Dropdown> */}
  <div>
      <button onClick={() => isEditing(!editData)}>Edit data?</button>
      {editData ? <Table points={currentDataset.points} data={(value:any) => setData(value)}/> : '' }
    </div>
    <NewGraph graphs={graphs} amountOfGraphs={graphsArray.length} addGraph={(value:any) => 
      addGraph(value.name , value.id)}
      />
    <GraphComponents>
       {graphsArray.map(( p:any ) =>
          <div key={p.id}>
            <Graph style={p.name} points={data!=='' ? data : currentDataset.points} width={750} height={400} />
            <br />
            {p.id !==-1 ? <button onClick={() => removeElement(p.id)}>Remove element</button> : ''}
          </div>
        )}
    </GraphComponents>
    </TopGrid>
    </OuterGrid>
  );
}

export default DashboardComponents;
