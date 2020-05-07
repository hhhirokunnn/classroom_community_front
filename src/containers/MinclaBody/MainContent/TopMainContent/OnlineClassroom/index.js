import React, { useState } from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
}  from '../style'
import sample from '../../../../../assets/images/sample.png'
import Box from '@material-ui/core/Box';

const OnlineClassroom = () => {

  return (
  <Wrap>
    <div>
      <ContentTitle>
        オンラインクラスルームとは？
      </ContentTitle>
      <ContentDescription>
        このサービスはこどもたちが<br />
        規則正しい生活を送るための<br />
        「オンラインクラスルーム」を<br />
        サポートするために作りました。<br />
      </ContentDescription>
      <div>
        <Box
          component='img'
          width={{ xs: '280px', sm: '500px', md: "600px", lg: "600px" }}
          height={{ xs: '180px', sm: '280px', md: "300px", lg: "300px" }}
          margin='auto'
          src={sample}
        />
      </div>
    </div>
  </Wrap>)
}

export default OnlineClassroom
