import React, { useState } from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
  ContentImg
}  from '../../style'
import sample from '../../../../../../../../assets/images/sample.png'

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
        <ContentImg src={sample} width='600px' height='300px'/>
      </div>
    </div>
  </Wrap>)
}

export default Preparation
