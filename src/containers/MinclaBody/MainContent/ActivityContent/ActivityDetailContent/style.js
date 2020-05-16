import styled from 'styled-components';

export const ArticleItemBox = styled.div`
  display: grid;
  grid-template-areas:
    "imageBox    title   title"
    "imageBox summary summary"
    "imageBox summary summary"
    "author   author  author";
  grid-template-rows: 30px 30px 30px 20px;
  grid-template-columns: 160px 100px 100px;
  background-color: ${props => props.isFocussed ? "whitesmoke" : "white"}
`

export const ArticleImageBox = styled.div`
  grid-area: imageBox;
`
export const ArticleTitleBox = styled.div`
  grid-area: title;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`

export const ArticleSummaryBox = styled.div`
  grid-area: summary;
  
`

export const ArticleAuthorBox = styled.div`
  grid-area: author;
  text-align: right;
`

export const Noimage = styled.div`
  height: 50px;
  width: 150px;
  padding-top: 50px;
  text-align: center;
`
