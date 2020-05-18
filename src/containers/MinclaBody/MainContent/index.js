import React from 'react';
import { 
  Wrap,
} from './style';
import TopMainContent from './TopMainContent'
import InquiryContent from './InquiryContent'
import LoginContent from './LoginContent'
import PostContent from './PostContent'
import ActivityContent from './ActivityContent'
import ActivityDetailContent from './ActivityContent/ActivityDetailContent'
import SignUpContent from './SignUpContent'

const MainContent = ({ menuItemTag }) => {

  const SwitchedMainContent = () => {
    if(window.location.pathname.includes("activity/")) {
      const _articleId = parseInt(window.location.pathname.split('/')[2]) || 0
      return _articleId > 0 ? <ActivityDetailContent articleId={_articleId}/> : <ActivityContent/>
    }

    switch(window.location.pathname) {
      case '/top': 
        return <TopMainContent menuItemTag={menuItemTag}/>
      case '/activity': 
        return <ActivityContent/>
      case '/post': 
        return <PostContent/>
      case '/inquiry': 
        return <InquiryContent/>
      case '/login': 
        return <LoginContent/>
      case '/sign-up':
        return <SignUpContent/>
      default:
        return <TopMainContent menuItemTag={menuItemTag}/>
    }
  }

  return (<>
    <Wrap>
      <SwitchedMainContent/>
    </Wrap>
  </>)
}

export default MainContent
