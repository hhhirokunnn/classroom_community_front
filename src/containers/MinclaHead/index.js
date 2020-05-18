import React from 'react';
// import topTitle from 'src/assets/images/top_title.png'
import topTitle from '../../assets/images/top-title.png'
import PageNavigation from './PageNavigation'
import Box from '@material-ui/core/Box';

const MinclaHead = () => {

  return (<>
    <Box
      height={{ xs: '116px', sm: '160px', md: "160px", lg: "160px" }}
      >
      <Box 
        height={{ xs: '70px', sm: '100px', md: "100px", lg: "100px" }}
        marginBottom={{ xs: '0px', sm: '10px', md: "10px", lg: "10px" }}
        textAlign='center'>
        <Box
          component='img'
          src={topTitle}
          width={{ xs: '300px', sm: '370px', md: "370px", lg: "370px" }}/>
      </Box>
      <div style={{ backgroundColor: 'yellowgreen' }}>
        <Box
          paddingBottom={{ xs: '6px', sm: '20px', md: "20px", lg: "20px" }}
          position='relative'
          display={{ xs: 'block', sm: 'block', md: "block", lg: "block" }}>
          <Box 
            component='div'
            display={{ xs: 'block', sm: 'block', md: "block", lg: "block" }} >
            <PageNavigation/>
          </Box>
        </Box>
      </div>
    </Box>
  </>)
}

export default MinclaHead
