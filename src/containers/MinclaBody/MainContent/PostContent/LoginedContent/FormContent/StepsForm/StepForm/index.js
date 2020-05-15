import React, { useState, useRef, useEffect } from 'react';

import MinclaLargeTextField from "../../../../../../../../components/MinclaLargeTextField"
import MinclaColorButton from '../../../../../../../../components/MinclaColorButton'
import Box from '@material-ui/core/Box';

const StepForm = ({ stepFormId, stepsParameter, setStepsParameter }) => {

  const [stepParameter, setStepParameter] = useState({
    description: "",
    image: null
  })
  const [fileName, setFileName] = useState("")
  const fileInput = useRef(null)

  useEffect(()=>{
    const newParams = stepsParameter.map(p => {
      if(p.formId === stepFormId) {
        return { formId: stepFormId, param: stepParameter }
      } else if(p.formId !== stepFormId) {
        return p
      }
    })
    setStepsParameter(newParams)
  },[stepParameter])

  useEffect(()=>{
    const me = stepsParameter.filter(p => p.formId === stepFormId)
    if(me.length > 0) {
      setStepParameter(me[0].param)
      me[0].param.image && setFileName(me[0].param.image.name)
    }
  },[])

  const changeDescription = description => {
    setStepParameter({...stepParameter , description})
  }

  const validateDescription = () => {
    if(stepParameter.description.length < 1) {
      return "入力してください"
    } else if(stepParameter.description.length > 500) {
      return "500文字以内で入力してください"
    }
    return ""
  }

  const uploadFile = e => {
    if(e.target) {
      setFileName(e.target.files[0].name)
      const file = fileInput.current.files[0]
      setStepParameter({...stepParameter , image: file})
    }
  }
  
  return (<>
    <Box 
      component="div"
      marginLeft={{ xs: '10px', sm: '20%', md: "20%", lg: "20%" }}>
      <MinclaLargeTextField
        targetLabel={"ステップ"} 
        targetValue={stepParameter.description} 
        inputTarget={changeDescription} 
        validateValue={validateDescription}
        marginBottom={"20px"}
        rows={3}
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
      />
      <div style={{ textAlign: 'left', margin: '30px 0' }}>
          <MinclaColorButton component="label">
            <div style={{ color: 'white', fontWeight: 'bold' }}>
              画像のアップロード
            </div>
            <input
              style={{ display: 'none'}}
              ref={fileInput}
              onChange={e => uploadFile(e)}
              type="file"
              accept="image/*"
            />
          </MinclaColorButton>
          <div>{fileName && `ファイル名：${fileName}`}</div>
        </div>
    </Box>
  </>)
}

export default StepForm
