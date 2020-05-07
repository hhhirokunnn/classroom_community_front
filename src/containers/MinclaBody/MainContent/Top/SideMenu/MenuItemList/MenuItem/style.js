import styled from 'styled-components'

export const Wrap = styled.div`
  margin: 10px 0;
  color: ${props => props.isFocussed ? 'salmon' : 'black'};
`
