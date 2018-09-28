import styled from 'styled-components'
import { Flex } from 'grid-styled'

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
