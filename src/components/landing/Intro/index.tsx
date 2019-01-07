import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// @ts-ignore
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m James and I’m a Backend & Devops engineer!</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m James and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)