import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const RegisterStepperButton = ({ registerStep, setRegisterStep, isInvalidForm }) => {

  const registerStepUp = () => setRegisterStep(registerStep + 1)
  const registerStepDown = () => setRegisterStep(registerStep - 1)

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
        {registerStep === 0 && 
          <ColorButton 
            variant="contained" 
            color="primary" 
            style={{ color: "white", fontWeight: 'bold' }} 
            onClick={registerStepUp}>つぎへ</ColorButton>}
        {registerStep === 1 && 
          <ColorButton 
            variant="contained" 
            color="primary" 
            style={{ color: "white", fontWeight: 'bold' }} 
            onClick={registerStepUp}>つぎへ</ColorButton>}
        {registerStep === 2 && 
          <ColorButton 
            variant="contained" 
            color="primary" 
            style={{ color: "white", fontWeight: 'bold' }} 
            onClick={() =>alert('complete')}>とうろく</ColorButton> }
      </div>
    </>
    )
}

export default RegisterStepperButton