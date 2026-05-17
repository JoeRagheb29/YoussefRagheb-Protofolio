import Navbar from './layout/Navbar'
import Container from './layout/Container'
import Footer from './layout/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Container />
      <Footer />
    </ThemeProvider>
  )
}

export default App
