import React, { useState, useEffect } from 'react';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { 
  Wrap,
  MenuTitleIcon,
  MenuItemListBox
} from './style'
import MenuItem from './MenuItem'
import Box from '@material-ui/core/Box';

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
          <Box
            component='div'
            width={{ md: '200px', lg: "220px" }}
            borderBottom='3px dotted goldenrod'
            fontSize='16px'
            paddingBottom='5px'
            onClick={() => setIsClicked(!isClicked)}>
            <MenuTitleIcon>{titleIcon()}</MenuTitleIcon><strong>{title}</strong>
          </Box>
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
