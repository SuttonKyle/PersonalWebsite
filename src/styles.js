import styled from 'styled-components'

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
