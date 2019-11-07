import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const InlineDiv = styled.div`
    display: inline;
`

export interface Props {
  }
const Clock: React.FC<Props> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval( () => tick(), 1000)
  }, [])

  const tick = () => {
    setDate(new Date())
  }


  return <InlineDiv>{date.toLocaleString('en-US', { timeZone: 'Europe/Oslo' })}</InlineDiv>
}

export default Clock