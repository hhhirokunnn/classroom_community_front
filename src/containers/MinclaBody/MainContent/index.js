import React, { useState, useRef } from 'react';
import { 
  Wrap,
} from './style';
import TopMainContent from './TopMainContent'

const MainContent = ({ menuItemTag }) => {

  const SwitchedMainContent = () => {

    switch(window.location.pathname) {
      case '/top': 
        return <TopMainContent menuItemTag={menuItemTag}/>
      case '/activity': 
        return <></>
      case '/post': 
        return <></>
      case '/inquiry': 
        return <></>
      case '/signin': 
        return <></>
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
