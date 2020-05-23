import React from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
}  from '../style'
import kids from '../../../../../assets/images/kids.png'
import sm_kids from '../../../../../assets/images/sm_kids.png'
import Box from '@material-ui/core/Box';

const MinClaDescription = () => {

  return (
  <Wrap>
    <div>
      <ContentTitle>
        みんクラとは？
      </ContentTitle>
      <ContentDescription>
        オンラインクラスルームをより楽しく行える<br />
        アクティビティを探したり、シェアできます。<br />
        皆さんの楽しいをぜひ共有してください！<br /><br />
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

export default MinClaDescription
