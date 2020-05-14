import styled from 'styled-components'

export const ButtonBox = styled.div`
  // position: absolute;
  // top: -16px;
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}` }
`

export const ButtonIcon = styled.div`
  text-align: center;
  cursor: pointer;
`

export const ButtonLabel = styled.div`
  // color: ${props => props.isFocussed ? 'yellow' : 'white' };
  color: ${props => props.isFocussed ? '#03A829' : 'white' };
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

export const HomeIcon = styled.div`
  margin-top: -100px;
  border-radius: 25px;
  width: 34px;
  height: 34px;
  background: white;
  // background: ${props => props.isFocussed ? 'yellow' : 'white' };
  // border: 3px solid yellowgreen;
  border: 3px solid ${props => props.isFocussed ? '#03A829' : 'yellowgreen' };
  text-align: center;
  display: -webkit-inline-box;
  -webkit-box-pack: center;
  background-image: url(${props => props.icon});
  & svg {
    color: ${props => props.isFocussed ? '#03A829' : 'yellowgreen' };
  }
`
