import React, { useState } from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
  ContentImg
}  from '../style'
import sample from '../../../../../assets/images/sample.png'

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
        <ContentImg src={sample} width='600px' height='300px'/>
      </div>
    </div>
  </Wrap>)
}

export default OnlineClassroom
