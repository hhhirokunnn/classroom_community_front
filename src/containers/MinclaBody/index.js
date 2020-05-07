import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import MainContent from './MainContent';
import { 
  Wrap, 
  StyledBody,
  LeftContent
 } from './style';

 import { TopMenuItemList } from './constrains.js'

const MinclaBody = () => {

  const [menuItemTag, setMenuItemTag] = useState(null)

  useEffect(()=>{
    isTopPage() && setMenuItemTag('online')
  }, [])

  const isTopPage = () => window.location.pathname.match('top')

  return (<>
    <Wrap>
      <StyledBody>
        <LeftContent>
          {isTopPage() && 
            <SideMenu 
              sideMenuItemList={TopMenuItemList} 
              setMenuItemTag={setMenuItemTag}
              menuItemTag={menuItemTag}/>}
        </LeftContent>
        {/* main content */}
        <MainContent menuItemTag={menuItemTag}/>
        {/* right menu */}
        {/* <div style={{ }}></div> */}
      </StyledBody>
    </Wrap>
  </>)
}

export default MinclaBody
