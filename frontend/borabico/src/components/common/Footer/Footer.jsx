import React from 'react';
import * as S from './styledFooter';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.Container>
      <S.Logo>
        <S.Image src="/public/borabico.ico" alt="Logo Borabico" />
      </S.Logo>
        <S.FooterText>
          © 2025 - {currentYear} Borabico. Todos os direitos reservados.
        </S.FooterText>
    </S.Container>
  );
}

export default Footer;