import React, { useState, useRef } from 'react';
import axios from 'axios';

import { 
  Wrap,
  ContentTitle,
  ContentDescription,
  ContentImg
}  from '../TopMainContent/style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

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

  const [formData, setFormData] = useState({
    userId: 1,
    title: '',
    summary: '',
    estimatedTime: null,
    memberUnit: null,
    youtubeLink: null,
  })
  const fileInput = useRef(null)

  const LoginedComponent = () => {
    const send = () => {
      const formData = new FormData()
      const file = fileInput.current.files[0]
      formData.append('image', file)
      formData.append('title', 'aaa')
      formData.append('summary', 'aaa')
      formData.append('userId', 26)
      // formData.append('article', {
      //   title: "aaa",
      //   summary: "aaa",
      //   userId: 21,
      //   image: file
      // })
  
      return axios.create({
        baseURL: 'http://localhost:8080/api',
        headers: {
          // 'enctype': 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
          'Authorization': localStorage.getItem('token')
        }
      }).post('/articles', formData)
    }

    const changeTitle = title => {
      setFormData({...formData , title})
    }
  
    const changeSummary = summary => {
      setFormData({...formData , summary})
    }
  
    const changeEstimatedTile = estimatedTime => {
      setFormData({...formData, estimatedTime})
    }
  
    const changeMemberUnit = memberUnit => {
      setFormData({...formData , memberUnit})
    }
  
    const changeYoutubeLink = youtubeLink => {
      setFormData({...formData , youtubeLink})
    }
    
    return (<>
      title
      <input type="text" name="title" value={formData.title} onChange={e => changeTitle(e.target.value)}/>
      summary
      <input type="text" name="summary" value={formData.summary} onChange={e => changeSummary(e.target.value)}/>
      estimatedTime
      <input type="text" name="estimatedTime" value={formData.estimatedTime} onChange={e => changeEstimatedTile(e.target.value)}/>
      memberUnit
      <input type="text" name="memberUnit" value={formData.memberUnit} onChange={e => changeMemberUnit(e.target.value)}/>
      youtubeLink
      <input type="text" name="youtubeLink" value={formData.youtubeLink} onChange={e => changeYoutubeLink(e.target.value)}/>
      file
      <input type="file" name="iamge" ref={fileInput}/>
      <div onClick={send} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>送信ボタン</div>
    </>)
  }

  return (
    <Wrap>
      {localStorage.getItem('token') ? <LoginedComponent/> : <NotLoginedComponent />}
    </Wrap>
      
    )
}

export default PostContent
