import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import MainContent from './MainContent';
import Box from '@material-ui/core/Box';
import { 
  Wrap, 
  Body
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
      <Body>
        <Box
          component='div'
          width={{ md: '20%', lg: "18%" }} 
          display={{ xs: 'none', sm: 'none', md: "inline", lg: "inline" }}
          marginLeft={{ md: "20px", lg: "50px" }} >
          {isTopPage() && 
            <SideMenu 
              sideMenuItemList={TopMenuItemList} 
              setMenuItemTag={setMenuItemTag}
              menuItemTag={menuItemTag}/>}
        </Box>
        {/* main content */}
        <Box width={{ xs: '100%', sm: '100%', md: "60%", lg: "60%" }} >
          <MainContent menuItemTag={menuItemTag}/>
        </Box>
      </Body>
    </Wrap>
  </>)
}

export default MinclaBody
