import React, { useState, useRef } from 'react';

import MinclaLargeTextField from "../MinclaLargeTextField"

const StepForm = ({ stepParameter, setStepParameter }) => {
  
  const changeDescription = description => {
    setStepParameter({...stepParameter , description})
  }

  const validateDescription = () => {
    if(stepParameter.description.length < 1) {
      return "入力してください"
    } else if(stepParameter.description.length > 20) {
      return "20文字以内で入力してください"
    }
    return ""
  }
  
  return (<>
    <div style={{ marginLeft: "20%"}}>
      <MinclaLargeTextField
        targetLabel={"ステップ1"} 
        targetValue={stepParameter.description} 
        inputTarget={changeDescription} 
        validateValue={validateDescription}
        marginBottom={"20px"}
        rows={3}
        width={"400px"}
      />
    </div>
  </>)
}

export default StepForm
