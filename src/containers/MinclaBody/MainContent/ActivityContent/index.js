import React, { useState, useEffect } from 'react';

import { 
  Wrap,
  ContentTitle
}  from '../TopMainContent/style'
import Pagination from '@material-ui/lab/Pagination';

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
      <div style={{ }}>
        <div>
          <Pagination count={fetchedArticles.length / 10 + 1} />
        </div>
      </div>    
    </Wrap>)
}

export default ActivityContent
