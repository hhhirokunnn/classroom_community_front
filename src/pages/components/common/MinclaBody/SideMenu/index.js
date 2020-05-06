import React, { useState, useRef } from 'react';
import MenuItem from './MenuItem'

const SideMenu = () => {

  const mokujiItemList = [
    { 
      title: 'オンラインクラスルームとは？',
      url: ''
    },
    { 
      title: 'じゅんび',
      url: ''
    },
    { 
      title: 'やってみる',
      url: ''
    },
    { 
      title: 'さいごに',
      url: ''
    },
  ]

  return (<>
    <div>
      <MenuItem title='もくじ' itemList={mokujiItemList} />
      <MenuItem title='アクティビティとは？' itemList={mokujiItemList} />
      <MenuItem title='ポストとは？' itemList={mokujiItemList} />
    </div>
  </>)
}

export default SideMenu
