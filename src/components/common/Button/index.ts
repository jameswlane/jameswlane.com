import styled from '@emotion/styled'

export const Button = styled.button`
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #fff;
	background: #0074d9;

	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }: any) =>
  secondary &&
  `
		background: #001F3F;
	`}
`
