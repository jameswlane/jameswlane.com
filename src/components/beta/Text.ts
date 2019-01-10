import styled from '@emotion/styled'
import { fontFamily, fontWeight, letterSpacing, lineHeight, textAlign } from 'styled-system'
import { Box } from './Box'
import { themed } from './themed'


export const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Text')
)
