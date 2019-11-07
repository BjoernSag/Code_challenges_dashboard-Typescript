import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import styled from 'styled-components'
import Clock from './Clock'

const TopBarGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    background: lightblue;
`

const InlineText = styled.p`
  display:inline;
`
const InlineDiv = styled.div`
    display:inline;
`

const TopBarStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
  `

export interface Props {
}

const Topbar: React.FC<Props> = (props) => {
  return (
      <TopBarGrid>
          <div></div>
    <TopBarStyle>
        <div>
          <InlineText><b>Bjoern</b> logged in <b>Logout</b></InlineText>
        </div>
        <div><b>Norway time:</b> <Clock/></div>
      </TopBarStyle>
      </TopBarGrid>
  );
}

export default Topbar;
