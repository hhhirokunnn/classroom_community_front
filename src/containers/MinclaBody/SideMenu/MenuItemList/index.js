import React, { useState, useEffect } from 'react';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { 
  Wrap,
  MenuTitleIcon,
  MenuItemListBox,
  MenuTitleBox
} from './style'
import MenuItem from './MenuItem'

const MenuItemList = ({ title, itemList, setMenuItemTag, menuItemTag }) => {

  const [isClicked, setIsClicked] = useState(false)

  useEffect(()=>{
    setIsClicked(isSelected())
  }, [])

  const titleIcon = () => isClicked ? '▼' : '▶︎'

  const isSelected = () => itemList.includes(menuItemTag)

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
            <MenuItem 
              key={index} 
              title={item.title} 
              tag={item.tag}
              setMenuItemTag={setMenuItemTag}
              menuItemTag={menuItemTag}/>))}
        </MenuItemListBox>
      </Collapse>
    </Wrap>
  </>)
}

export default MenuItemList
