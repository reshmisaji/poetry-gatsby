import React from "react"
import styled from "styled-components"

const HeaderComponent = styled.header`
  width: 100%;
  min-height: 10%;
  box-shadow: 0px 0.5px 0px 0px grey;
  display: flex;
  justify-content: space-between;
`
const Name = styled.span`
  font-size: 20px;
  color: #3c4245;
`
const Poet = styled.span`
  font-size: 17px;
  font-weight: 300;
  color: #3c4245;
`

const Header = ({ name, poet }) => {
  return (
    <HeaderComponent>
      <Name> {name}</Name>
      <Poet> - {poet}</Poet>
    </HeaderComponent>
  )
}

export default Header
