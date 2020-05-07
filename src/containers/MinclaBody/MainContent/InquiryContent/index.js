import React, { useState, useEffect } from 'react';

import { 
  Wrap,
  ContentTitle,
  ContentDescription,
  ContentImg
}  from '../TopMainContent/style'

const InquiryContent = ({ }) => {

  return (
    <Wrap>
      <div>
        <ContentTitle>
          おといあわせ
        </ContentTitle>
        <ContentDescription>
          お手数をおかけして申し訳ございませんが、<br/>
          以下のメールアドレスへメールしてください。<br/>
          <br/>
          xxxx@gmail.com
        </ContentDescription>
      </div>
    </Wrap>)
}

export default InquiryContent
