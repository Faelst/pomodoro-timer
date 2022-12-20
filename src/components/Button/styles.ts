import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export interface ButtonProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 50%;
  height: 30px;
`
