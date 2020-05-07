import React, { useState, useRef } from 'react';

import { 
  Wrap
} from './style'

const MenuItem = ({ title, tag }) => {

  const [isFocussed, setIsFocussed] = useState(false)

  const renderPage = () => alert(`TODO: Implementation renderPage: ${tag}`)

  return (<>
    <Wrap isFocussed={isFocussed}>
      <div onMouseOver={() => setIsFocussed(true)} onMouseOut={() => setIsFocussed(false)} onClick={renderPage}>
        {title}
      </div>
    </Wrap>
  </>)
}

export default MenuItem
