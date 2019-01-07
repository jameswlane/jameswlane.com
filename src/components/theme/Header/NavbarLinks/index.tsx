import * as React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }:any) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    {/*<AnchorLink href="#contact">Contact</AnchorLink>*/}
    <Link to="/blog">Blog</Link>
  </Wrapper>
)

export default NavbarLinks
