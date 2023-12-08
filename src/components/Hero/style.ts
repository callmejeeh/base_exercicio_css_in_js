import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 360px;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

  section {
    position: absolute;
    background-color: ${(props) => props.theme.corPrincipal};
    opacity: 0.5;
    content: '';
    width: 100%;
    height: 100%;
  }
`
export default Container
