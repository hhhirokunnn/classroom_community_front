import React from 'react';
import MenuItemList from './MenuItemList'

const SideMenu = ({ sideMenuItemList, setMenuItemTag, menuItemTag }) => {

  return (<>
    <div>
      {sideMenuItemList.map((memnu, i) => {
        return (
          <MenuItemList 
            key={i} 
            title={memnu.title} 
            itemList={memnu.items} 
            setMenuItemTag={setMenuItemTag}
            menuItemTag={menuItemTag} />
          )})}
    </div>
  </>)
}

export default SideMenu
