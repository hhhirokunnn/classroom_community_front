import axios from 'axios';

const minclaAuthedBaseAxios = () => axios.create({
  baseURL: 'http://localhost:8080/api',
  responseType: 'json',
  headers: {
    'Authorization': localStorage.getItem('token')
  }
});

const minclaBaseAxios = () => axios.create({
  baseURL: 'http://localhost:8080/api',
  responseType: 'json'
});

// const minclaJsonClient = () => minclaAuthedAxios().create({
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// const minclaFormDataClient = () => minclaAuthedAxios().create({
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   }
// });

const saveTokenToStorage = token => localStorage.setItem('token', token)

export const logout = () => {
    
  return minclaBaseAxios().delete('/logout')
    .then(res => {
      localStorage.removeItem('token')
      alert(res.data.message)
      window.location.reload()})
    .catch(e => {
      e.response ? alert(e.response.data.message) : alert(e)})
}

export const login = (mail, password) => {

  return minclaBaseAxios().post('/login', 
    { mail: mail, password: password })
    .then(res => {
      saveTokenToStorage(res.data.content.token)
      alert(res.data.message)
      window.location.href = '/post'
    })
    .catch(e => {
      e.response ? alert(e.response.data.message) : alert(e)})
}

export const signUp = (userName, mail, password) => {

  return minclaBaseAxios().post('/users', 
    { name: userName, mail: mail, password: password })
    .then(res => {
      saveTokenToStorage(res.data.content.token)
      alert(res.data.message)
      window.location.href = '/post'
    })
    .catch(e => {
      e.response ? alert(e.response.data.message) : alert(e)})
}

export const fetchArticles = () => minclaBaseAxios().get('/articles')

export const createArticle = ({file, title, summary, userId }) => {

  const formData = new FormData()
  // const file = fileInput.current.files[0]
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
  
  minclaAuthedBaseAxios().post('/articles', formData)
  .then(res => {
    alert(res.data.message)
  }).catch(e => {
    alert(e.response.data.message)
  })
}
