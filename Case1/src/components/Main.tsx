import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import styled from 'styled-components'


const OuterGrid = styled.div`
  padding-top: 4em;
  padding-left: 4em;
`

const Headline = styled.h1`

`

const Text = styled.p`

`

export interface Props {
}

const DashboardComponents: React.FC<Props> = (props) => {
  return (
    <OuterGrid>
      <Headline>Hii! Welcome to Graphs and stuff</Headline>
      <Text>Try it out. Have fun. I hope you enjoy graphs and tables</Text>
      <img
        height="300px"
        width="500px" 
        src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">

      </img>
    </OuterGrid>
  );
}

export default DashboardComponents;
