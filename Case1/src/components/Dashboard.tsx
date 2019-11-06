import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import styled from 'styled-components'

const OutsideGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 5fr;
    height: 100vh;
`

const Menu = styled.div`
    padding: 1em;
    background: lightblue;
`

const MenuContent = styled.div`
    position: fixed;
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2em;
    
`

const Content = styled.div`
    padding: 1em;
    

`
const StyledLink = styled(Link)`
    font-size: 1.5em;
    text-decoration: none;
    
    

    &.isActive {
        text-decoration:underline;
        text-decoration-color: yellow;
    }
`


export interface Props {
  /** The user's name */
  isActive: string;
}

const DashboardComponents: React.FC<Props> = (props) => {
  return (
    <OutsideGrid>
        <Menu>
            <MenuContent>
              <StyledLink className={props.isActive==='main' ? 'isActive' : ''} to="/">Main</StyledLink>
                <StyledLink className={props.isActive==='data' ? 'isActive' : ''} to="/data">Data</StyledLink>
            </MenuContent>
        </Menu>
        <Content>
         {props.children}
        </Content>
    </OutsideGrid>
  );
}

export default DashboardComponents;
