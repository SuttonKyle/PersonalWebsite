import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Button = styled.button`
  padding: 10px;
  width: 20%;
  border: 3px solid #222;
  height: 100%;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1em;
  background-color: ${props => (props.active ? '#d3d3d3' : 'white')};
  @media (max-width: 550px) {
    width: 100%;
  }
`

export const Background = styled(Flex)`
  overflow: scroll;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 40px);
  padding-bottom: 20px;
  @media (max-width: 830px) {
    height: calc(100% - 300px);
  }
`
