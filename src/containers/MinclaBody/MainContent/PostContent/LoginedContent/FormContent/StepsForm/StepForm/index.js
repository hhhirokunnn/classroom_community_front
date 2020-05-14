import React, { useState, useRef, useEffect } from 'react';

import MinclaLargeTextField from "../../MinclaLargeTextField"
import MinclaColorButton from '../../MinclaColorButton'

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
    } else if(stepParameter.description.length > 100) {
      return "100文字以内で入力してください"
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
    <div style={{ marginLeft: "20%"}}>
      <MinclaLargeTextField
        targetLabel={"ステップ"} 
        targetValue={stepParameter.description} 
        inputTarget={changeDescription} 
        validateValue={validateDescription}
        marginBottom={"20px"}
        rows={3}
        width={"400px"}
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
            />
          </MinclaColorButton>
          <div>{fileName && `ファイル名：${fileName}`}</div>
        </div>
    </div>
  </>)
}

export default StepForm
