import React from 'react';

import { 
  Wrap,
  ContentTitle,
  ContentDescription
}  from '../TopMainContent/style'

const InquiryContent = () => {

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
          min.cla.community@gmail.com 
        </ContentDescription>
      </div>
    </Wrap>)
}

export default InquiryContent
