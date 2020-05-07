import React, { useState } from 'react';
import { LoginButtonBox, LoginButton, HomeSvg } from './style'
import PageSelectButton from './PageSelectButton'

const PageNavigation = () => {

  const [isFocussed, setIsFocussed] = useState(false)

  return (<>
    <PageSelectButton label='トップページ' svgComponent={<HomeSvg/>} selfPath='top'/>
    <PageSelectButton label='アクティビティ' svgComponent={<HomeSvg/>} marginLeft='12%' selfPath='activity'/>
    <PageSelectButton label='ポスト' svgComponent={<HomeSvg/>} marginLeft='25%' selfPath='post'/>
    <PageSelectButton label='お問い合わせ' svgComponent={<HomeSvg/>} marginLeft='34%' selfPath='inquiry'/>
    <LoginButtonBox onMouseOver={() => setIsFocussed(true)} onMouseOut={() => setIsFocussed(false)} isFocussed={isFocussed}>
      <LoginButton isFocussed={isFocussed}>
        ログイン
      </LoginButton>
    </LoginButtonBox>
  </>)
}

export default PageNavigation
