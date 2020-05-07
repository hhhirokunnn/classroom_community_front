import React, { useState, useEffect } from 'react';
import { ButtonBox, ButtonIcon, ButtonLabel, HomeIcon } from './style'

const PageSelectButton = ({ label, marginLeft, svgComponent, selfPath }) => {

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
    <ButtonBox marginLeft={marginLeft}>
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
    </ButtonBox>
  </>)
}

export default PageSelectButton
