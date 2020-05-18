import React, { useEffect } from 'react';

import { AddCircle } from "@styled-icons/material-sharp/AddCircle";
import { Delete } from "@styled-icons/typicons/Delete";
import Button from '@material-ui/core/Button';
import PreparationForm from './PreparationForm'
import Box from '@material-ui/core/Box';

const PreparationsForm = ({ preparationsParameter, setPreparationsParameter, isInvalidPreparationForm, setIsInvalidPreparationForm }) => {

  useEffect(()=>{
    if(preparationsParameter.some(p => p.param.preparation < 1)) {
      setIsInvalidPreparationForm(true)
    } else if(preparationsParameter.some(p => p.param.preparation > 500)) {
      setIsInvalidPreparationForm(true)
    } else if(preparationsParameter.some(p => p.param.item > 100)) {
      setIsInvalidPreparationForm(true)
    } else {
      setIsInvalidPreparationForm(false)
    }
  }, [preparationsParameter])

  const paramSize = () => preparationsParameter.length

  const removePreparationParameter = formId => {
    const newParam = preparationsParameter.filter(param => param.formId !== formId )
    setPreparationsParameter(newParam)
    if(preparationsParameter.lenght < 1) {
      setIsInvalidPreparationForm(false)
    }
  }
  
  const appendPreparationParameter = () => {
    const appendParam = { formId: paramSize() + 1, param: { preparation: ""} }
    const newParam = preparationsParameter.concat(appendParam)
    setPreparationsParameter(newParam)
    if(preparationsParameter.some(p => p.preparation < 1)) {
      setIsInvalidPreparationForm(true)
    }
  }

  return (<>
    {preparationsParameter.map((param, index) => {
      return (<PreparationFormSet
        key={index}
        preparationParameter={param}
        preparationFormId={param.formId}
        preparationsParameter={preparationsParameter}
        removePreparationParameter={removePreparationParameter}
        setPreparationsParameter={setPreparationsParameter}/>)
    })}
      {preparationsParameter.length < 5 && !isInvalidPreparationForm && <>
        <Box display="block" textAlign='left' marginLeft='18%'>
          <Button onClick={appendPreparationParameter}>
            <div><AddCircle width='30px' height='30px' color='yellowgreen'/></div>
            <div>じゅんびを追加</div>
          </Button>
        </Box>
      </>}
  </>)
}

const PreparationFormSet = ({ 
  preparationParameter,
  preparationFormId,
  preparationsParameter,
  setPreparationsParameter,
  removePreparationParameter
}) => {

  return (<>
    <PreparationForm 
      preparationFormId={preparationFormId}
      preparationParameter={preparationParameter}
      preparationsParameter={preparationsParameter}
      setPreparationsParameter={setPreparationsParameter}/>
    <Box display="block" textAlign='left' marginLeft='18%'>
      <Button onClick={() => removePreparationParameter(preparationFormId)}>
        <div><Delete width='35px' height='35px' color='yellowgreen'/></div>
        <div>じゅんびを取り消し</div>
      </Button>
    </Box>
  </>)
}

export default PreparationsForm
