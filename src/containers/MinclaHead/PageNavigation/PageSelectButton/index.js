import React, { useState, useEffect } from 'react';
import { ButtonBox, ButtonIcon, ButtonLabel, HomeIcon } from './style'
import Box from '@material-ui/core/Box';

const PageSelectButton = ({ label, svgComponent, selfPath }) => {

  const [isFocussed, setIsFocussed] = useState(false)

  useEffect(()=> {
    setIsFocussed(isMe)
  }, [])

  const isMe = () => window.location.pathname.match(selfPath)

  const onMouseOut = () => {
    if(!isMe()) setIsFocussed(false)
  }

  const renderToMyPath = () => {
    window.location.href = `/${selfPath}`
  }

  return (<>
    <Box 
      position='absolute'
      top={{ xs: '7px', sm: '-16px', md: "-16px", lg: "-16px" }}
      cursor='pointer'>  
    {/* <ButtonBox marginLeft={marginLeft}> */}
      {/* toppage icon box */}
      <div onMouseOver={() => setIsFocussed(true)} onMouseOut={onMouseOut} onClick={renderToMyPath}>
        <ButtonIcon>
          <HomeIcon isFocussed={isFocussed}>
            {svgComponent}
          </HomeIcon>
        </ButtonIcon>
        <ButtonLabel isFocussed={isFocussed}>
          {label}
        </ButtonLabel>
      </div>
    {/* </ButtonBox> */}
    </Box>
  </>)
}

export default PageSelectButton
