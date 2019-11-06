import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import styled from 'styled-components'



const divideIntoPieces = (originalList:Array<any>) => {
  let dividedList = []
  let index = 0;
  for(let i = 0; i<originalList.length; i+=20){
    dividedList[index] = originalList.slice(i, i+20)
    index++
  }
  return dividedList
}

const OuterGrid = styled.div`
  width: 100%;
`
const StyledTable = styled.div`
  width: 100%;
  text-align:center;
  
`

const StyledListHeadline = styled.h1`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledListItem = styled.p`
  border: 1px solid black;
  font-size: 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledButtons = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Button = styled.button`
  font-size: 2em;
`

const InlineText = styled.p`
  display:inline;
`

export interface Props {
  points: number[][]
  data: any
}


const Table: React.FC<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(0)
  /* const [pageNumbers, setPageNumbers] = useState<Array<number>>([]) */
  const [pageNumbers, setPageNumbers] = useState(0)
  const [newList, setNewList] = useState(divideIntoPieces(props.points))
  const [test, setTest] = useState('2')
  const [currentArray, setCurrentArray] = useState([[]])

  useEffect(() => {
    setPageNumbers(newList.length)
    setNewList(newList)
    setCurrentArray(newList[0])
  }, newList)

  const deleteItem = (item:number) => {
    var afterDeletionList = newList
    afterDeletionList[currentPage] = newList[currentPage].filter((p:any) => p[0]!==item)
    setNewList(afterDeletionList) 
    setCurrentArray(afterDeletionList[currentPage])
  }

  const changePage = (nextPage:number) => {
    setCurrentPage(nextPage)
    setCurrentArray(newList[nextPage])
  }

  /* Concat all the array parts together so we can return the same format we got in. Easier to work with
  in other components */
  const concatArray = (array:Array<any>) => {
    let newArray : Array<number> = []
    for(let i = 0; i<array.length; i++){
      newArray = newArray.concat.apply([], [newArray, array[i]])
    }
    
    return newArray
  } 

  /* Returns the values of the table
    Use if statements to ensure the values excist before making them into Dates
  
  variables:
    months -- used to get the string value of months and not the index
  onClickEvent:
    deleteItem -- Asume the timestamp is unique, so send that to find the item to be deleted
  */
  const tableItems = () => {
    var months = ["January", "February", "March", "April", "May",
     "June", "July", "August", "September", "October", "November", "December"];
    return (currentArray.map((p:any) => 
    <StyledListItem key={p[0]}>
      <div>
        {(p[0] ? new Date(p[0]).getUTCDate() : p[0])} 
        {(p[0] ? months[new Date(p[0]).getUTCMonth()] : p[0])}
      </div>
      <div>
        {p[1]} MW/H
      </div>
      <div> 
        <button onClick={() => deleteItem(p[0])}> Delete item</button>
      </div>
    </StyledListItem>
  ))
  }

  /* return the buttons used to navigate the table
    use if statements to ensure that the "jump 10 pages" buttons don't go out of bounds

    OnClickEvents:
      changePage -- sets the currentPage and also tells the data to render the date of that page
  
  */
  const tableButtons = () => {
    return <StyledButtons>
    <Button onClick={() => changePage(0)}>First page</Button>
    {currentPage>9 ? <Button onClick={() => changePage(currentPage-10)}>Jump 10 back</Button> : ''}
    {currentPage>0 ? <Button onClick={() => changePage(currentPage-1)}>Prev</Button> : ''}
    {currentPage<pageNumbers-1 ? <Button onClick={() => changePage(currentPage+1)}>Next</Button> : ''}
     {currentPage<pageNumbers-10 ? <Button onClick={() => changePage(currentPage+10)}>Jump 10 forwards</Button> : ''}
    <Button onClick={() => changePage(pageNumbers-1)}>Last page</Button>
  </StyledButtons>
  }

  

  /*  */
  return (
    <OuterGrid>
      <StyledTable>
        <h2>Current Page is: {currentPage}</h2>
        <StyledListHeadline>
          <div>Time:</div>
          <div>Price:</div>
          <div>Delete:</div>
        </StyledListHeadline>
        {tableItems()}
        {tableButtons()}
        <h2>Current Page is: {currentPage}</h2>
      </StyledTable> 
      <br />
      <Button onClick={() => props.data(concatArray(newList))}>Save data</Button>

    </OuterGrid>
  );
}

export default Table;
