import styled from "styled-components";
import * as C from "../../../styles/colors";
import * as S from "../../../styles/styledComponents";
import { Link } from "react-router-dom";

export const Header = styled.header`
  z-index: 999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  height: 80px;
  transition: ${({ isVisible }) =>
    isVisible ? "background 0.2s ease-in-out" : "none"};
  background: ${C.colors.white};
  border-bottom: 1px solid ${C.colors.input};
  box-shadow: ${({ isVisible }) =>
    isVisible ? `0 2px 4px rgba(0, 0, 0, 0.1)` : "none"};
  ${S.font};

  @media (max-width: 768px) {
    position: relative;
    background: ${C.colors.white};
  }
`;

export const Logo = styled.div`
  ${S.flexCenter};
`;

export const Image = styled.img`
  object-fit: cover;
  width: 50px;
  height: 0 auto;
  transition: all 0.55s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Slogan = styled.h1`
  ${S.font};
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Span = styled.span`
  color: ${C.colors.red};
`;

export const Buttons = styled.div`
  ${S.flexCenter};
  gap: 10px;
`;

export const Login = styled(Link)`
  ${S.flexCenter};
  padding: 10px;
  width: 100px;
  height: 50px;
  background: ${C.colors.red};
  color: ${C.colors.white};
  cursor: pointer;
  border-radius: 24px;
  transition: background 0.5s ease;
  text-decoration: none;

  &:hover {
    background: ${C.colors.darkred};
  }

  @media (max-width: 768px) {
    padding: 0;
    max-width: 100px;
  }
`;

export const Register = styled(Link)`
  ${S.flexCenter};
  padding: 10px;
  height: 50px;
  color: ${C.colors.dark};
  cursor: pointer;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.5s ease;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background: ${C.colors.lightgray};
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 150px;
    justify-content: center;
    font-size: 14px;
    white-space: nowrap;
  }
`;

export const Navbar = styled.nav`
  ${S.flexCenter};
  gap: 30px;
  list-style: none;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${C.colors.dark};
  transition: color 0.3s ease;

  &:hover {
    color: ${C.colors.red};
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Return = styled.button`
  ${S.flexCenter};
  gap: 10px;
  border: none;
  padding: 10px;
  background: none;
  color: ${C.colors.dark};
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateX(-5px);
  }
`;
