import * as React from 'react'
import { Wrapper, Bar } from './styles'

const Hamburger = ({ sidebar, toggle }: any) => (
  <Wrapper sidebar={sidebar} onClick={toggle}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
)

export default Hamburger
