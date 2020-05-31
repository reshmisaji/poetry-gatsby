import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import Poems from "../components/Poems"

const IndexPage = () => {
  const { allPoemsJson } = useStaticQuery(graphql`
    query IndexQuery {
      allPoemsJson {
        edges {
          node {
            name
            time
            poet
            content
          }
        }
      }
    }
  `)

  const Main = styled.main`
    max-width: 100vw;
    width: 100vw;
    max-height: 100vh;
    height: 100vh;
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
  `
  const Header = styled.header`
    max-width: 100vw;
    width: 55%;
    max-height: 10vh;
    height: 10vh;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
  `

  return (
    <Main>
      <Header>
        <FontAwesomeIcon
          icon={faHome}
          className="container-icon"
          size="2x"
          color="#3c4245"
        />
      </Header>
      <Poems poems={allPoemsJson.edges} />
    </Main>
  )
}

export default IndexPage
