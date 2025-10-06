import styled from "styled-components";
import * as C from "../../../styles/colors";
import * as S from "../../../styles/styledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  max-height: 100dvh;
  width: 100%;
  background: ${C.colors.offwhite};
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  padding: 0 4%;
  background: ${C.colors.offwhite};
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 4px 4%;
  }
`;

export const Content = styled.div`
  ${S.flexCenter};
  flex-direction: column;
  width: 100%;
  padding: 0 4%;
  flex: 1;
  min-height: 0;
  justify-content: center;
`;

export const Title = styled.h1`
  ${S.font};
  font-weight: 600;
  font-size: 1.6rem;
  color: ${C.colors.darkGray};
  margin: 0 0 0.5rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
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
  gap: 0.75rem;

  @media (max-width: 768px) {
    padding: 0.875rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.5rem;
  }
`;

export const InputTitle = styled.label`
  ${S.font};
  font-weight: 500;
  font-size: 0.85rem;
  color: ${C.colors.dark};
  margin-bottom: 0.125rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 6px;
  }
`;

export const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 0.75rem 0;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${C.colors.lightgray};
    transition: background 0.3s ease;

    &.active {
      background: ${C.colors.red};
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 40px;
  max-width: 100%;
  padding: 8px 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${C.colors.offwhite};
  color: ${C.colors.gray};
  flex-shrink: 0;

  @media (max-width: 768px) {
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
