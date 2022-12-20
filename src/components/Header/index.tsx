import { Scroll, Timer } from 'phosphor-react'

import { Container } from './styles'

import LogoImg from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <img src={LogoImg} alt="duas setas para cima em verde" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  )
}
