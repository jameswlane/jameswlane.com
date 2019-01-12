import styled from '@emotion/styled'
import {
  borderColor,
  borderRadius,
  borders,
  buttonStyle,
  fontWeight,
} from 'styled-system'
import { Box } from './Box'
import { themed } from './themed'


export const Button = styled(Box)({
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  themed('Button'),
)

Button.defaultProps = {
  as: 'button',
  cursor: 'pointer',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0, // margin
  px: 3, // padding-left and padding-right
  py: 2, // padding-top and padding-bottom
  padding: '0.7rem 2.5rem',
  color: 'white',
  bg: 'blue',
  border: 0,
  borderRadius: '3px',
}

