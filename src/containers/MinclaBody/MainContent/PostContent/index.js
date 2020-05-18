import React from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription
}  from '../TopMainContent/style'

// import RegisterStepper from './LoginedContent/RegisterStepper'
// import RegisterStepperButton from './LoginedContent/RegisterStepperButton'
// import FormContent from './LoginedContent/FormContent'
import LonginedContent from './LoginedContent'

const PostContent = () => {

  const NotLoginedComponent = () => {
    
    return (<>
      <ContentTitle>
        ポスト
      </ContentTitle>
      <ContentDescription>
        ログインすると利用できます。
      </ContentDescription>
    </>)}

  return (
    <Wrap>
      {localStorage.getItem('token') ? <LonginedContent/> : <NotLoginedComponent/>}
    </Wrap>
    )
}

// const LoginedComponent = ({ registerStep, 
//   articleParameter, setArticleParameter,
//   preparationParameter, setPreparationParameter,
//   stepParameter, setStepParameter }) => {

//   return (<>
//     <RegisterStepper registerStep={registerStep}/>
//     <FormContent 
//       registerStep={registerStep}
//       articleParameter={articleParameter} 
//       setArticleParameter={setArticleParameter}
//       articleParameter={preparationParameter} 
//       setArticleParameter={setPreparationParameter}
//       stepParameter={stepParameter} 
//       setStepParameter={setStepParameter}/>
//     <RegisterStepperButton 
//       registerStep={registerStep} 
//       setRegisterStep={setRegisterStep} />
//   </>)
// }

export default PostContent
