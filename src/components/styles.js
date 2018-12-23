import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const TileImage = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 290px;
  width: 290px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position-x: center;
  opacity: ${props => (props.active ? 0.5 : 1)};
`

export const CenterItems = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: center;
`

export const TileText = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const NavRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 830px) {
    flex-direction: column;
  }
  margin-bottom: 40px;
`

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  border: 3px solid white;
  @media (max-width: 830px) {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
  }
`

export const NavItem = styled(Link)`
  font-family: Raleway;
  color: white;
  text-decoration: none;
  font-size: 24px;
  &:clicked {
    color: white;
    text-decoration: none;
  }
  font-weight: ${({ selected }) => (selected ? 600 : 300)};
  @media (max-width: 830px) {
    margin-bottom: 10px;
  }
`

export const SocialMediaContainer = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 10%;
  @media (max-width: 830px) {
    align-self: center;
    text-align: center;
    justify-content: center;
  }
`

export const ModalImage = styled(Flex)`
  width: 100%;
  max-height: 400px;
  height: 400px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position-y: top;
  background-position-x: center;
`

export const TilesRow = styled(Flex)`
  float: left;
  @media (max-width: 830px) {
    float: none;
    flex-direction: column;
    /* width: 100%; */
    align-items: center;
  }
`
