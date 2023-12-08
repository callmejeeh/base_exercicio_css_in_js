import Container from './style'

export type Props = {
  children: string
}

const Hero = () => (
  <Container
    style={{
      backgroundImage:
        'url("https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg")',
      backgroundSize: 'cover'
    }}
  >
    <h2
      style={{
        color: '#fff',
        fontFamily: 'Gloock',
        fontSize: 32,
        padding: 90
      }}
    >
      As melhores vagas para tecnologia, design e artes visuais.
    </h2>
    <section></section>
  </Container>
)

export default Hero
