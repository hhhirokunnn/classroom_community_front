import React, { useState, useRef, useEffect } from 'react';

import { AddCircle } from "@styled-icons/material-sharp/AddCircle";
import { Delete } from "@styled-icons/typicons/Delete";
import Button from '@material-ui/core/Button';
import StepForm from './StepForm'
import Box from '@material-ui/core/Box';

const StepsForm = ({ stepsParameter, setStepsParameter, isInvalidStepForm, setIsInvalidStepForm }) => {

  useEffect(()=>{
    if(stepsParameter.some(p => p.param.description < 1)) {
      setIsInvalidStepForm(true)
    } else if(stepsParameter.some(p => p.param.description > 100)) {
      setIsInvalidStepForm(true)
    } else {
      setIsInvalidStepForm(false)
    }
  }, [stepsParameter])

  const paramSize = () => stepsParameter.length

  const removeStepParameter = formId => {
    const newParam = stepsParameter.filter(param => param.formId !== formId )
    setStepsParameter(newParam)
    if(stepsParameter.lenght < 1) {
      setIsInvalidStepForm(false)
    }
  }
  
  const appendStepParameter = () => {
    const appendParam = { formId: paramSize() + 1, param: { description: ""} }
    const newParam = stepsParameter.concat(appendParam)
    setStepsParameter(newParam)
  }

  return (<>
    {stepsParameter.map((param, index) => {
      return (<>
        <StepForm 
          key={index}
          stepFormId={param.formId}
          stepsParameter={stepsParameter}
          setStepsParameter={setStepsParameter}/>
        <Box display="block" textAlign='left' marginLeft='18%'>
          <Button onClick={() => removeStepParameter(param.formId)}>
            <div><Delete width='35px' height='35px' color='yellowgreen'/></div>
            <div> ステップを取り消し</div>
          </Button>
        </Box>
      </>)
    })}
    {/* {!stepsParameter[0] && <>
      <Box display="block" textAlign='left' marginLeft='18%'>
        <Button onClick={appendStepParameter}>
          <div><AddCircle width='30px' height='30px' color='yellowgreen'/></div>
          <div>じゅんびを追加</div>
        </Button>
      </Box></>}
      {JSON.stringify(stepsParameter)}
    {!!!stepsParameter.some(p => p.param.step.length < 1 ) && <>
      <Box display="block" textAlign='left' marginLeft='18%'>
        <Button onClick={appendStepParameter}>
          <div><AddCircle width='30px' height='30px' color='yellowgreen'/></div>
          <div>じゅんびを追加</div>
        </Button>
      </Box></>} */}
      {stepsParameter.length < 5 && !isInvalidStepForm && <>
        <Box display="block" textAlign='left' marginLeft='18%'>
          <Button onClick={appendStepParameter}>
            <div><AddCircle width='30px' height='30px' color='yellowgreen'/></div>
            <div>ステップを追加</div>
          </Button>
        </Box>
      </>}
        

  </>)
}

export default StepsForm
