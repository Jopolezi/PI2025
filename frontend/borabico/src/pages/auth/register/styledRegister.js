import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import * as C from "../../../styles/colors";
import * as S from "../../../styles/styledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  width: 100%;
  background: ${C.colors.offwhite};
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  padding: 0 4%;
  background: ${C.colors.offwhite};
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 4px 4%;
  }
`;

export const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${C.colors.dark};
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
  }
`;

export const LogoText = styled.h2`
  ${S.font};
  font-weight: 800;
  font-size: 1.1rem;
  color: ${C.colors.dark};
  margin: 0;
  pointer-events: none;
  user-select: none;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Span = styled.span`
  color: ${C.colors.red};
`;

export const Content = styled.div`
  ${S.flexCenter};
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 2rem 4%;
  flex: 1;
  justify-content: center;
`;

export const Title = styled.h1`
  ${S.font};
  font-weight: 600;
  font-size: 1.8rem;
  color: ${C.colors.darkGray};
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background: ${C.colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
    max-width: 90%;
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const FullWidthRow = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const StrengthMeterTitle = styled.label`
  ${S.font};
  font-weight: 500;
  font-size: 0.85rem;
  color: ${C.colors.dark};
  margin-bottom: 0.5rem;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
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
  margin-bottom: 0.25rem;
  padding-left: 10px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const InputError = styled.p`
  ${S.font};
  font-weight: 500;
  font-size: 0.75rem;
  color: ${C.colors.red};
  margin: 0.25rem 0 0 0;
  padding-left: 10px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
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

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

export const LoginTitle = styled.p`
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

export const Login = styled(Link)`
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

export const SelectWrapper = styled.div`
  .react-select__control {
    width: 100%;
    padding: 0px;
    margin: 0;
    border: 2px solid ${props => props.error ? C.colors.red : C.colors.input};
    border-radius: 20px;
    box-shadow: none;
    transition: all 0.5s;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: ${props => props.error ? 'rgba(239, 68, 68, 0.5)' : C.colors.white};

    &:hover,
    &.react-select__control--is-focused {
      border: 2px solid ${C.colors.red};
    }
  }

  .react-select__value-container {
    padding: 12px;
  }

  .react-select__input-container {
    margin: 0;
    padding: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${C.colors.gray};

    &:hover {
      color: ${C.colors.red};
    }
  }

  .react-select__placeholder {
    color: ${C.colors.gray};
  }

  .react-select__single-value {
    color: ${C.colors.dark};
  }

  .react-select__menu {
    border: 1px solid ${C.colors.input};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: "Poppins", sans-serif;
  }

  .react-select__option {
    color: ${C.colors.dark};
    transition: all 0.25s;

    &:hover {
      background-color: ${C.colors.red};
      color: ${C.colors.white};
    }

    &.react-select__option--is-selected {
      background-color: ${C.colors.red};
      color: ${C.colors.white};
    }
  }
`;