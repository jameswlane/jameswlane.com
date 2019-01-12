import styled from '@emotion/styled'
import { Box } from './Box'
import { themed } from './themed'


export const Link = styled(Box)(
  themed('Link')
)

Link.defaultProps = {
  as: 'a',
  color: 'blue'
}
