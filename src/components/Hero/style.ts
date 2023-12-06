import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.div`
  position: relative;
  color: #${(props) => props.theme.corCinza};
  height: 360px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`
export const heroTitle = styled.h2`
font-family: Gloock, serif;
font-size: 48px;

@media (max-width: 768px) {
    font-size: 32px;
  }
}
`

export const ImageBackground = styled.img`
  background-size: cover;
`
