import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Home }  from '@styled-icons/boxicons-solid/Home'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import MinclaHead from './pages/components/common/MinclaHead'

function App() {
  const [formData, setFormData] = useState({
    userId: 1,
    title: '',
    summary: '',
    estimatedTime: null,
    memberUnit: null,
    youtubeLink: null,
  })

  const fileInput = useRef(null)

  const click = () => {
    return axios.post('http://localhost:8080/api/login', 
      { mail: "m999hiro@gmail.com", password: "ccc" })
      .then(res => {
        saveTokenToStorage(res.data.content.token)
        alert(res.data.message)
      })
      .catch(e => console.log(e))
  }

  const axiosGetWithHeader = () => {
    axios.get('http://localhost:8080/api/articles',{
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res)
      alert(res.data.message)
    }).catch(e => {
      console.log(e)
      alert(e.response.data.message)
    })
  }

  const axiosPostWithHeader = () => {
    
    axios.post('http://localhost:8080/api/articles',{
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res)
      alert(res.data.message)
    }).catch(e => {
      console.log(e)
      alert(e.response.data.message)
    })
  }

  const logout = () => {
    
    return axios.delete('http://localhost:8080/api/logout')
      .then(res => {
        console.log(res)
        localStorage.removeItem('token')
        alert(res.data.message)
      })
      .catch(e => console.log(e))
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

  const saveTokenToStorage = token => localStorage.setItem('token', token)

  const viewTreeclasses = useViewTreeStyles();

  const [isChecked, setIsChecked] = useState(true)

  return (
    <div className="App">
      {/* hello!
      <div onClick={click} style={{ width: '100px', height: '100px', backgroundColor: 'lightgreen' }}>LOG-IN</div>
      <div onClick={axiosGetWithHeader} style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}>CLICK HERE</div>
      <div onClick={logout} style={{ width: '100px', height: '100px', backgroundColor: 'lightgray' }}>LOG-OUT</div>
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
      <div onClick={send} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>送信ボタン</div> */}
      {/* wrap */}
      <div>
        {/* head */}
        <MinclaHead />
        {/* body wrap */}
        <div style={{ display: 'block', backgroundColor: 'lemonchiffon', height: '880px'}}>
          {/* body */}
          <div style={{ display: 'flex', paddingTop: '30px' }}>
            {/* left content */}
            <div style={{ width: '18%', marginLeft: '30px' }}>
              {/* left menu */}  
              <div>
                {/* ikko ooi */}
                <div>
                  {/* mokuji box */}
                  <div style={{ marginBottom: '20px' }}>
                    {/* mokuji title box */}
                    <div style={{ borderBottom: '3px dotted goldenrod', width: '80%', fontSize: '18px', paddingBottom: '5px' }}>
                      <strong style={{ color: 'salmon', padding: '0 5px 0 5px' }}>▼</strong><strong style={{}}>もくじ</strong>  
                    </div>
                    {/* mokuji list box */}
                    <div style={{ paddingLeft: '15px', fontSize: '12px', fontWeight: 'bold' }}>
                      <div style={{ margin: '10px 0 10px 0' }}>オンラインクラスルームとは？</div>
                      <div style={{ margin: '10px 0 10px 0' }}>準備</div>
                      <div style={{ margin: '10px 0 10px 0' }}>やってみる</div>
                      <div style={{ margin: '10px 0 10px 0' }}>さいごに</div>
                    </div>
                  </div>
                  {/* activity box */}
                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ borderBottom: '3px dotted goldenrod', width: '80%', fontSize: '18px', paddingBottom: '5px' }}>
                      <strong style={{ color: 'salmon', padding: '0 5px 0 5px'}}>▶︎</strong><strong>アクティビティとは？</strong>
                    </div>
                  </div>
                  {/* post box */}
                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ borderBottom: '3px dotted goldenrod', width: '80%', fontSize: '18px', paddingBottom: '5px' }}>
                      <strong style={{ color: 'salmon', padding: '0 5px 0 5px'}}>▶︎</strong><strong>投稿とは？</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* main content */}
            <div style={{ width: '66%', backgroundColor: 'white', height: '700px', border: '3px solid gainsboro'}}>
              {/* mokuji box */}
              <FormControlLabel
                    // control={<Switch checked={checked} onChange={handleChange} />}
                    control={<div onClick={() => setIsChecked(!isChecked)}> click here</div>}
                  />
                  <div>
                    <Collapse in={isChecked}>
                      <div>bababa</div>
                    </Collapse>
                    <Collapse in={isChecked}>
                      <div>bababa</div>
                    </Collapse>
                  </div>
            </div>
            {/* right menu */}
            {/* <div style={{ }}>
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const useViewTreeStyles = makeStyles({
  root: {
    marginBottom: '20px'
  }
})

const LogImg = styled.img`
  margin: auto
`

const HomeIcon = styled.div`
  margin-top: -100px;
  border-radius: 25px;
  width: 34px;
  height: 34px;
  background: white;
  border: 3px solid mediumseagreen;
  text-align: center;
  display: -webkit-inline-box;
  -webkit-box-pack: center;
  background-image: url(${props => props.icon});
`

const HomeSvg = styled(Home)`
  color: mediumseagreen;
  width: 30px;
  height: 30px;
  align-item: center;
`
