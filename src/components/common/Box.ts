import styled from '@emotion/styled'
import { alignSelf, color, flex, fontSize, order, space, width } from 'styled-system'
import { themed } from './themed'

export const Box = styled('div')({
    boxSizing: 'border-box',
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed('Box'),
)
