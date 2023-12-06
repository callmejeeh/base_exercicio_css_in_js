import Header from './components/Cabecalho'
import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import cores from './components/cores'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={cores}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <ListaVagas />
    </ThemeProvider>
  )
}

export default App
