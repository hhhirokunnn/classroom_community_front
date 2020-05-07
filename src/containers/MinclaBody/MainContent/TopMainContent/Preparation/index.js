import React, { useState } from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
  ContentImg
}  from '../style'
import sample from '../../../../../assets/images/sample.png'
import Box from '@material-ui/core/Box';

const Preparation = () => {

  return (
  <Wrap>
    <div>
      <ContentTitle>
        じゅんび
      </ContentTitle>
      <ContentDescription>
        オンラインクラスルームを行うためのじゅんびを記す。
      </ContentDescription>
      <div>
      <Box
        component='img'
        width={{ xs: '280px', sm: '500px', md: "600px", lg: "600px" }}
        height={{ xs: '180px', sm: '280px', md: "300px", lg: "300px" }}
        margin='auto'
        src={sample}/>
      </div>
    </div>
  </Wrap>)
}

export default Preparation
