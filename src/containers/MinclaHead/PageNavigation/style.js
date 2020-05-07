import styled from 'styled-components'
import { Home }  from '@styled-icons/boxicons-solid/Home'

export const LoginButtonBox = styled.div`
  cursor: pointer;
  margin-left: 64%;
  padding-top: ${props => props.isFocussed ? '5px' : '8px' };
  width: ${props => props.isFocussed ? '94px' : '90px' };
`

export const LoginButton = styled.div`
  color: ${props => props.isFocussed ? 'salmon' : 'mediumseagreen' };
  ${props => props.isFocussed && 'border: 3px solid salmon'};
  padding: ${props => props.isFocussed ? '5px 12px' : '5px 10px' };
  font-weight: bold;
  font-size: 16px;
  background-color: white;
  border-radius: 18px;
  text-align: center;
`

export const HomeSvg = styled(Home)`
  color: mediumseagreen;
  width: 30px;
  height: 30px;
  align-item: center;
`
