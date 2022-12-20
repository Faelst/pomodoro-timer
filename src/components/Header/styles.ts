import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 3.5rem;

    a {
        width: 3rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.colors['gray-300']};
        transition: filter 0.2s;

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        
        &:hover {
            border-bottom: 3px solid ${({ theme }) =>
              theme.colors['green-500']};
        }

        &.active {
            color: ${({ theme }) => theme.colors['green-500']};
        }
  }

`
