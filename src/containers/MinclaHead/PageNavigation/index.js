import React, { useState,  } from 'react';
import { 
  LoginButtonBox, 
  StyledLoginButton, 
  HomeSvg,
  GameSvg,
  MailSendSvg,
  QuestionnaireSvg,
  LoginSvg,
  LogoutSvg
} from './style'
import PageSelectButton from './PageSelectButton'
import { logout } from '../../../services/MinclaClient'
import Box from '@material-ui/core/Box';

const PageNavigation = () => {

  const [isFocussed, setIsFocussed] = useState(false)

  const LoginButton = () => {

    const renderToMyPath = () => {
      window.location.href = `/login`
    }

    return (
      <LoginButtonBox 
        onMouseOver={() => setIsFocussed(true)} 
        onMouseOut={() => setIsFocussed(false)} 
        isFocussed={isFocussed}
        onClick={renderToMyPath}>
        <StyledLoginButton isFocussed={isFocussed}>
          ログイン
        </StyledLoginButton>
      </LoginButtonBox>
    )
  }

  const LogoutButton = () => {

    return (
      <LoginButtonBox 
        onMouseOver={() => setIsFocussed(true)} 
        onMouseOut={() => setIsFocussed(false)} 
        isFocussed={isFocussed}
        onClick={logout}>
        <StyledLoginButton isFocussed={isFocussed}>
          ログアウト
        </StyledLoginButton>
      </LoginButtonBox>
    )
  }

  return (<>
    <Box 
      display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
      marginLeft={{ xs: '10%', sm: '10%', md: "22%", lg: "24%" }}>
      <PageSelectButton label='トップページ' svgComponent={<HomeSvg/>} selfPath='top'/>
    </Box>
    <Box 
      display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}
      marginLeft={{ xs: '5%', sm: '0%', md: "0%", lg: "0%" }}>
      <PageSelectButton label='' svgComponent={<HomeSvg/>} selfPath='top'/>
    </Box>
    <Box 
      display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
      marginLeft={{ xs: '20%', sm: '26%', md: "34%", lg: "36%" }}>
      <PageSelectButton label='アクティビティ' svgComponent={<GameSvg/>} selfPath='activity'/>
    </Box>
    <Box 
      display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}
      marginLeft={{ xs: '24%', sm: '0%', md: "0%", lg: "0%" }}>
      <PageSelectButton label='' svgComponent={<GameSvg/>} selfPath='activity'/>
    </Box>
    <Box 
      display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
      marginLeft={{ xs: '22%', sm: '46%', md: "49%", lg: "49%" }}>
      <PageSelectButton label='ポスト' svgComponent={<MailSendSvg/>} selfPath='post'/>
    </Box>
    <Box 
      display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}
      marginLeft={{ xs: '44%', sm: '0%', md: "0%", lg: "0%" }}>
      <PageSelectButton label='' svgComponent={<MailSendSvg/>} selfPath='post'/>
    </Box>
    <Box 
      display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
      marginLeft={{ xs: '10%', sm: '58%', md: "58%", lg: "58%" }}>
      <PageSelectButton label='おといあわせ' svgComponent={<QuestionnaireSvg/>} selfPath='inquiry'/>
    </Box>
    <Box 
      display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}
      marginLeft={{ xs: '63%', sm: '0%', md: "0%", lg: "0%" }}>
      <PageSelectButton label='' svgComponent={<QuestionnaireSvg/>} selfPath='inquiry'/>
    </Box>
    <Box 
      display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
      marginLeft={{ sm: '36%', md: "18%", lg: "18%" }}>
      {localStorage.getItem('token') ? <LogoutButton/> : <LoginButton/>}
    </Box>
    <Box 
      display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}
      height={'40px'}
      marginLeft={{ xs: '81%', sm: '0%', md: "0%", lg: "0%" }}>
      {localStorage.getItem('token') ? 
      <PageSelectButton label='' svgComponent={<LogoutSvg/>} selfPath='login'/>
      : <PageSelectButton label='' svgComponent={<LoginSvg/>} selfPath='login'/>}
      
    </Box>
  </>)
}

export default PageNavigation
