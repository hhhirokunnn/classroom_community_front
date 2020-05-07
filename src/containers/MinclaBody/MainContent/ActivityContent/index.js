import React, { useState, useEffect } from 'react';

import { 
  Wrap,
  ContentTitle
}  from '../TopMainContent/style'
import { fetchArticles } from '../../../../services/MinclaClient'
const ActivityContent = () => {

  const [fetchedArticles, setFetchedArticles] = useState([])

  useEffect(() => {
    fetchArticles().then(res => {
      setFetchedArticles(res.data.content)
    })
  }, [])

  return (
    <Wrap>
      {JSON.stringify(fetchedArticles)}
    </Wrap>)
}

export default ActivityContent
