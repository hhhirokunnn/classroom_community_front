import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import MinclaHead from './containers/MinclaHead'
import MinclaBody from './containers/MinclaBody'

function App() {

  return (
    <div className="App">
      {/* wrap */}
      <div>
        {/* head */}
        <MinclaHead />
        {/* body wrap */}
        <MinclaBody/>
      </div>
    </div>
  );
}

export default App;
