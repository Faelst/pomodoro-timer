import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const Button = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  color: ${({ theme }) => theme.colors['gray-100']};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(Button)`
  background: ${({ theme }) => theme.colors['green-500']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['green-700']};
  }
`

export const ResetCountdownButton = styled(Button)`
  background: ${({ theme }) => theme.colors['red-500']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['red-700']};
  }
`
