import React, { useState } from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
  ContentImg
}  from '../style'
import kids from '../../../../../assets/images/kids.png'
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
        width={{ xs: '350px', sm: '700px', md: "600px", lg: "600px" }}
        height={{ xs: '130px', sm: '250px', md: "200px", lg: "200px" }}
        margin='auto'
        src={kids}/>
      </div>
    </div>
  </Wrap>)
}

export default Preparation
