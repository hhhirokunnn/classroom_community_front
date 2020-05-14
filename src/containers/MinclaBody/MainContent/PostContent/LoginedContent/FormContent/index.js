// import React, { useState, useRef } from 'react';

// import ActivityForm from "./ActivityForm"
// import StepForm from "./StepForm"
// import PreparationForm from "./PreparationForm"

// const FormContent = ({ }) => {
  
//   const [registerStep, setRegisterStep] = useState(0)
//   const [articleParameter, setArticleParameter] = useState({
//     title: '',
//     summary: '',
//     estimatedTime: null,
//     memberUnit: null,
//     youtubeLink: null,
//     image: null
//   })
//   const [preparationParameter, setPreparationParameter] = useState([
//     {}
//   ])
//   const [stepParameter, setStepParameter] = useState([
//     {}
//   ])

//   // const send = () => {
//   //   createArticle(articleParameter)
//   // }

//   return (<>
//     {registerStep === 0 &&  
//       <ActivityForm 
//         articleParameter={articleParameter} 
//         setArticleParameter={setArticleParameter}/>}
//     {registerStep === 1 &&
//       <PreparationForm 
//         preparationParameter={preparationParameter} 
//         setPreparationParameter={setPreparationParameter}/>}
//     {registerStep === 2 &&
//       <StepForm 
//         stepParameter={stepParameter} 
//         setStepParameter={setStepParameter}/>}
//   </>);
// }

// export default FormContent
