import React from 'react'
import styled from 'styled-components'
import * as C from '../../../styles/colors'
import * as S from '../../../styles/styledComponents'

const InputComponent = styled.input`
  width: 100%;
  padding: 0.85rem;
  border: 2px solid ${C.colors.input};
  color: ${C.colors.dark};
  border-radius: 8px;
  cursor: text;
  ${S.font};
  font-size: 1rem;
  font-weight: 400;
  transition: border-color 0.55s ease;

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }
  
  &:focus {
    outline: none;
    border-color: ${C.colors.red};
  }
`

const Input = ({ type, placeholder, onChange, ...rest }) => {
  return (
  <InputComponent
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    {...rest} />
  )
}

export default Input
