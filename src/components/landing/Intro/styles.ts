import styled from '@emotion/styled'

export const Wrapper = styled('div')({
  paddingBottom: '4rem',
  backgroundImage: 'url("../illustrations/overlay.svg")',
  backgroundSize: 'contain',
  backgroundPosition: 'right top',
  backgroundRepeat: 'no-repeat',
})

export const IntroWrapper = styled('div')({
  padding: '4rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 960px)': {
    flexDirection: 'column',
  },
})

export const Details = styled('div')({
  flex: '1',

  '@media (max-width: 960px)': {
    width: '100%',
    marginBottom: '2rem',
  },

  h1: {
    marginbottom: '2rem',
    fontSize: '36pt',
    color: '#212121',

    '@media (max-width: 680px)': {
      fontSize: '30pt',
    },
  },

  h4: {
    marginBottom: '2.5rem',
    fontSize: '32pt',
    fontWeight: 'normal',
    color: '#707070',

    '@media (max-width: 680px)': {
      fontSize: '26pt',
    },
  },
})

export const Thumbnail = styled('div')({
  flex: 1,

  '@media (max-width: 960px)': {
    width: '100%',
  },

  img: {
    width: '100%',
  },
})
