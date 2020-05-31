import React from "react"
import styled from "styled-components"
import Poem from "./Poem"

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  color: rgb(36, 36, 36);
`

const Poems = ({ poems }) => {
  return (    
    <Container>
      {poems.map(({ node }, index) => (
        <Poem node={node} key={index} />
      ))}
    </Container>
  )
}

export default Poems
