import React, { useState, useRef } from 'react';
import { 
  Wrap,
} from './style';
import TopMainContent from './TopMainContent'
import InquiryContent from './InquiryContent'
import LoginContent from './LoginContent'
import PostContent from './PostContent'
import ActivityContent from './ActivityContent'

const MainContent = ({ menuItemTag }) => {

  const SwitchedMainContent = () => {

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
