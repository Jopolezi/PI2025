import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import * as C from "../../../styles/colors";
import * as S from "../../../styles/styledComponents";
import Button from "../../../components/common/Buttons/button";

export const LoginButton = styled(Button)`
  background: ${(props) =>
    props.disabled ? C.colors.gray : C.colors.red} !important;

  &:hover {
    background: ${(props) =>
      props.disabled ? C.colors.gray : C.colors.darkRed} !important;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  max-height: 100dvh;
  width: 100%;
  background: ${C.colors.offwhite};
  overflow: hidden;
`;

export const ShapeTop = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  top: 0;
  right: 0;
  background: ${C.colors.red};
  z-index: 0;
  clip-path: path("M0 130Q200 280 400 200T800 500L800 300 0 300Z");
  transform: rotate(180deg);
`;

export const ShapeBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  bottom: 0;
  left: 0;
  background: ${C.colors.red};
  z-index: 0;
  clip-path: path("M0 130Q200 280 400 200T800 500L800 300 0 300Z");
`;

export const Content = styled.div`
  ${S.flexCenter};
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 0 4%;
  flex: 1;
  min-height: 0;
  justify-content: center;
  z-index: 1;
`;

export const Slogan = styled.h1`
  ${S.font};
  font-weight: 600;
  font-size: 1.5rem;
  color: ${C.colors.dark};
  margin: 0 0 1rem 0;

  span {
    color: ${C.colors.red};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: ${C.colors.white};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 0.5rem;
`;

export const Return = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${C.colors.dark};
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${C.colors.red};
  }
`;

export const Title = styled.h2`
  ${S.font};
  font-weight: 600;
  font-size: 1.8rem;
  color: ${C.colors.darkGray};
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputTitle = styled.label`
  ${S.font};
  font-weight: 500;
  font-size: 0.85rem;
  color: ${C.colors.dark};
  margin-bottom: 0.2rem;
  margin-left: 10px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Visibility = styled.button`
  position: absolute;
  display: flex;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${C.colors.gray};
`;

export const InputError = styled.p`
  ${S.font};
  font-weight: 500;
  font-size: 0.75rem;
  color: ${C.colors.red};
  margin: 0.1rem 0 0 0;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const MoreOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 6px;
  }
`;

export const ForgotPassword = styled(Link)`
  display: flex;
  margin-left: auto;
  ${S.font};
  font-weight: 500;
  font-size: 0.85rem;
  color: ${C.colors.red};
  text-decoration: underline;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const AndContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0.5rem 0;
  color: ${C.colors.gray};
  font-size: 0.75rem;
  gap: 8px;

  @media (max-width: 480px) {
    margin: 0.375rem 0;
    font-size: 0.7rem;
  }
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1.5px;
  background: ${C.colors.lightgray};
`;

export const AndText = styled.span`
  white-space: nowrap;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
`;

export const RegisterTitle = styled.p`
  ${S.font};
  font-weight: 500;
  font-size: 0.8rem;
  color: ${C.colors.dark};
  margin: 0;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Register = styled(Link)`
  ${S.font};
  font-weight: 500;
  color: ${C.colors.red};
  text-decoration: underline;
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 40px;
  max-width: 100%;
  padding: 8px 4%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${C.colors.offwhite};
  color: ${C.colors.gray};
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
    text-align: center;
    padding: 6px 4%;
    min-height: 35px;
  }

  @media (max-width: 480px) {
    padding: 4px 4%;
    min-height: 30px;
  }
`;

export const FooterText = styled.p`
  ${S.font};
  font-weight: 400;
  font-size: 0.65rem;
  pointer-events: none;
  user-select: none;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const FooterLinks = styled.div`
  font-size: 0.65rem;
  display: flex;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 0.6rem;
  }

  a {
    color: ${C.colors.gray};
    text-decoration: none;
    ${S.font};
    font-weight: 400;
    transition: color 0.55s ease;

    &:hover {
      color: ${C.colors.dark};
    }
  }
`;
