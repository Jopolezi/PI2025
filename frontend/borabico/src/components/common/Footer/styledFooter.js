import styled from "styled-components";
import * as S from "../../../styles/styledComponents";
import * as C from "../../../styles/colors";

export const Container = styled.footer`
  ${S.flexCenter};
  width: 100%;
  height: 50px;
  gap: 10px;
  background: ${C.colors.offwhite};
  color: ${C.colors.dark};
  ${S.font};
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  ${S.flexCenter};
`;

export const Image = styled.img`
  object-fit: cover;
  width: 20px;
  height: 0 auto;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
`;
