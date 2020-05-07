import React, { useState } from 'react';

import OnlineClassroom from './OnlineClassroom'
import Preparation from './Preparation'
import Box from '@material-ui/core/Box';

const TopMainContent = ({ menuItemTag }) => {

  const SwitchedMenuContent = () => {

    switch(menuItemTag) {
      case 'online': 
        return <OnlineClassroom/>
      case 'prepare': 
        return <Preparation/>
      case 'try': 
        return <></>
      case 'last': 
        return <></>
      default:
        return <OnlineClassroom/>
    }
  }

  return (<>
    <Box
      display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}>
      <SwitchedMenuContent/>
    </Box>
    <Box
      display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}>
      <OnlineClassroom/>
      <br/><br/><br/>
      <Preparation/>
    </Box>
  </>)
}

export default TopMainContent
