import React, { useState, useEffect } from 'react';

import { 
  ContentTitle,
}  from '../TopMainContent/style'
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';

import { fetchArticles, fetchMarkedArticles, addFavoriteArticle, removeFavoriteArticle } from '../../../../services/MinclaClient'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { Favorite } from '@styled-icons/material-sharp/Favorite';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import noimage from '../../../../assets/images/noimage.svg'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridListLg: {
    width: 800,
  },
  gridListMd: {
    width: 600,
  },
  gridListSm: {
    width: 600,
  },
  gridListXs: {
    width: 300,
  },
  icon: {
    color: 'salmon',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const ActivityContent = () => {

  const [fetchedArticles, setFetchedArticles] = useState([])
  const [fetchedFavoriteArticles, setFetchedFavoriteArticles] = useState([])

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setOpenModal(true)
  }, [])

  const classes = useStyles();

  const changeActivityPage = (event, pageNo) => {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set("page", pageNo)
    window.location.search = searchParams.toString()
  }

  const ArticleItem = ({ title, summary, authorName, image, id }) => {

    const displayImage = () => {
      return image ? <img src={image} width={290} alt={`${title}`}/> : <img src={noimage} width={290} height={10} alt={`noimage`}/>
    }

    const FavoriteButton = () => {
      
      const favArticle = fetchedFavoriteArticles.filter(f => f.articleId === id)[0]

      const clickFav = (event) => {
        event.stopPropagation()
        favArticle ?  removeFav() : addFav()
      }

      const addFav = () => {
        addFavoriteArticle(id).then(res => {
          alert(res.data.message)
          setFetchedFavoriteArticles(fetchedFavoriteArticles.concat(res.data.content.articles))
        }).catch(e => {
          e.response ? alert(e.response.data.message) : alert(e)
        })
      }

      const removeFav = () => {
        removeFavoriteArticle(favArticle.id).then(res => {
          alert(res.data.message)
          setFetchedFavoriteArticles(fetchedFavoriteArticles.filter(f => f.articleId !== id))
        }).catch(e => {
          e.response ? alert(e.response.data.message) : alert(e)
        })
      }

      return (
          <IconButton aria-label={`favorite ${title}`} onClick={clickFav}>
            { favArticle ? <Favorite width='25px' height='25px' color='salmon'/> : <FavoriteBorder width='25px' height='25px' color='salmon'/>}
          </IconButton>
      )
    }

    const renderDetail = () => {
      window.open(`activity/${id}`)
    }

    return (<>
      <div style={{ margin: 'auto', }}>
        <div style={{ marginBottom: '10px', borderLeft: '3px solid gray', borderRight: '3px solid gray', borderTop: '3px solid gray' }}>
          <GridListTile key={id} onClick={renderDetail} cellHeight={200}>
            {displayImage()}
            <GridListTileBar
              title={title}
              subtitle={<span>{summary}</span>}
              actionIcon={<>
                {localStorage.getItem("token") && <FavoriteButton/> }
              </>}
            />
          </GridListTile>
        </div>
      </div>
    </>)
  }

  return (
    <>
      <Box 
        display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
      >
        <GridList cellHeight={180} className={classes.gridListMd} cols={2} spacing={3}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">
              <ContentTitle>アクティビティリスト</ContentTitle>
              </ListSubheader>
          </GridListTile>
          {fetchedArticles.map((a, i) => {
            return(
              <ArticleItem
                key={i}
                title={a.title}
                summary={a.summary}
                image={a.image}
                id={a.id}
              />
            )
          })}
        </GridList>
      </Box>
      <Box display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}>
        <GridList cellHeight={180} className={classes.gridListXs} cols={1}>
          <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
            <ListSubheader component="div">アクティビティリスト</ListSubheader>
          </GridListTile>
          {fetchedArticles.map((a, i) => {
            return(
              <ArticleItem
                key={i}
                title={a.title}
                summary={a.summary}
                image={a.image}
                id={a.id}
              />
            )
          })}
        </GridList>
      </Box>
      <Box display='inline-block' marginTop='30px'>
        <Pagination 
          count={(fetchedArticles.count % 10) === 0 ? fetchedArticles.length / 10 : fetchedArticles.length / 10 + 1}
          page={parseInt(new URLSearchParams(window.location.search).get('page')) || 1}
          onChange={changeActivityPage}/>
      </Box>
      {openModal && 
        <ProgressModal 
          openModal={openModal}
          setOpenModal={setOpenModal}
          setFetchedArticles={setFetchedArticles}
          setFetchedFavoriteArticles={setFetchedFavoriteArticles}
        />}
    </>)
}

const ProgressModal = ({
  openModal, 
  setOpenModal, 
  setFetchedArticles, setFetchedFavoriteArticles}) => {
  
  const classes = useStyles();

  useEffect(()=>{
    const page = new URLSearchParams(window.location.search).get('page')
    const renderPage = page ? page - 1 : 0
    fetchArticles(renderPage).then(res => {
      setFetchedArticles(res.data.content)
      setOpenModal(false)
    })
    
    localStorage.getItem("token") && fetchMarkedArticles().then(r => {
      setFetchedFavoriteArticles(r.data.content.articles)
      setOpenModal(false)
    })
  },[])

  return (<Backdrop className={classes.backdrop} open={openModal}>
    <CircularProgress color="inherit" />
  </Backdrop>)
}

export default ActivityContent
