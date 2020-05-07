import React, { useState } from 'react';
import styled from 'styled-components'
// import topTitle from 'src/assets/images/top_title.png'
import topTitle from '../../assets/images/top_title.png'
import PageNavigation from './PageNavigation'

const MinclaHead = () => {

  return (<>
    <div style={{ height:'150px' }}>
      <div style={{ backgroundColor: '', height: '100px', textAlign: 'center', marginBottom: '10px'}}>
        <LogoImg src={topTitle}/>
      </div>
      {/* green obi */}
      <div style={{ backgroundColor: 'mediumseagreen', height: '50px', position: 'relative' }}>
        {/* navs box */}
        <div style={{ marginLeft: '26%' }}>
          {/* toppage box */}
          <PageNavigation/>
        </div>
      </div>
    </div>
  </>)
}

export default MinclaHead

const LogoImg = styled.img`
  margin: auto
`
