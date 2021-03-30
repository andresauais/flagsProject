import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.label `
  display: inline-flex;
  justify-content: center;
  background: white;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  padding: 0 2rem;
  border-radius: 5px;
  i{
    margin-right: 1em;
    color: #c4c4c4;
  }
  input{
    flex: 1;
    height: 48px;
    line-height: 48px;
    font-size: 1em;
    border: none;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`

function Input({...props}){
  return(
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="text" {...props}/>
    </InputStyled>
  )
}

export default Input;