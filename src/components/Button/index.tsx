import { ButtonContainer, ButtonVariant } from './styles'

export type Props = {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: Props) {
  return <ButtonContainer variant={variant}>Testando</ButtonContainer>
}
