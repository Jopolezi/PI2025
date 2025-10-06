import styled from "styled-components";
import * as S from "../../styles/styledComponents";
import * as C from "../../styles/colors";
import { Link } from "react-router-dom";

export const Container = styled.section`
  ${S.flexCenter};
  width: 100%;
  height: calc(100dvh - 50px);
  gap: 10px;
  background: ${C.colors.white};
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: 100dvh;
  }
`;

export const Content = styled.div`
  ${S.flexCenter};
  max-width: 1200px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FlexDirection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Text = styled.h1`
  display: block;
  text-align: left;
  ${S.font};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${C.colors.dark};
  cursor: default;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Label = styled.p`
  text-align: center;
  ${S.font};
  font-weight: 400;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: ${C.colors.dark};
  cursor: default;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Home = styled(Link)`
  color: ${C.colors.red};
  text-decoration: none;
`;
