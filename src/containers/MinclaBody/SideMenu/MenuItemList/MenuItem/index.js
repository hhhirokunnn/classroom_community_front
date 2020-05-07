import React, { useState, useEffect } from 'react';

import { 
  Wrap
} from './style'

const MenuItem = ({ title, tag, setMenuItemTag, menuItemTag }) => {

  const [isFocussed, setIsFocussed] = useState(false)

  useEffect(() => {
    setIsFocussed(isMe())
  }, [menuItemTag])

  const onMouseOut = () => {
    if(!isMe()) setIsFocussed(false)
  }

  const isMe = () => tag === menuItemTag

  return (<>
    <Wrap isFocussed={isFocussed}>
      <div 
        onMouseOver={() => setIsFocussed(true)} 
        onMouseOut={onMouseOut} 
        onClick={() => setMenuItemTag(tag)}>
        {title}
      </div>
    </Wrap>
  </>)
}

export default MenuItem
