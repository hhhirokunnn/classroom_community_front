import React, { useState, useRef } from 'react';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { 
  Wrap,
  MenuTitleIcon,
  MenuItemListBox,
  MenuTitleBox
} from './style'
import MenuItem from './MenuItem'

const MenuItemList = ({ title, itemList }) => {

  const [isClicked, setIsClicked] = useState(false)

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
      <Collapse in={isClicked}>
        <MenuItemListBox>
          {itemList.map( (item, index) => (
            <MenuItem key={index} title={item.title} tag={item.url}/>))}
        </MenuItemListBox>
      </Collapse>
    </Wrap>
  </>)
}

export default MenuItemList
