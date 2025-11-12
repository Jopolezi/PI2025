import styled from "styled-components"
import * as S from "@/styles/styledComponents"
import * as C from "@/styles/colors"
import "@fontsource/poppins"

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background: ${C.colors.white};
  color: ${C.colors.white};
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 10px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  padding: 10px 4%;
  background: ${C.colors.offwhite};
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
`;

export const Divider = styled.hr`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  height: 1px;
  border: none;
  background: rgba(58, 69, 83, 0.3);
`;

export const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
  margin-top: 32px;
`