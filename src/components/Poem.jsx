import React from "react"
import styled from "styled-components"
import Time from "./Time"
import Header from "./Header"

const Page = styled.div`
  max-width: 50%;
  min-width: 50%;
  height: auto;
  font-size: 18px;
  padding: 1vh 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.2em;
  box-shadow: 1px 1px 0.3px 1px grey;
  margin 1% 0;
  background-color: rgb(240,240,240)
`

const Footer = styled.footer`
  width: 100%;
  min-height: 10%;
  height: 10%;
  text-align: right;
`
const Pre = styled.pre`
  white-space: pre-wrap;
  max-height: 80%;
`

const Poem = ({ node }) => {
  const { name, poet, content, time } = node
  return (
    <Page>
      <Header name={name} poet={poet} />
      <Pre>{content}</Pre>
      <Footer>
        <Time time={time} />
      </Footer>
    </Page>
  )
}

export default Poem
