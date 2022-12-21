import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CyclesProvider } from './context/CyclesContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CyclesProvider>
          <Router />
        </CyclesProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
