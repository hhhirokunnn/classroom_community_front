import React, { useState, useEffect } from 'react';

import { 
  Wrap,
  ContentTitle
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
          <Box display="block" marginBottom={3}>
            {mailError.length > 0 ? 
              <TextField
                error
                label="メールアドレス"
                value={mail}
                onChange={e => inputMail(e.target.value)}
                onBlur={validateMail}
                helperText={mailError}
              />: 
              <TextField
                label="メールアドレス"
                value={mail}
                onChange={e => inputMail(e.target.value)}
                onBlur={validateMail}
              />}
          </Box>
          <Box display="block" marginBottom={5}>
            {passwordError.length > 0 ? 
              <TextField
                error
                label="パスワード"
                value={password}
                onChange={e => inputPassword(e.target.value)}
                onBlur={validatePassword}
                helperText={passwordError}
              />: 
              <TextField
                label="パスワード"
                value={password}
                onChange={e => inputPassword(e.target.value)}
                onBlur={validatePassword}
              />}
          </Box>
        </form>
        {disabledButton ? 
          <Button variant="contained" disabled>ログイン</Button>
          : <Button variant="contained" onClick={requestLogin}>ログイン</Button>
        }
      </div>
    </Wrap>)
}

export default LoginContent
