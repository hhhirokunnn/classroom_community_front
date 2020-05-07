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

// import { 
//   StyledLoginForm
// }  from './style'

const LoginContent = ({ }) => {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [mailError, setMailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [disabledButton, setDisabledButton] = useState(true)

  useEffect(()=>{
    validateButton()
  }, [mailError, passwordError])

  useEffect(()=>{
    setDisabledButton(true)
  }, [])

  const validateMail = () => {
    mail.length > 0 ? setMailError('') : setMailError('入力してください')
    mail.includes('@') ? setMailError('') : setMailError('アドレスの形式ではありません')
  }

  const inputMail = _inputtingMail => {
    setMail(_inputtingMail)
    validateMail(mail)
  }

  const validatePassword = () => {
    password.length > 0 ? setPasswordError('') : setPasswordError('入力してください')
  }

  const inputPassword = _inputtingPassword => {
    setPassword(_inputtingPassword)
    validatePassword(password)
  }

  const validateButton = () => {
    setDisabledButton(mailError.length > 0 || passwordError.length > 0)
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
        <form noValidate autoComplete="off">
          <Box display="block" marginBottom={3} width='300px' marginLeft='34%'>
            {mailError.length > 0 ? 
              <TextField
                error
                label="メールアドレス"
                value={mail}
                onChange={e => inputMail(e.target.value)}
                onBlur={validateMail}
                helperText={mailError}
                fullWidth={true}
              />: 
              <TextField
                label="メールアドレス"
                value={mail}
                onChange={e => inputMail(e.target.value)}
                onBlur={validateMail}
                fullWidth={true}
              />}
          </Box>
          <Box display="block" marginBottom={5} width='300px' marginLeft='34%'>
            {passwordError.length > 0 ? 
              <TextField
                error
                label="パスワード"
                value={password}
                onChange={e => inputPassword(e.target.value)}
                onBlur={validatePassword}
                helperText={passwordError}
                fullWidth={true}
              />: 
              <TextField
                label="パスワード"
                value={password}
                onChange={e => inputPassword(e.target.value)}
                onBlur={validatePassword}
                fullWidth={true}
              />}
          </Box>
        </form>
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
