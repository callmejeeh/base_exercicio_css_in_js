// import styles from './Hero.module.css'

import { Container, heroTitle } from './style'

export type Props = {
  children: string
}

const Hero = () => (
  <Container
    style={{
      backgroundImage:
        'url("https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg")'
    }}
  >
    <h2 style={{ color: '#eee' }}>
      As melhores vagas para tecnologia, design e artes visuais.
    </h2>
  </Container>
)

export default Hero
