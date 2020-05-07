import React, { useState, useRef } from 'react';
import SideMenu from './MainContent/Top/SideMenu';
import MainContent from './MainContent';
import { 
  Wrap, 
  StyledBody,
  LeftContent
 } from './style';

const MinclaBody = () => {

  return (<>
    <Wrap>
      <StyledBody>
        <LeftContent>
          <SideMenu />
        </LeftContent>
        {/* main content */}
        <MainContent />
        {/* right menu */}
        {/* <div style={{ }}></div> */}
      </StyledBody>
    </Wrap>
  </>)
}

export default MinclaBody
