import styled from '@emotion/styled'

export const Wrapper = styled.div`
	background: transparent;
	width: 100%;
`

export const Overlay = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	display: none;
	transition: 0.4s;

	${({ sidebar }: any) =>
  sidebar &&
  `
			display: block;
			z-index: 4;	
	`}
`
