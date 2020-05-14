import React, { useState, useRef } from 'react';

// import ActivityForm from "./ActivityForm"
// import StepForm from "./StepForm"
// import PreparationForm from "./PreparationForm"
import { createArticle } from "../../../../../services/MinclaClient"
import RegisterStepper from './RegisterStepper'
import RegisterStepperButton from './RegisterStepperButton'
// import FormContent from './FormContent'
import ActivityForm from "./FormContent/ActivityForm"
import StepForm from "./FormContent/StepForm"
import PreparationForm from "./FormContent/PreparationForm"

const LonginedContent = ({  }) => {

    const [registerStep, setRegisterStep] = useState(0)
    const [articleParameter, setArticleParameter] = useState({
      title: '',
      summary: '',
      estimatedTime: null,
      memberUnit: null,
      youtubeLink: null,
      image: null
    })
    const [preparationParameter, setPreparationParameter] = useState([
      {}
    ])
    const [stepParameter, setStepParameter] = useState([
      {}
    ])

    const [isInvalidForm, setIsInvalidForm] = useState(true)

    const send = () => {
      createArticle(articleParameter)
    }

    return (<>
      <RegisterStepper registerStep={registerStep}/>
      {registerStep === 0 &&  
        <ActivityForm 
          articleParameter={articleParameter} 
          setArticleParameter={setArticleParameter}/>}
      {registerStep === 1 &&
        <PreparationForm 
          preparationParameter={preparationParameter} 
          setPreparationParameter={setPreparationParameter}/>}
      {registerStep === 2 &&
        <StepForm 
          stepParameter={stepParameter} 
          setStepParameter={setStepParameter}/>}
      <RegisterStepperButton 
        registerStep={registerStep} 
        setRegisterStep={setRegisterStep}
        isInvalidForm={isInvalidForm} />
    </>)
    
  return (<>
    
  </>);
}

export default LonginedContent
