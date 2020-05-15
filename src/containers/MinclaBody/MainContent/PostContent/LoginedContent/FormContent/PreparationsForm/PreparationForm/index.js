import React, { useState, useRef, useEffect } from 'react';

import MinclaTextField from "../../../../../../../../components/MinclaTextField"
import MinclaLargeTextField from "../../../../../../../../components/MinclaLargeTextField"
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';

const PreparationForm = ({ preparationFormId, preparationsParameter, setPreparationsParameter }) => {

  const [preparationParameter, setPreparationParameter] = useState({
    preparation: "",
    item: null,
    itemUnit: null,
    url: null
  })
  
  const changePreparation = preparation => {
    setPreparationParameter({...preparationParameter , preparation})
  }

  useEffect(()=>{
    const me = preparationsParameter.filter(p => p.formId === preparationFormId)
    me.length > 0 && setPreparationParameter(me[0].param)
  },[])

  useEffect(()=>{
    const newParams = preparationsParameter.map(p => {
      if(p.formId === preparationFormId) {
        return { formId: preparationFormId, param: preparationParameter }
      } else if(p.formId !== preparationFormId) {
        return p
      }
    })
    setPreparationsParameter(newParams)
  },[preparationParameter])

  const validatePreparation = () => {
    if(preparationParameter.preparation.length < 1) {
      return "入力してください"
    } else if(preparationParameter.preparation.length > 500) {
      return "500文字以内で入力してください"
    }
    return ""
  }

  const changeItem = item => {
    setPreparationParameter({...preparationParameter , item})
  }

  const validateItem = () => {
    if(preparationParameter.item && preparationParameter.item.length > 100) {
      return "100文字以内で入力してください"
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
    <Box 
      component="div"
      marginLeft={{ xs: '10px', sm: '20%', md: "20%", lg: "20%" }}>
      <MinclaLargeTextField
        targetLabel={"じゅんび内容*"} 
        targetValue={preparationParameter.preparation} 
        inputTarget={changePreparation} 
        validateValue={validatePreparation}
        marginBottom={"20px"}
        rows={3}
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
      />
      <MinclaTextField 
        targetLabel={"物品名"} 
        targetValue={preparationParameter.item} 
        inputTarget={changeItem}
        validateValue={validateItem}
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
        marginBottom={"20px"}
      />
      <Box display="block" 
      width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
      marginBottom={'20px'}>
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
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
        marginBottom={"20px"}
      />
    </Box>
  </>)
}

export default PreparationForm
