import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const MinclaTextField = ({ 
  targetLabel, 
  targetValue, 
  inputTarget, 
  validateValue = ()=>{}, 
  width,
  marginBottom,
  type,
  InputProps,
}) => {

  const [errorMessage, setErrorMessage] = useState('')

  const doValidate = () => {
    const error = validateValue() || ""
    setErrorMessage(error)
  }

  return (
    <Box 
      display="block" 
      width={width}
      marginBottom={marginBottom}>
      {errorMessage.length > 0 ? 
        <TextField
          error
          label={targetLabel}
          value={targetValue}
          onChange={e => inputTarget(e.target.value)}
          onBlur={doValidate}
          helperText={errorMessage}
          fullWidth={true}
          type={type}
          InputProps={InputProps}
          InputLabelProps={{
            shrink: true,
          }}
        />: 
        <TextField
          label={targetLabel}
          value={targetValue}
          onChange={e => inputTarget(e.target.value)}
          onBlur={doValidate}
          fullWidth={true}
          type={type}
          InputProps={InputProps}
          InputLabelProps={{
            shrink: true,
          }}
        />}
    </Box>
  )
}

export default MinclaTextField