import styled from 'styled-components'
import { Home }  from '@styled-icons/boxicons-solid/Home'
import { Game }  from '@styled-icons/boxicons-solid/Game'
import { MailSend }  from '@styled-icons/remix-line/MailSend'
import { Questionnaire }  from '@styled-icons/remix-fill/Questionnaire'
import { Login }  from '@styled-icons/entypo/Login'
import { LogOut }  from '@styled-icons/entypo/LogOut'

export const LoginButtonBox = styled.div`
  cursor: pointer;
  margin-left: 64%;
  // padding-top: ${props => props.isFocussed ? '5px' : '8px' };
  // width: ${props => props.isFocussed ? '94px' : '90px' };
  padding-top: 8px;
  width: 108px;
`

export const StyledLoginButton = styled.div`
  color: ${props => props.isFocussed ? 'mediumseagreen' : 'yellowgreen' };
  ${props => props.isFocussed && 'border: 3px solid mediumseagreen'};
  // padding: ${props => props.isFocussed ? '5px 12px' : '5px 10px' };
  padding: 5px 10px;
  font-weight: bold;
  font-size: 16px;
  background-color: white;
  border-radius: 18px;
  text-align: center;
`

export const HomeSvg = styled(Home)`
  color:  ${props => props.isFocussed ? 'mediumseagreen' : 'yellowgreen' };;
  width: 30px;
  height: 30px;
  align-item: center;
`

export const GameSvg = styled(Game)`
  color:  ${props => props.isFocussed ? 'mediumseagreen' : 'yellowgreen' };;
  width: 30px;
  height: 30px;
  align-item: center;
`

export const MailSendSvg = styled(MailSend)`
  color:  ${props => props.isFocussed ? 'mediumseagreen' : 'yellowgreen' };;
  width: 30px;
  height: 30px;
  align-item: center;
`

export const QuestionnaireSvg = styled(Questionnaire)`
  color:  ${props => props.isFocussed ? 'mediumseagreen' : 'yellowgreen' };;
  width: 30px;
  height: 30px;
  align-item: center;
`

export const LoginSvg = styled(Login)`
  color:  ${props => props.isFocussed ? 'mediumseagreen' : 'yellowgreen' };;
  width: 30px;
  height: 30px;
  align-item: center;
`

export const LogoutSvg = styled(LogOut)`
  color:  ${props => props.isFocussed ? 'mediumseagreen' : 'yellowgreen' };;
  width: 30px;
  height: 30px;
  align-item: center;
`
