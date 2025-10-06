import React, { useState, useEffect } from "react";
import * as S from "./styledHeader";
import { Link } from "react-router-dom";
import { useHeader, useHeaderVisible } from "../../../hooks/useHeader";
import { IoHome, IoBriefcase } from "react-icons/io5";

function Header() {
  const { isVisible } = useHeaderVisible();
  const { isLogged } = useHeader();

  return (
    <>
      <S.Header isVisible={isVisible}>
        <S.Logo>
          <Link to="/">
            <S.Image src="/borabico.ico" alt="Logo Borabico" />
          </Link>

          <S.Slogan>
            Bicos <S.Span>rápidos</S.Span>, oportunidades <S.Span>reais</S.Span>.
          </S.Slogan>
        </S.Logo>

        <S.Buttons>
          <S.Register to="/cadastrar">Cadastre-se agora</S.Register>

          <S.Login to="/entrar">Entrar</S.Login>
        </S.Buttons>
      </S.Header>

      {isLogged && (
        <>
          <S.Header isVisible={isVisible}>
            <S.Logo>
              <Link to="/">
                <S.Image src="/borabico.ico" alt="Logo Borabico" />
              </Link>

              <S.Slogan>
                Bicos <S.Span>rápidos</S.Span>, oportunidades <S.Span>reais</S.Span>.
              </S.Slogan>
            </S.Logo>

          <S.Navbar>
            <S.NavList>
              <S.NavItem><S.NavLink to="/inicio"><IoHome />Início</S.NavLink></S.NavItem>
              <S.NavItem><S.NavLink to="/vagas">Vagas</S.NavLink></S.NavItem>
              <S.NavItem><S.NavLink to="/vagas"><IoBriefcase />Vagas</S.NavLink></S.NavItem>
            </S.NavList>
          </S.Navbar>
            
          </S.Header>
        </>
      )}
    </>
  );
}

export default Header;
