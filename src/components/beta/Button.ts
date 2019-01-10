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
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  border: 0,
  borderRadius: 4,
}

