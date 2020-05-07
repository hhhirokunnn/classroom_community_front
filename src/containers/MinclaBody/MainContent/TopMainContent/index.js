import React, { useState } from 'react';

import OnlineClassroom from './OnlineClassroom'
import Preparation from './Preparation'

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

  return (<SwitchedMenuContent/>)
}

export default TopMainContent
