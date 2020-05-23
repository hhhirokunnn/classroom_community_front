import React from 'react';

import OnlineClassroom from './OnlineClassroom'
import Preparation from './Preparation'
import JustDoIt from './JustDoIt'
import LastWord from './LastWord'
import ActivityDescription from './ActivityDescription'
import PostDescription from './PostDescription'
import MinClaDescription from './MinClaDescription'

import Box from '@material-ui/core/Box';

const TopMainContent = ({ menuItemTag }) => {

  const SwitchedMenuContent = () => {

    switch(menuItemTag) {
      case 'online': 
        return <OnlineClassroom/>
      case 'prepare': 
        return <Preparation/>
      case 'try': 
        return <JustDoIt/>
      case 'last': 
        return <LastWord/>
      case 'min-cla-description': 
        return <MinClaDescription/>
      case 'activity-description': 
        return <ActivityDescription/>
      case 'post-description': 
        return <PostDescription/>
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
      <br/><br/><br/>
      <JustDoIt/>
      <br/><br/><br/>
      <LastWord/>
      <br/><br/><br/>
      <ActivityDescription/>
      <br/><br/><br/>
      <PostDescription/>
    </Box>
  </>)
}

export default TopMainContent
