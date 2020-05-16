import React, { useState, useEffect } from 'react';

import { 
  Wrap,
  ContentTitle,
  UserAddSvg
}  from '../TopMainContent/style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { login } from '../../../../services/MinclaClient'
import MinclaTextField from "../../../../components/MinclaTextField"

// import { 
//   StyledLoginForm
// }  from './style'

const LoginContent = ({ }) => {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [disabledButton, setDisabledButton] = useState(true)

  useEffect(()=>{
    validateButton()
  }, [mail, password])

  useEffect(()=>{
    setDisabledButton(true)
  }, [])

  const validateMail = () => {
    if(mail.length < 1) {
      return '入力してください'
    } else if(!mail.includes('@')) {
      return 'アドレスの形式ではありません'
    } 
    return ""
  }

  const inputMail = _inputtingMail => {
    setMail(_inputtingMail)
    validateMail(mail)
  }

  const validatePassword = () => {
    if(password.length < 1) {
      return '入力してください'
    } else { return '' }
  }

  const inputPassword = _inputtingPassword => {
    setPassword(_inputtingPassword)
    validatePassword(password)
  }

  const validateButton = () => {
    setDisabledButton(validateMail().length > 0)
  }

  const requestLogin = () => {
    login(mail, password)
  }

  return (
    <Wrap>
      <div>
        <ContentTitle>
          ログイン
        </ContentTitle>
        <Box 
          component="div"
          marginTop='50px'
          marginBottom='80px'
          marginLeft={{ xs: '10px', sm: '20%', md: "16%", lg: "24%" }}
          >
          <MinclaTextField 
            targetLabel={"メールアドレス"} 
            targetValue={mail} 
            inputTarget={inputMail}
            validateValue={validateMail}
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "20%" }}
            marginBottom={"20px"}
          />
          <Box marginBottom='50px' />
          <MinclaTextField 
            targetLabel={"パスワード"} 
            targetValue={mail} 
            inputTarget={inputPassword}
            validateValue={validatePassword}
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "20%" }}
            marginBottom={"20px"}
          />
        </Box>
        {disabledButton ? 
          <Button variant="contained" disabled>ログイン</Button>
          : <Button variant="contained" onClick={requestLogin}>ログイン</Button>}
        <div 
          onClick={() => window.location.href = '/sign-up'}
          style={{ marginTop: '30px', fontSize: '10px', marginBottom: '20px', color: 'salmon', fontWeight: 'bold' }}>
            登録はこちら
        </div>
      </div>
    </Wrap>)
}

export default LoginContent
