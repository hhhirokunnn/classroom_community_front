import React, { useState, useRef } from 'react';
import MenuItemList from './MenuItemList'

const SideMenu = () => {

  const mokujiItemList = [
    { 
      title: 'オンラインクラスルームとは？',
      url: 'online'
    },
    { 
      title: 'じゅんび',
      url: 'prepare'
    },
    { 
      title: 'やってみる',
      url: 'try'
    },
    { 
      title: 'さいごに',
      url: 'last'
    },
  ]

  return (<>
    <div>
      <MenuItemList title='もくじ' itemList={mokujiItemList} />
      <MenuItemList title='アクティビティとは？' itemList={mokujiItemList} />
      <MenuItemList title='ポストとは？' itemList={mokujiItemList} />
    </div>
  </>)
}

export default SideMenu
