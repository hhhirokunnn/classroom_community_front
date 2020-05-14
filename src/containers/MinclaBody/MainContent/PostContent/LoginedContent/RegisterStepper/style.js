import styled from 'styled-components';

export const Wrap = styled.div`
  text-align: center;
`

export const NotCompleteStep = styled.div`
  background-color: lightgreen;
  color: white;
  width: 20px; 
  height: 20px;
  padding: 5px;
  border-radius: 25px;
`

export const StepContent = styled.div`
  width: 100px;
  height: 100px;
  text-align: -webkit-center
`

export const CompleteStep = styled.div`
  background-color: mediumseagreen;
  color: white;
  width: 20px; 
  height: 20px;
  padding: 5px;
  border-radius: 25px;
`
export const StepBar = styled.div`
  padding-top: 27px;
  padding-bottom: 27px;
  display: flex;
  font-size: 13px;
  justify-content: center;
`

export const HorizenBar = styled.hr`
  display: flex;
  background-color: mediumseagreen;
  margin-left: 10px;
  margin-right: 10px;
  width: 65px;
  height: 1px;
  border: none;
  position: relative;
  top: 3px;
`

export const StepTitle = styled.div`
  font-weight: bold;
  color: ${props => (props.selected ? 'mediumseagreen' : 'lightgreen')};
  text-align: center;
  div {
    display: block;
  }
  text-align: -webkit-center;
  
`
