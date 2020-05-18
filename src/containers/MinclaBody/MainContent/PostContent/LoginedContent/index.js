import React, { useState } from 'react';

import RegisterStepper from './RegisterStepper'
import RegisterStepperButton from './RegisterStepperButton'
import ActivityForm from "./FormContent/ActivityForm"
import StepsForm from "./FormContent/StepsForm"
import PreparationsForm from "./FormContent/PreparationsForm"
import { minclaAuthedBaseAxios } from "../../../../../services/MinclaClient"

const LonginedContent = ({  }) => {

    const [registerStep, setRegisterStep] = useState(0)
    const [articleParameter, setArticleParameter] = useState({
      title: '',
      summary: '',
      // estimatedTime: null, comment out for warning
      // memberUnit: null,
      // youtubeLink: null,
      // image: null
    })
    const [preparationsParameter, setPreparationsParameter] = useState([])
    const [stepsParameter, setStepsParameter] = useState([])

    const [isInvalidActivityForm, setIsInvalidActivityForm] = useState(true)
    const [isInvalidPreparationForm, setIsInvalidPreparationForm] = useState(false)
    const [isInvalidStepForm, setIsInvalidStepForm] = useState(false)

    const createArticle = ({title, summary, estimatedTime, memberUnit, youtubeLink, image}) => {

      const formData = new FormData()
      
      formData.append('title', title)
      formData.append('summary', summary)
      if(image) formData.append('image', image)
      if(estimatedTime) formData.append('estimatedTime', estimatedTime)
      if(memberUnit) formData.append('memberUnit', memberUnit)
      if(youtubeLink) formData.append('youtubeLink', youtubeLink)
      
      return minclaAuthedBaseAxios().post('/articles', formData)
    }

    const createPreparation = ({preparation, item, itemUnit, url, articleId}) => {
      console.log("{preparation, item, itemUnit, url, articleId}")
      console.log(preparation)
      console.log(articleId)
      minclaAuthedBaseAxios().post('/materials', {
        preparation,
        item,
        itemUnit,
        url,
        articleId
      }).catch(e => {
        e.response ? alert(e.response.data.message) : alert("サーバに問題が発生しました。時間を置いてから再度アクセスしてください")
      })
    }

    const createStep = ({description, image, articleId}) => {
      const formData = new FormData()
      
      formData.append('articleId', articleId)
      formData.append('description', description)
      if(image) formData.append('image', image)
      console.log("formData")
      console.log(formData)
      
      minclaAuthedBaseAxios().post('/steps', formData).catch(e => {
        e.response ? alert(e.response.data.message) : alert("サーバに問題が発生しました。時間を置いてから再度アクセスしてください")
      })
    }

    const sendRequest = () => {
      createArticle(articleParameter).then(res => {
        console.log(res)
        console.log(res.data)
        console.log(res.data.content)
        console.log(res.data.content.id)
        const articleId = res.data.content.id
        
        preparationsParameter.forEach(p => {
          createPreparation({...p.param, articleId})
        })
        stepsParameter.forEach(p => {
          createStep({...p.param, articleId})
        })
        alert("作成が完了しました")
        }).catch(e => {
          e.response ? alert(e.response.data.message) : alert("サーバに問題が発生しました。時間を置いてから再度アクセスしてください")
      })
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
        isInvalidStepForm={isInvalidStepForm}
        sendRequest={sendRequest}/>
    </>)
}

export default LonginedContent
