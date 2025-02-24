import axios from 'axios';

// -----------------P R O D -----------------------

// export const minclaAuthedBaseAxios = () => axios.create({
//   baseURL: 'https://api.min-cla.work/api',
//   responseType: 'json',
//   headers: {
//     'Authorization': localStorage.getItem('token')
//   }
// });

// const minclaBaseAxios = () => axios.create({
//   baseURL: 'https://api.min-cla.work/api',
//   responseType: 'json'
// });

// -----------------L O C A L -----------------------

export const minclaAuthedBaseAxios = () => axios.create({
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

const saveTokenToStorage = token => localStorage.setItem('token', token)

export const logout = () => {
    
  return minclaBaseAxios().delete('/logout')
    .then(res => {
      localStorage.removeItem('token')
      alert(res.data.message)
      window.location.reload()})
    .catch(e => {
      localStorage.removeItem('token')
      e.response ? alert(e.response.data.message) : alert(e)})
}

export const login = (mail, password) => {

  return minclaBaseAxios().post('/login', { mail: mail, password: password })
}

export const signUp = (userName, mail, password) => {

  return minclaBaseAxios().post('/users', { name: userName, mail: mail, password: password })
}

export const fetchArticles = (from = 0) => minclaBaseAxios().get(`/articles?from=${from}&size=10`)

export const createArticle = ({title, summary, estimatedTime, memberUnit, youtubeLink, image}) => {

  const formData = new FormData()
  
  formData.append('title', title)
  formData.append('summary', summary)
  if(image) formData.append('image', image)
  if(estimatedTime) formData.append('estimatedTime', estimatedTime)
  if(memberUnit) formData.append('memberUnit', memberUnit)
  if(youtubeLink) formData.append('youtubeLink', youtubeLink)
  
  minclaAuthedBaseAxios().post('/articles', formData)
  .then(res => {
    alert(res.data.message)
  }).catch(e => {
    alert(e.response.data.message)
  })
}

export const addFavoriteArticle = (articleId) => {
  
  return minclaAuthedBaseAxios().post('/markedArticles', { articleId: articleId })
}

export const removeFavoriteArticle = (favArticleId) => {
  
  return minclaAuthedBaseAxios().delete(`markedArticles/${favArticleId}`)
}

export const fetchMarkedArticles = () => minclaAuthedBaseAxios().get(`/markedArticles?from=0&size=1000`)

export const fetchArticleDetail = articleId => minclaAuthedBaseAxios().get(`/articles/${articleId}`)

export const fetchComments = articleId => minclaAuthedBaseAxios().get(`/comments/${articleId}`)

export const createComment = (articleId, content) => minclaAuthedBaseAxios().post(`/comments`, { articleId, content })
