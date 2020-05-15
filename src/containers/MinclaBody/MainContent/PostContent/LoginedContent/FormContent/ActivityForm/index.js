import React, { useState, useRef, useEffect } from 'react';

import MinclaTextField from "../../../../../../../components/MinclaTextField"
import MinclaLargeTextField from "../../../../../../../components/MinclaLargeTextField"
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MinclaColorButton from '../../../../../../../components/MinclaColorButton'

const ActivityForm = ({ articleParameter, setArticleParameter, setIsInvalidActivityForm }) => {
  
  const [fileName, setFileName] = useState("")
  const [uploadType, setUploadType] = useState("image")
  
  const fileInput = useRef(null)

  useEffect(()=>{
    if(validateTitle().length > 0 || validateSummary().length > 0 || validateYoutubeLink().length > 0) {
      setIsInvalidActivityForm(true)
    } else {
      setIsInvalidActivityForm(false)
    }
  }, [articleParameter.title, articleParameter.summary, articleParameter.youtubeLink])

  const changeTitle = title => {
    setArticleParameter({...articleParameter , title})
  }

  const validateTitle = () => {
    if(articleParameter.title.length < 1) {
      return "入力してください"
    } else if(articleParameter.title.length > 300) {
      return "300文字以内で入力してください"
    }
    return ""
  }

  const changeSummary = summary => {
    setArticleParameter({...articleParameter , summary})
  }

  const validateSummary = () => {
    if(articleParameter.summary.length < 1) {
      return "入力してください"
    } else if(articleParameter.summary.length > 500) {
      return "500文字以内で入力してください"
    }
    return ""
  }

  const changeEstimatedTime = estimatedTime => {
    const v = estimatedTime > 0 ? estimatedTime : 0
    setArticleParameter({...articleParameter, estimatedTime: v})
  }

  const changeMemberUnit = memberUnit => {
    const v = memberUnit > 0 ? memberUnit : 0
    setArticleParameter({...articleParameter , memberUnit: v})
  }

  const changeYoutubeLink = youtubeLink => {
    setArticleParameter({...articleParameter , youtubeLink})
  }

  const validateYoutubeLink = () => {
    if(articleParameter.youtubeLink && !articleParameter.youtubeLink.includes("https://")) {
      return "URLを正しく入力してください"
    } 
    return ""
  }

  const uploadFile = e => {
    if(e.target) {
      setFileName(e.target.files[0].name)
      const file = fileInput.current.files[0]
      setArticleParameter({...articleParameter , image: file})
    }
  }

  const selectedUploadType = selectedType => {
    if(selectedType === "image") {
      setArticleParameter({...articleParameter , youtubeLink: ""})
      setUploadType(selectedType)
    }
    if(selectedType === "youtube") {
      setFileName("")
      setArticleParameter({...articleParameter , image: null})
      setUploadType(selectedType)
    }
  }
  
  return (<>
    <Box 
      component="div"
      marginLeft={{ xs: '10px', sm: '18%', md: "15%", lg: "20%" }}>
      <MinclaTextField 
        targetLabel={"タイトル*"} 
        targetValue={articleParameter.title} 
        inputTarget={changeTitle} 
        validateValue={validateTitle}
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
        marginBottom={"20px"}
      />
      <MinclaLargeTextField
        targetLabel={"概要*"} 
        targetValue={articleParameter.summary} 
        inputTarget={changeSummary} 
        validateValue={validateSummary}
        rows={6}
        width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }}
        marginBottom={"20px"}
      />
      <Box display="block" 
      width={{ 
        lg: '500px', 
        md: '450px', 
        sm: "350px", 
        xs: "300px" }} 
      marginBottom={'20px'}>
        <div style={{ display: 'inline-flex', float: 'left' }}>
            <MinclaTextField 
              targetLabel={"目安時間"} 
              targetValue={articleParameter.estimatedTime} 
              inputTarget={changeEstimatedTime} 
              width={{ xs: '80px', sm: '80px', md: "80px", lg: "80px" }} 
              type="number"
              marginBottom={"20px"}
              InputProps={{
                endAdornment: <InputAdornment position="end">分</InputAdornment>,
              }}
            />
          <Box 
            marginLeft={{ 
              lg: '40px', 
              md: '40px', 
              sm: "40px", 
              xs: "40px" }} >
            <MinclaTextField 
              targetLabel={"目安人数"} 
              targetValue={articleParameter.memberUnit} 
              inputTarget={changeMemberUnit} 
              width={{ xs: '80px', sm: '80px', md: "80px", lg: "80px" }} 
              marginBottom={"20px"}
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">人</InputAdornment>,
              }}/>
          </Box>
        </div>
      </Box>
      <Box display="block" 
           width={{ xs: '350px', sm: '350px', md: "500px", lg: "400px" }} 
           marginBottom={'20px'} textAlign='left'>
        <FormControl component="fieldset">
          <FormLabel component="legend">画像またはyoutubeURLどちらかのみ選択可能</FormLabel>
          <RadioGroup row defaultValue="image">
            <FormControlLabel
              value="image"
              control={<Radio color="primary" />}
              label="画像"
              labelPlacement="bottom"
              onChange={e => selectedUploadType(e.target.value)}
            />
            <FormControlLabel
              value="youtube"
              control={<Radio color="primary" />}
              label="youtubeURL"
              labelPlacement="bottom"
              onChange={e => selectedUploadType(e.target.value)}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {uploadType === 'image' && (
        <div style={{ textAlign: 'left', margin: '30px 0' }}>
          <MinclaColorButton component="label">
            <div style={{ color: 'white', fontWeight: 'bold' }}>
              画像のアップロード
            </div>
            <input
              style={{ display: 'none'}}
              ref={fileInput}
              onChange={e => uploadFile(e)}
              type="file"
              accept="image/*"
            />
          </MinclaColorButton>
          <div>{fileName && `ファイル名：${fileName}`}</div>
        </div>
      )}
      {uploadType === 'youtube' && (
        <MinclaTextField 
          targetLabel={"youtubeURL"} 
          targetValue={articleParameter.youtubeLink} 
          inputTarget={changeYoutubeLink} 
          validateValue={validateYoutubeLink}
          width={{ xs: '350px', sm: '450px', md: "500px", lg: "400px" }} 
          marginBottom={"20px"}
        />
      )}
    </Box>
  </>)
}

export default ActivityForm
