import styled from '@emotion/styled'
import { borderRadius, height } from 'styled-system'
import { Box } from './Box'
import { themed } from './themed'


export const Image = styled(Box)({
    maxWidth: '100%',
    height: 'auto'
  },
  height,
  borderRadius,
  themed('Image')
)

Image.defaultProps = {
  as: 'img',
  m: 0 // margin
}

