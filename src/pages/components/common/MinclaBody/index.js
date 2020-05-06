import React, { useState, useRef } from 'react';
import SideMenu from './SideMenu';
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
        <div style={{ width: '66%', backgroundColor: 'white', height: '700px', border: '3px solid gainsboro'}}>
        </div>
        {/* right menu */}
        {/* <div style={{ }}>
          
        </div> */}
      </StyledBody>
    </Wrap>
  </>)
}

export default MinclaBody
