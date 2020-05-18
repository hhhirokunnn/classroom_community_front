import React, { useState, useEffect } from 'react';

import { 
  Wrap,
  ContentTitle
}  from '../TopMainContent/style'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { signUp } from '../../../../services/MinclaClient'
import MinclaTextField from "../../../../components/MinclaTextField"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const SignUpContent = () => {

  const [userName, setUserName] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [disabledButton, setDisabledButton] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  const classes = useStyles();

  useEffect(()=>{
    const validateButton = () => {
      setDisabledButton(validateUserName().length > 1 || validateMail().length > 1 || validatePassword().length > 1)
    }
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

  const requestSingUp = () => {
    setOpenModal(true)
    signUp(userName, mail, password)
    setOpenModal(false)
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
            type='email'
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
            type='password'
            inputTarget={inputPassword}
            validateValue={validatePassword}
            width={{ xs: '300px', sm: '450px', md: "450px", lg: "450px" }} 
            marginLeft={{ xs: '30px', sm: '20%', md: "34%", lg: "20%" }}
            marginBottom={"20px"}
          />
        </Box>
        {disabledButton ? 
          <Button variant="contained" disabled>登録する</Button>
          : <Button variant="contained" onClick={requestSingUp}>登録する</Button>}
        <div 
          onClick={() => window.location.href = '/login'}
          style={{ marginTop: '30px', fontSize: '10px', marginBottom: '20px', color: 'salmon', fontWeight: 'bold' }}>
            ログインはこちら
        </div>
        <Backdrop className={classes.backdrop} open={openModal}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </Wrap>)
}
    /* font-family: "Tsukushi A Round Gothic","筑紫A丸ゴシック"; */
    /* font-family: "UD デジタル 教科書体 NP-R","UD Digi Kyokasho NP-R"; */
    /* font-family: "Droid Sans Fallback"; */
    // font-family: "Noto Sans Mono CJK JP";
export default SignUpContent
