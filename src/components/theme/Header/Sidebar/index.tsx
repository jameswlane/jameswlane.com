import * as React from 'react'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Sidebar = ({ sidebar, toggle }: any) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks/>
  </Wrapper>
)

export default Sidebar
