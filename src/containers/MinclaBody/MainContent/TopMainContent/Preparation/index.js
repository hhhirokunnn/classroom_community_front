import React from 'react';
import { 
  Wrap,
  ContentTitle,
  ContentDescription,
}  from '../style'
import kids from '../../../../../assets/images/kids.png'
import robot from '../../../../../assets/images/robot.png'
import sm_kids from '../../../../../assets/images/sm_kids.png'
import Box from '@material-ui/core/Box';

const Preparation = () => {

  return (
  <Wrap>
    <div>
      <ContentTitle>
        じゅんび
      </ContentTitle>
      <ContentDescription>
        ビデオチャットするツールが必要になります。<br/>
        LINEやZoom、Skypeといったツールは<br/>
        無料で使うことができます。(2020年05月現在)<br/>
        一緒にオンラインクラスルームする学校の友達と<br/>
        ツールを決めて、インストールしましょう。<br/>
        <br/><br/>
      </ContentDescription>
      <div>
      <Box
        component='img'
        width={{ xs: '200px', sm: '400px', md: "400px", lg: "400px" }}
        height={{ xs: '120px', sm: '240px', md: "240px", lg: "240px" }}
        margin='auto'
        src={robot}/>
      </div>
    </div>
  </Wrap>)
}

export default Preparation
