import styled from '@emotion/styled'
import {
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  borderColor,
  borderRadius,
  borders,
  boxShadow, opacity,
  variant,
} from 'styled-system'

import { Box } from './Box'
import { themed } from './themed'


const cards = variant({ key: 'cards' })

export const Card = styled(Box)({
    padding: '1rem',
    background: '#fff',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.09)',
    height: '100%',
  },
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards,
  themed('Card'),
)
