import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from "styled-components"
import { Flex } from 'rebass'
import { Search } from 'styled-icons/feather'
import { H1 } from "../Heading"
import { IconButton, SearchButton } from '../Button'
import { Section } from '../Section'
import "../../pages/styles/global.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const Outer = styled.header`
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: lightgray;
  }
`
const Image = styled.img`
  margin: 0;
`

const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled(H1)`
  flex: 4;
`

const MediaQuery = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Section flex>
      <Section width={1/12}
        flex flexDirection="column" justifyContent="center">
        <ThemeConsumer>
          {theme => <Image className="spinning" src={theme.images.mainHeaderImage} ></Image>}
        </ThemeConsumer>
      </Section>
      <Section width={11/12}
          flex="column" justifyContent="center">
        <Nav>
          <Title id="homeTitle">
            <StyledLink to="/">
              {siteTitle}
            </StyledLink>
          </Title>
          <MediaQuery>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </MediaQuery>
          <SearchButton variant="contrast" icon={<Search></Search>} ></SearchButton>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon class="iconFA" id="faFaceBook" icon={faFacebookSquare}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon class="iconFA" id="faLinkedIn" icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank">
            <FontAwesomeIcon class="iconFA" id="faTwitter" icon={faTwitterSquare}></FontAwesomeIcon>
          </a>
        </Nav>
      </Section>
    </Section>
  </Outer>
)

Header.propTypes ={
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
