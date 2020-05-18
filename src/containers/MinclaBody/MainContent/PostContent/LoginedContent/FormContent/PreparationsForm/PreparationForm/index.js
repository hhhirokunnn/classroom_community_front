import React, { useState, useEffect } from 'react';

import MinclaTextField from "../../../../../../../../components/MinclaTextField"
import MinclaLargeTextField from "../../../../../../../../components/MinclaLargeTextField"
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';

const PreparationForm = ({ preparationParameter, preparationsParameter, setPreparationsParameter }) => {

  const [param, setPram] = useState(preparationParameter.param)
  
  const changePreparation = preparation => {
    setPram({...param , preparation})
  }  

  useEffect(()=>{
    const newParams = preparationsParameter.map(p => {
      if(p.formId === preparationParameter.formId) {
        return { formId: preparationParameter.formId ,param}
      } else {
        return p
      }
    })
    console.log(newParams)
    setPreparationsParameter(newParams)
  },[param])

  const validatePreparation = () => {
    if(param.preparation.length < 1) {
      return "入力してください"
    } else if(param.preparation.length > 500) {
      return "500文字以内で入力してください"
    }
    return ""
  }

  const changeItem = item => {
    setPram({...param , item})
  }

  const validateItem = () => {
    if(param.item && param.item.length > 100) {
      return "100文字以内で入力してください"
    }
    return ""
  }

  const changeItemUnit = itemUnit => {
    const v = itemUnit > 0 ? itemUnit : 0
    setPram({...param, itemUnit: v})
  }

  const changeUrl = url => {
    setPram({...param , url})
  }
  
  return (<>
    <Box 
      component="div"
      marginLeft={{ xs: '10px', sm: '20%', md: "20%", lg: "20%" }}>
      <MinclaLargeTextField
        targetLabel={"じゅんび内容*"} 
        targetValue={param.preparation} 
        inputTarget={changePreparation} 
        validateValue={validatePreparation}
        marginBottom={"20px"}
        rows={3}
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
      />
      <MinclaTextField 
        targetLabel={"物品名"} 
        targetValue={param.item} 
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
              targetValue={param.itemUnit} 
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
        targetValue={param.url} 
        inputTarget={changeUrl} 
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
        marginBottom={"20px"}
      />
    </Box>
  </>)
}

export default PreparationForm
