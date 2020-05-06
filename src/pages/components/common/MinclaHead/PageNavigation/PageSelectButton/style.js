import styled from 'styled-components'

export const ButtonBox = styled.div`
  position: absolute;
  top: -16px;
  cursor: pointer;
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}` }
`

export const ButtonIcon = styled.div`
  text-align-last: center;
`

export const ButtonLabel = styled.div`
  color: ${props => props.isFocussed ? 'salmon' : 'white' };
  font-weight: bold;
  font-size: 16px;
`

export const HomeIcon = styled.div`
  margin-top: -100px;
  border-radius: 25px;
  width: 34px;
  height: 34px;
  background: ${props => props.isFocussed ? 'salmon' : 'white' };
  border: 3px solid mediumseagreen;
  text-align: center;
  display: -webkit-inline-box;
  -webkit-box-pack: center;
  background-image: url(${props => props.icon});
`
