import React, { useState } from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
}  from '../style'
import kids from '../../../../../assets/images/kids.png'
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
          width={{ xs: '350px', sm: '700px', md: "600px", lg: "600px" }}
          height={{ xs: '130px', sm: '250px', md: "200px", lg: "200px" }}
          margin='auto'
          src={kids}
        />
      </div>
    </div>
  </Wrap>)
}

export default OnlineClassroom
