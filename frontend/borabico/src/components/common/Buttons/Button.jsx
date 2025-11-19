import styled from 'styled-components'
import * as C from '../../../styles/colors'
import * as S from "../../../styles/styledComponents"

const ButtonComponent = styled.button`
width: 100%;
background: ${({ loading }) => loading ? C.colors.gray : C.colors.red};
color: ${C.colors.white};
font-size: 1rem;
font-family: "Poppins", sans-serif;
padding: 0.85rem;
border: none;
border-radius: 20px;
margin-top: 1rem;
cursor: ${({ loading }) => loading ? 'not-allowed' : 'pointer'};
transition: background 0.2s;
  
&:hover {
background: ${({ loading }) => loading ? C.colors.gray : C.colors.darkred};
}
    
&:disabled {
opacity: 0.7;
}
`

const Button = ( { type, loading, children, ...props }) => {
  return (
    <ButtonComponent 
    type={type}
    disabled={loading}
    {...props}>
    {children}
    </ButtonComponent>

  )
}

export default Button