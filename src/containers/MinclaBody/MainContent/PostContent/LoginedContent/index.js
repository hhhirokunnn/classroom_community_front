import React, { useState, useRef } from 'react';

// import ActivityForm from "./ActivityForm"
// import StepForm from "./StepForm"
// import PreparationForm from "./PreparationForm"
import { createArticle } from "../../../../../services/MinclaClient"
import RegisterStepper from './RegisterStepper'
import RegisterStepperButton from './RegisterStepperButton'
// import FormContent from './FormContent'
import ActivityForm from "./FormContent/ActivityForm"
import StepsForm from "./FormContent/StepsForm"
import PreparationsForm from "./FormContent/PreparationsForm"

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
    const [preparationsParameter, setPreparationsParameter] = useState([])
    const [stepsParameter, setStepsParameter] = useState([])

    const [isInvalidActivityForm, setIsInvalidActivityForm] = useState(true)
    const [isInvalidPreparationForm, setIsInvalidPreparationForm] = useState(false)
    const [isInvalidStepForm, setIsInvalidStepForm] = useState(false)

    const send = () => {
      createArticle(articleParameter).then(res => res.data)
    }

    return (<>
      <RegisterStepper registerStep={registerStep}/>
      {registerStep === 0 &&  
        <ActivityForm 
          articleParameter={articleParameter} 
          setArticleParameter={setArticleParameter}
          setIsInvalidActivityForm={setIsInvalidActivityForm}/>}
      {registerStep === 1 &&
        <PreparationsForm 
          preparationsParameter={preparationsParameter} 
          setPreparationsParameter={setPreparationsParameter}
          isInvalidPreparationForm={isInvalidPreparationForm}
          setIsInvalidPreparationForm={setIsInvalidPreparationForm}/>}
      {registerStep === 2 &&
        <StepsForm 
          stepsParameter={stepsParameter} 
          setStepsParameter={setStepsParameter}
          isInvalidStepForm={isInvalidStepForm}
          setIsInvalidStepForm={setIsInvalidStepForm}/>}
      <RegisterStepperButton 
        registerStep={registerStep} 
        setRegisterStep={setRegisterStep}
        isInvalidActivityForm={isInvalidActivityForm}
        isInvalidPreparationForm={isInvalidPreparationForm}
        isInvalidStepForm={isInvalidStepForm} />
    </>)
}

export default LonginedContent
