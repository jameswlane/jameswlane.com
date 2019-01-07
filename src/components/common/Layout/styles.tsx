import * as React from 'react'
import { Global as EmotionGlobal, css } from '@emotion/core'


export const Global = () => {
  return  <EmotionGlobal
    styles={css`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
    }

    input, select, textarea, button {
      &:focus {
        outline: none;
      }
    }
  `}
  />
};
