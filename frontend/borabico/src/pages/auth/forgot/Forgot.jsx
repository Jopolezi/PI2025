import { useEffect, useState } from "react"
import * as S from "./styledForgot"

function Forgot() {
  useEffect(() => {
    document.title = "Recuperar senha"
  }, []);

  const steps = [
  { title: 'Email da Conta' },
  { title: 'Código' },
  { title: 'Nova Senha' }
];


  return (
    <>

    </>
  )
}

export default Forgot;
