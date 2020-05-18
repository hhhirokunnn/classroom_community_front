import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import { fetchArticleDetail } from '../../../../../services/MinclaClient'
import noimage from '../../../../../assets/images/noimage.svg'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import { Favorite } from '@styled-icons/material-sharp/Favorite';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { fetchMarkedArticles, addFavoriteArticle, removeFavoriteArticle, fetchComments, createComment } from '../../../../../services/MinclaClient'
import MinclaLargeTextField from '../../../../../components/MinclaLargeTextField'
import MinclaColorButton from '../../../../../components/MinclaColorButton'

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    padding: '20%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const ActivityDetailContent = ({ articleId }) => {

  const [fetchedArticleDetail, setFetchedArticleDetail] = useState({
    article: {},
    materials: [{}],
    steps: [{}],
    authorName: ''
  })
  const [fetchedFavoriteArticles, setFetchedFavoriteArticles] = useState([])
  const [fetchedComments, setFetchedComments] = useState([])
  const [inputComment, setInputComment] = useState('')
  
  const [openModal, setOpenModal] = useState(false)

  const changeComment = _comment => {
    setInputComment(_comment)
  }

  const sendComment = () => {
    setOpenModal(true)
  }

  useEffect(()=> {
    fetchArticleDetail(articleId)
      .then(r => setFetchedArticleDetail(r.data.content))
      .catch(e => {
        e.response ? alert(e.response.data.message) : alert(e)
        window.location.href = "/activity"
      })
    localStorage.getItem("token") && fetchMarkedArticles().then(r => {
      setFetchedFavoriteArticles(r.data.content.articles)
    })
    fetchComments(articleId).then(r => setFetchedComments(r.data.content))
    .catch(e => {
      e.response ? alert('コメントが取得できませんでした。リロードしてください。') : alert(e)
    })
  },[])

  const FavoriteButton = () => {
      
    const favArticle = fetchedFavoriteArticles.filter(f => f.articleId === articleId)[0]

    const clickFav = () => {
      favArticle ?  removeFav() : addFav()
    }

    const addFav = () => {
      addFavoriteArticle(articleId).then(res => {
        alert(res.data.message)
        setFetchedFavoriteArticles(fetchedFavoriteArticles.concat(res.data.content.articles))
      }).catch(e => {
        e.response ? alert(e.response.data.message) : alert(e)
      })
    }

    const removeFav = () => {
      removeFavoriteArticle(favArticle.id).then(res => {
        alert(res.data.message)
        setFetchedFavoriteArticles(fetchedFavoriteArticles.filter(f => f.articleId !== articleId))
      }).catch(e => {
        e.response ? alert(e.response.data.message) : alert(e)
      })
    }

    return (
      <Box component='div'
        display='inline-flex'
        float='left'
        color='salmon'
        fontSize={{ xs: '20px', sm: '20px', md: "20px", lg: "20px" }}
        marginLeft={{ xs: '10%', sm: '10%', md: "0", lg: "16%" }}
      >
        <Box
          width={{ xs: '20px', sm: '20px', md: "20px", lg: "20px" }}
          height={{ xs: '20px', sm: '20px', md: "20px", lg: "20px" }}
          onClick={clickFav}
        >
          {favArticle ? <Favorite/> : <FavoriteBorder/>}
        </Box>
      </Box>)
  }

  const PreparationCard = ({ index, preparation, item, itemUnit, url }) => {

    return (<>
      <Box component='div' margin='8px'>
        <Card>
          <CardHeader title={`じゅんびその${index}`}/>
          <CardContent>
            <div style={{ wordWrap: 'break-word' }}>
              <div style={{ fontWeight: 'bold' }}>内容<br /></div>
              {preparation}
            </div>
            {item && (<><div><span style={{ fontWeight: 'bold' }}>物品名：</span>{item}</div></>)}
            {itemUnit && (<><div><span style={{ fontWeight: 'bold' }}>個数：</span>{itemUnit}</div></>)}
            {url && (<><div><span style={{ fontWeight: 'bold' }}>URL；</span>{url}</div></>)}
          </CardContent>
        </Card>
      </Box>
    </>)
  }

  const StepCard = ({ index, description, image }) => {

    return (<>
      <Box component='div' margin='8px'>
        <Card >
          <CardHeader title={`ステップその${index}`}/>
          <CardMedia
            className={classes.media}
            image={image ? image : noimage}
            title={`step${index}: image`}
          />
          <CardContent>
            <div style={{ wordWrap: 'break-word', fontSize: '20px' }}>
              {description}
            </div>
          </CardContent>
        </Card>
      </Box>
    </>)
  }

  const CommentItem = ({ content, userName, createdAt }) => {
    return (<>
      <ListItem alignItems="flex-start">
        <Box 
          width={{ xs: '500px', sm: '700px', md: "600px", lg: "800px" }}
        >
        <div style={{ backgroundColor: 'lemonchiffon', marginBottom: '6px', padding: '20px', borderRadius: '20px' }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{userName}</div>
          <div>
            <div style={{ wordWrap: 'break-word' }}>{content}</div>
            <div style={{ fontSize: '12px', color: 'gray', marginTop: '10px' }}>コメント送信日：{createdAt[0] + '/' + createdAt[1] + '/'  + createdAt[2] + ' '  + createdAt[3] + ':'  + createdAt[4] }</div>
          </div>
        </div>
        </Box>
      </ListItem>
    </>)
  }

  const YoutubeContent = () => {

    return (
      <Box component='div'>
        <Card >
          <CardHeader title={'動画の説明'}/>
          <CardContent>
            <Box 
              component='div'
              display={{ xs: 'none', sm: 'none', md: "none", lg: "block" }}>
              <iframe title={`${fetchedArticleDetail.article.title}_youtube_big`} width="600" height="400" src={fetchedArticleDetail.article.youtubeLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Box 
              component='div'
              display={{ xs: 'none', sm: 'block', md: "block", lg: "none" }}>
              <iframe title={`${fetchedArticleDetail.article.title}_youtube_midium`} width="580" height="400" src={fetchedArticleDetail.article.youtubeLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Box 
              component='div'
              display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}>
              <iframe title={`${fetchedArticleDetail.article.title}_youtube_small`} width="300" height="200" src={fetchedArticleDetail.article.youtubeLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
          </CardContent>
        </Card>
      </Box>
    )
  }
  
  const classes = useStyles();

  return (<>
    <Box component='div'>
      <Box component='div' margin='8px'>
        <Card >
          <Box component='div'
            marginBottom={{ xs: '20px', sm: '20px', md: "20px", lg: "20px" }}
            fontSize={{ xs: '30px', sm: '40px', md: "40px", lg: "40px" }}>
            <span style={{ fontWeight: 'bold', color: 'salmon' }}>{fetchedArticleDetail.article.title}</span>
          </Box>
          <Box component='div'
            marginBottom={{ xs: '20px', sm: '20px', md: "20px", lg: "20px" }}
            fontSize={{ xs: '16px', sm: '16px', md: "16px", lg: "16px" }}>
            <span style={{color: 'gray' }}>作者：{fetchedArticleDetail.authorName}</span>
          </Box>
          <CardMedia
            className={classes.media}
            image={fetchedArticleDetail.article.image ? fetchedArticleDetail.article.image : noimage}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <div style={{ wordWrap: 'break-word', fontSize: '20px' }}>
                {fetchedArticleDetail.article.summary}
              </div>  
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteButton/>
            </IconButton>
            <div style={{ color: 'salmon', paddingTop: '4px' }}>: {fetchedArticleDetail.favoriteCount}人がお気に入り</div>
          </CardActions>
        </Card>
      </Box>

      {fetchedArticleDetail.article.youtubeLink && <YoutubeContent />}

      {fetchedArticleDetail.materials.map((m,i) => (<>
        <PreparationCard 
          key={i}
          index={i + 1}
          preparation={m.preparation}
          item={m.item}
          itemUnit={m.itemUnit}
          url={m.url}
        />
      </>))}

      {fetchedArticleDetail.steps.map((s,i) => (<>
        <StepCard 
          key={i}
          index={i + 1}
          description={s.description}
          image={s.image}
        />
      </>))}
      {/* comment */}
      <List>
        {fetchedComments.map((f,i) => {
          return (<>
            <CommentItem
              key={i}
              content={f.content}
              userName={f.userName}
              createdAt={f.createdAt}/>
          </>)
        })}
      </List>
      <div>
        <MinclaLargeTextField
          targetLabel={"コメント"} 
          targetValue={inputComment} 
          inputTarget={changeComment} 
          marginBottom={"20px"}
          rows={3}
          width={{ xs: '350px', sm: '450px', md: "450px", lg: "500px" }} 
        />
      </div>
      <div>
        {inputComment.length > 1 ? (
        <MinclaColorButton onClick={sendComment}>
          コメントを送信
        </MinclaColorButton>)
        : (<Button 
            variant="contained" 
            style={{ fontWeight: 'bold' }} 
            disabled>コメントを送信</Button>) }
      </div>
      {openModal && 
        <ProgressModal 
          openModal={openModal}
          setOpenModal={setOpenModal}
          articleId={articleId}
          inputComment={inputComment}
          fetchedComments={fetchedComments}
          setFetchedComments={setFetchedComments}
          setInputComment={setInputComment}
        />}
    </Box>
  </>)
}

const ProgressModal = ({
  openModal, 
  setOpenModal, 
  articleId, inputComment, fetchedComments,
  setFetchedComments, setInputComment}) => {
  
  const classes = useStyles();

  useEffect(()=>{
    createComment(articleId, inputComment).then(r => {
      setFetchedComments([r.data.content].concat(fetchedComments))
      setInputComment('')
      setOpenModal(false)
    })
    .catch(e => {
      e.response ? alert(e.response.data.message) : alert("サーバに問題が発生しました。時間を置いてから再度アクセスしてください")
      setOpenModal(false)
    })
  },[])

  return (<Backdrop className={classes.backdrop} open={openModal}>
    <CircularProgress color="inherit" />
  </Backdrop>)
}

export default ActivityDetailContent
