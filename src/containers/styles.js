import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const MainContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  flex-shrink: 0;
`

export const ColumnContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: ${({ noLeftMargin }) => (noLeftMargin ? '0px' : '40px')};
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 830px) {
    margin-top: 40px;
    margin-left: 0px;
    flex-shrink: 0;
  }
`

export const RowContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  @media (max-width: 830px) {
    flex-direction: column;
  }
`

export const Photo = styled.img`
  width: 300px;
  height: auto;
  border: 3px solid white;
  @media (max-width: 830px) {
    width: calc(100% - 6px);
  }
`
