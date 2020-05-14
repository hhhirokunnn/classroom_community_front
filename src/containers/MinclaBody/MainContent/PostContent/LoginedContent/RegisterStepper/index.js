import React, { useState, useRef } from 'react';
import { 
  Wrap,
  NotCompleteStep, 
  CompleteStep,
  StepContent,
  StepBar, StepTitle, HorizenBar
} from "./style"

const RegisterStepper = ({ registerStep }) => {

  const isActivity = () => registerStep < 1
  const isPreparation = () => registerStep === 1
  const isStep = () => registerStep > 1

  return (
    <Wrap>
      <StepBar>
        <StepTitle selected={isActivity()}>
          <div>{isActivity() ? <CompleteStep>1</CompleteStep> : <NotCompleteStep>1</NotCompleteStep>}</div>
          <div style={{marginTop: '10px'}}>アクティビティ</div>
        </StepTitle>
        <HorizenBar/>
        <StepTitle selected={isPreparation()}>
          <div>{isPreparation() ? <CompleteStep>2</CompleteStep> : <NotCompleteStep>2</NotCompleteStep>}</div>
          <div style={{marginTop: '10px'}}>じゅんび</div>
        </StepTitle>
        <HorizenBar/>
        <StepTitle selected={isStep()}>
        <div>{isStep() ? <CompleteStep>3</CompleteStep> : <NotCompleteStep>3</NotCompleteStep>}</div>
          <div style={{marginTop: '10px'}}>ステップ</div>
        </StepTitle>
      </StepBar>
    </Wrap>
  );
}

export default RegisterStepper
