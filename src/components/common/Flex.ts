import styled from '@emotion/styled'
import { alignItems, flexDirection, flexWrap, justifyContent } from 'styled-system'
import { Box } from './Box'
import { themed } from './themed'


export const Flex = styled(Box)({
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
)
