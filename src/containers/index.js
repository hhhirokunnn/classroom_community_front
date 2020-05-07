import React, { useState, useRef } from 'react';
import MinclaHead from './containers/MinclaHead'
import MinclaBody from './containers/MinclaBody'

function MinclaContainer() {

  return (
    <>
      <div>
        {/* head */}
        <MinclaHead />
        {/* body wrap */}
        <MinclaBody/>
      </div>
    </>
  );
}

export default MinclaContainer;

