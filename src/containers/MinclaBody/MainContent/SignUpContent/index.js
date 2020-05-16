import React, { useState, useEffect } from 'react';

import { 
  Wrap,
  ContentTitle,
  UserAddSvg
}  from '../TopMainContent/style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { signUp } from '../../../../services/MinclaClient'
import MinclaTextField from "../../../../components/MinclaTextField"

// import { 
//   StyledLoginForm
// }  from './style'

const SignUpContent = ({ }) => {

  const [userName, setUserName] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [disabledButton, setDisabledButton] = useState(true)

  useEffect(()=>{
    validateButton()
  }, [userName, mail, password])

  useEffect(()=>{
    setDisabledButton(true)
  }, [])

  const validateUserName = () => {
    if(userName.length < 1) {
      return '入力してください'
    } else if(userName.length > 30) {
      return '30文字以内にしてください'
    } else { return '' }
  }

  const inputUserName = _inputtingUserName => {
    setUserName(_inputtingUserName)
    validateMail(userName)
  }

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
    setDisabledButton(validateUserName().length > 1 || validateMail().length > 1 || validatePassword().length > 1)
  }

  const requestSingUp = () => {
    signUp(userName, mail, password)
  }

  return (
    <Wrap>
      <div>
        <ContentTitle>
          ユーザ登録
        </ContentTitle>
        <Box 
          component="div"
          marginTop='50px'
          marginBottom='80px'
          marginLeft={{ xs: '10px', sm: '20%', md: "16%", lg: "24%" }}
          >
          <MinclaTextField 
            targetLabel={"なまえ"} 
            targetValue={userName} 
            inputTarget={inputUserName}
            validateValue={validateUserName}
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "20%" }}
            marginBottom={"20px"}
          />
          <Box marginBottom='50px' />
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
            targetValue={password} 
            inputTarget={inputPassword}
            validateValue={validatePassword}
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "20%" }}
            marginBottom={"20px"}
          />
        </Box>
        {/* <form noValidate autoComplete="off"> */}
          {/* <Box display="block" marginBottom={3} 
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "34%" }}>
            {userNameError.length > 0 ? 
              <TextField
                error
                label="なまえ"
                value={userName}
                onChange={e => inputUserName(e.target.value)}
                onBlur={validateUserName}
                helperText={userNameError}
                fullWidth={true}
              />: 
              <TextField
                label="なまえ"
                value={userName}
                onChange={e => inputUserName(e.target.value)}
                onBlur={validateUserName}
                fullWidth={true}
              />}
          </Box> */}
          {/* <Box display="block" marginBottom={3}
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "34%" }}>
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
          <Box display="block" marginBottom={5} 
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "34%" }}>
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
          </Box> */}
        {/* </form> */}
        {disabledButton ? 
          <Button variant="contained" disabled>登録する</Button>
          : <Button variant="contained" onClick={requestSingUp}>登録する</Button>}
        <div 
          onClick={() => window.location.href = '/login'}
          style={{ marginTop: '30px', fontSize: '10px', marginBottom: '20px', color: 'salmon', fontWeight: 'bold' }}>
            ログインはこちら
        </div>
      </div>
    </Wrap>)
}

export default SignUpContent
