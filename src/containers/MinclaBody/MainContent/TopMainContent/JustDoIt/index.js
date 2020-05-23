import React from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
}  from '../style'
import rotate from '../../../../../assets/images/rotate.png'
import Box from '@material-ui/core/Box';

const JustDoIt = () => {

  return (
  <Wrap>
    <div>
      <ContentTitle>
        やってみる
      </ContentTitle>
      <ContentDescription>
        外出自粛を我慢だけ乗り越えるのではなく、<br />
        健康的で充実した時間を送ることができるように<br />
        新しいことを始めてみましょう！<br />
        <br /><br />
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
          src={rotate}
        />
        <Box
          component='img'
          width={{ xs: '300px', sm: '700px', md: "600px", lg: "600px" }}
          height={{ xs: '100px', sm: '250px', md: "200px", lg: "200px" }}
          display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
          margin='auto'
          src={rotate}
        />
      </div>
    </div>
  </Wrap>)
}

export default JustDoIt
