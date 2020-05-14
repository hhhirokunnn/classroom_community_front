import styled from 'styled-components';
import { UserAdd }  from '@styled-icons/heroicons-solid/UserAdd';

export const Wrap = styled.div`
  text-align: center;
`

export const ContentImg = styled.img`
  margin: auto
`

export const ContentTitle = styled.div`
  margin-top: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: salmon;
  font-size: 30px;
`

export const ContentDescription = styled.div`
  font-size: 20px;
  // margin-bottom: 24px;
`

export const UserAddSvg = styled(UserAdd)`
  color: yellowgreen;
  width: 30px;
  height: 30px;
  align-item: center;
`
