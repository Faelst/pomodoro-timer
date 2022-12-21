import styled from 'styled-components'

export const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
