import React, { useState, useRef } from 'react';

import MinclaTextField from "../MinclaTextField"
import MinclaLargeTextField from "../MinclaLargeTextField"
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MinclaColorButton from '../MinclaColorButton'

const PreparationForm = ({ preparationParameter, setPreparationParameter }) => {
  
  const changePreparation = preparation => {
    setPreparationParameter({...preparationParameter , preparation})
  }

  const validatePreparation = () => {
    if(preparationParameter.preparation.length < 1) {
      return "入力してください"
    } else if(preparationParameter.preparation.length > 20) {
      return "20文字以内で入力してください"
    }
    return ""
  }

  const changeItem = item => {
    setPreparationParameter({...preparationParameter , item})
  }

  const validateItem = () => {
    if(preparationParameter.item.length < 1) {
      return "入力してください"
    } else if(preparationParameter.item.length > 500) {
      return "500文字以内で入力してください"
    }
    return ""
  }

  const changeItemUnit = itemUnit => {
    const v = itemUnit > 0 ? itemUnit : 0
    setPreparationParameter({...preparationParameter, itemUnit: v})
  }

  const changeUrl = url => {
    setPreparationParameter({...preparationParameter , url})
  }
  
  return (<>
    <div style={{ marginLeft: "20%"}}>
      <MinclaLargeTextField
        targetLabel={"じゅんび内容*"} 
        targetValue={preparationParameter.preparation} 
        inputTarget={changePreparation} 
        // validateValue={validatePreparation}
        marginBottom={"20px"}
        rows={3}
        width={"400px"}
      />
      <MinclaTextField 
        targetLabel={"物品名"} 
        targetValue={preparationParameter.item} 
        inputTarget={changeItem}
        width={"300px"}
        marginBottom={"20px"}
      />
      <Box display="block" width={'400px'} marginBottom={'20px'}>
        <div style={{ display: 'inline-flex', float: 'left' }}>
            <MinclaTextField 
              targetLabel={"物品数"} 
              targetValue={preparationParameter.itemUnit} 
              inputTarget={changeItemUnit} 
              width={"70px"}
              type="number"
              marginBottom={"20px"}
              InputProps={{
                endAdornment: <InputAdornment position="end">個</InputAdornment>,
              }}
            />
        </div>
      </Box>
      <MinclaTextField 
        targetLabel={"物品のページ(URL)"} 
        targetValue={preparationParameter.url} 
        inputTarget={changeUrl} 
        width={"400px"}
        marginBottom={"20px"}
      />
    </div>
  </>)
}

export default PreparationForm
