import React from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
}  from '../style'
import unit from '../../../../../assets/images/unit.png'
import Box from '@material-ui/core/Box';

const LastWord = () => {

  return (
  <Wrap>
    <div>
      <ContentTitle>
        さいごに
      </ContentTitle>
      <ContentDescription>
        オンラインクラスルームが充実したものになる<br />
        サポート機能をみんクラで作りました。<br />
        よかったら使ってみてください。<br />
        <br />
        <Box
          marginBottom={{ xs: '30px', sm: '0px', md: "0px", lg: "0px" }}
        />
      </ContentDescription>
      <div>
        <Box
          component='img'
          width={{ xs: '300px', sm: '300px', md: "300px", lg: "300px" }}
          height={{ xs: '100px', sm: '100px', md: "100px", lg: "100px" }}
          display={{ xs: 'block', sm: 'none', md: "none", lg: "none" }}
          margin='auto'
          src={unit}
        />
        <Box
          component='img'
          width={{ xs: '300px', sm: '300px', md: "300px", lg: "300px" }}
          height={{ xs: '100px', sm: '100px', md: "100px", lg: "100px" }}
          display={{ xs: 'none', sm: 'block', md: "block", lg: "block" }}
          margin='auto'
          src={unit}
        />
      </div>
    </div>
  </Wrap>)
}

export default LastWord
