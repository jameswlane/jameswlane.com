import styled from '@emotion/styled'
import { Text } from './Text'
import { themed } from './themed'


export const Heading = styled(Text)(
  themed('Heading')
)

Heading.defaultProps = {
  as: 'h2',
  m: 0, // margin
  fontSize: 4,
  fontWeight: 'bold',
}
