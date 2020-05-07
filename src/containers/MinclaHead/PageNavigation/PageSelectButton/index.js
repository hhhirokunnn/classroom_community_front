import React, { useState } from 'react';
import { ButtonBox, ButtonIcon, ButtonLabel, HomeIcon } from './style'

const PageSelectButton = ({ label, marginLeft, svgComponent }) => {

  const [isFocussed, setIsFocussed] = useState(false)

  return (<>
    <ButtonBox marginLeft={marginLeft}>
      {/* toppage icon box */}
      <div onMouseOver={() => setIsFocussed(true)} onMouseOut={() => setIsFocussed(false)}>
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
