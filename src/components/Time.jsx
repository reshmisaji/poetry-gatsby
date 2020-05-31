import React from "react"
import styled from "styled-components"

const TimeComponent = styled.span`
  font-size: 12px;
  color: #3c4245;
  font-family: sans-serif;
`

const Time = ({ time }) => {
  const date = new Date(time).toDateString()
  return <TimeComponent>{date}</TimeComponent>
}

export default Time
