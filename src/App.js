import React from 'react';
import axios from 'axios';

function App() {

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

  const logout = () => {
    
    return axios.delete('http://localhost:8080/api/logout')
      .then(res => {
        console.log(res)
        localStorage.removeItem('token')
        alert(res.data.message)
      })
      .catch(e => console.log(e))
  }

  const saveTokenToStorage = token => localStorage.setItem('token', token)

  return (
    <div className="App">
      hello!
      <div onClick={click} style={{ width: '100px', height: '100px', backgroundColor: 'lightgreen' }}>LOG-IN</div>
      <div onClick={axiosGetWithHeader} style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}>CLICK HERE</div>
      <div onClick={logout} style={{ width: '100px', height: '100px', backgroundColor: 'lightgray' }}>LOG-OUT</div>
    </div>
  );
}

export default App;
