import React from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
}  from '../style'
import kids from '../../../../../assets/images/kids.png'
import sm_kids from '../../../../../assets/images/sm_kids.png'
import Box from '@material-ui/core/Box';

const ActivityDescription = () => {

  return (
  <Wrap>
    <div>
      <ContentTitle>
        アクティビティの使い方
      </ContentTitle>
      <ContentDescription>
        誰かがシェアしてくれたアクティビティを見ることができます。<br />
        何か新しいことを初めてみたくなったら<br />
        アクティビティをクリックしてみてください。<br />
        シェアしてくださった皆さんの楽しいがきっとあるはず。<br />
        <Box
          marginBottom={{ xs: '30px', sm: '0px', md: "0px", lg: "0px" }}
        />
      </ContentDescription>
      <div>
        <Box
          component='img'
          width={{ xs: '300px', sm: '700px', md: "600px", lg: "600px" }}
          height={{ xs: '100px', sm: '250px', md: "200px", lg: "200px" }}
          display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}
          margin='auto'
          src={sm_kids}
        />
        <Box
          component='img'
          width={{ xs: '300px', sm: '700px', md: "600px", lg: "600px" }}
          height={{ xs: '100px', sm: '250px', md: "200px", lg: "200px" }}
          display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
          margin='auto'
          src={kids}
        />
      </div>
    </div>
  </Wrap>)
}

export default ActivityDescription
