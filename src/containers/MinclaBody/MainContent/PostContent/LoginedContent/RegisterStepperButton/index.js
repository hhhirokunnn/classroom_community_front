import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#7EC101"),
    backgroundColor: "#7EC101",
    '&:hover': {
      backgroundColor: "#639703",
    },
  },
}))(Button);

const RegisterStepperButton = ({ 
  registerStep, 
  setRegisterStep, 
  isInvalidActivityForm,
  isInvalidPreparationForm,
  isInvalidStepForm,
  sendRequest
 }) => {

  const [openModal, setOpenModal] = useState(false)

  const classes = useStyles();

  const registerStepUp = () => setRegisterStep(registerStep + 1)
  const registerStepDown = () => setRegisterStep(registerStep - 1)

  const sendRegisterRequest = () => {
    setOpenModal(true)
    sendRequest()
    setOpenModal(false)
  }

  const ActivityNextButton = () => {

    return(<>
      {isInvalidActivityForm ? 
        <Button 
          variant="contained" 
          style={{ fontWeight: 'bold' }} 
          disabled>つぎへ</Button>
        : <ColorButton 
            variant="contained" 
            color="primary" 
            style={{ color: "white", fontWeight: 'bold' }} 
            onClick={registerStepUp}>つぎへ</ColorButton>}
    </>)
  }

  const PreparationNextButton = () => {

    return(<>
      {isInvalidPreparationForm ? 
        <Button 
          variant="contained" 
          style={{ fontWeight: 'bold' }} 
          disabled>つぎへ</Button>
        : <ColorButton 
            variant="contained" 
            color="primary" 
            style={{ color: "white", fontWeight: 'bold' }} 
            onClick={registerStepUp}>つぎへ</ColorButton>}
    </>)
  }

  const RegisterButton = () => {

    return(<>
      {isInvalidStepForm ? 
        <Button 
          variant="contained" 
          style={{ fontWeight: 'bold' }} 
          disabled>とうろく</Button>
        : <ColorButton 
            variant="contained" 
            color="primary" 
            style={{ color: "white", fontWeight: 'bold' }} 
            onClick={() => sendRegisterRequest()}>とうろく</ColorButton>}
    </>)
  }
  
  return (
    <>
      <div style={{ display: 'inline-flex' }}>
        {registerStep > 0 ? 
          <Button 
            variant="contained" 
            style={{ fontWeight: 'bold' }} 
            onClick={registerStepDown}>もどる</Button> 
          : <Button 
              variant="contained" 
              style={{ fontWeight: 'bold' }} 
              disabled>もどる</Button>}
        <div style ={{ marginRight: "30px" }} />
        {registerStep === 0 && <ActivityNextButton/>}
        {registerStep === 1 && <PreparationNextButton/>}
        {registerStep === 2 && <RegisterButton /> }
      </div>
      <Backdrop className={classes.backdrop} open={openModal}>
          <CircularProgress color="inherit" />
        </Backdrop>
    </>
    )
}

export default RegisterStepperButton