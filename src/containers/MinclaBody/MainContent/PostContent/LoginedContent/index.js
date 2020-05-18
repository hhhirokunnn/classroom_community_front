import React, { useState, useEffect } from 'react';

import RegisterStepper from './RegisterStepper'
import RegisterStepperButton from './RegisterStepperButton'
import ActivityForm from "./FormContent/ActivityForm"
import StepsForm from "./FormContent/StepsForm"
import PreparationsForm from "./FormContent/PreparationsForm"
import { minclaAuthedBaseAxios } from "../../../../../services/MinclaClient"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

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
    
    const [openModal, setOpenModal] = useState(false)

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
      setOpenModal(true)
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
      {openModal && 
        <ProgressModal 
          openModal={openModal}
          setOpenModal={setOpenModal}
          articleParameter={articleParameter}
          preparationsParameter={preparationsParameter}
          stepsParameter={stepsParameter}
          createArticle={createArticle}
          createPreparation={createPreparation}
          createStep={createStep}
        />}
    </>)
}

const ProgressModal = ({
  openModal, 
  setOpenModal, 
  articleParameter, preparationsParameter, stepsParameter,
  createArticle, createPreparation, createStep}) => {
  
  const classes = useStyles();

  useEffect(()=>{
    createArticle(articleParameter).then(res => {
      const articleId = res.data.content.id
      
      preparationsParameter.forEach(p => {
        createPreparation({...p.param, articleId})
      })
      stepsParameter.forEach(p => {
        createStep({...p.param, articleId})
      })
      alert("作成が完了しました")
      setOpenModal(false)
    }).catch(e => {
        e.response ? alert(e.response.data.message) : alert("サーバに問題が発生しました。時間を置いてから再度アクセスしてください")
        setOpenModal(false)
    })
  },[])

  return (<Backdrop className={classes.backdrop} open={openModal}>
    <CircularProgress color="inherit" />
  </Backdrop>)
}


export default LonginedContent
