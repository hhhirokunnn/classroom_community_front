import React, { useState, useRef } from 'react';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { 
  Wrap,
  MenuTitleIcon,
  MenuItemBox,
  MenuItemListBox,
  MenuTitleBox
} from './style'

const MenuItem = ({ title, itemList }) => {

  const [isClicked, setIsClicked] = useState(false)

  const renderPage = () => alert('TODO: Implementation renderPage')

  const titleIcon = () => isClicked ? '▼' : '▶︎'

  return (<>
    <Wrap>
    <FormControlLabel
      control={
        <MenuTitleBox onClick={() => setIsClicked(!isClicked)}>
          <MenuTitleIcon>{titleIcon()}</MenuTitleIcon><strong>{title}</strong>
        </MenuTitleBox>
      }
    />
      <MenuItemListBox>
        {itemList.map( (item, index) => (
          <Collapse key={index} in={isClicked}>
            <MenuItemBox onClick={renderPage}>{item.title}</MenuItemBox>
          </Collapse>))}
      </MenuItemListBox>
    </Wrap>
  </>)
}

export default MenuItem
