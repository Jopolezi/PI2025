import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as C from "../../../styles/colors";
import * as S from "../../../styles/styledComponents";

export const Header = styled.header`
  ${S.font};
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 12px 2%;
  background: ${C.colors.white};
  border-bottom: 1px solid ${C.colors.input};

  @media (max-width: 768px) {
    position: relative;
    background: ${C.colors.white};
  }
`;

export const Logo = styled.div`
  ${S.flexCenter};
`;

export const Image = styled.img`
  width: 50px;
  height: 0 auto;
  object-fit: cover;
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

export const Register = styled(Link)`
  ${S.flexCenter};
  height: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${C.colors.dark};
  text-decoration: none;
  white-space: nowrap;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: ${C.colors.lightgray};
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 150px;
    font-size: 14px;
    justify-content: center;
    white-space: nowrap;
  }
`;

export const Login = styled(Link)`
  ${S.flexCenter};
  width: 100px;
  height: 50px;
  padding: 10px;
  color: ${C.colors.white};
  text-decoration: none;
  background: ${C.colors.red};
  border-radius: 24px;
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background: ${C.colors.darkred};
  }

  @media (max-width: 768px) {
    max-width: 100px;
    padding: 0;
  }
`;

export const Navbar = styled.nav`
  ${S.flexCenter};
  position: relative;
  gap: 30px;
`;

export const Items = styled(NavLink)`
  ${S.flexCenter};
  gap: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: ${C.colors.red};
  }

  &.active {
    color: ${C.colors.red};
  }
`;

export const Trigger = styled(DropdownMenu.Trigger)`
  ${S.flexCenter};
  flex-direction: column;
  gap: 5px;
  padding: 12px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Photo = styled.div`
  ${S.flexCenter};
  width: 32px;
  height: 32px;
  padding: 5px;
  background: ${C.colors.offwhite};
  border: 2px solid ${C.colors.dark};
  border-radius: 50%;
`;

export const Content = styled(DropdownMenu.Content)`
  width: 150px;
  padding: 10px;
  background: ${C.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  background: none;
  color: ${C.colors.dark};
  border: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${C.colors.offwhite};
    border: none;
    border-radius: 6px;
  }

  &:last-child {
    color: ${C.colors.red};
  }
`;

export const Return = styled.button`
  ${S.flexCenter};
  gap: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  background: none;
  border: none;
  transition: all 0.5s;

  &:hover {
    color: ${C.colors.redPrimary};
    cursor: pointer;
    transform: translateX(-5px);
  }
`;