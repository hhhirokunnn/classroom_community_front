import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const MinclaLargeTextField = ({ 
  rows,
  targetLabel, 
  targetValue, 
  inputTarget, 
  validateValue = ()=>{}, 
  width,
  marginBottom
}) => {

  const [errorMessage, setErrorMessage] = useState('')

  const doValidate = () => {
    const error = validateValue() || ""
    setErrorMessage(error)
  }

  return (
    <Box 
      display="block" 
      marginBottom={marginBottom}
      width={width}>
      {errorMessage.length > 0 ? 
        <TextField
          error
          label={targetLabel}
          value={targetValue}
          onChange={e => inputTarget(e.target.value)}
          onBlur={doValidate}
          helperText={errorMessage}
          multiline
          rows={rows}
          fullWidth={true}
        />: 
        <TextField
          label={targetLabel}
          value={targetValue}
          onChange={e => inputTarget(e.target.value)}
          onBlur={doValidate}
          multiline
          rows={rows}
          fullWidth={true}
        />}
    </Box>
  )
}

export default MinclaLargeTextField