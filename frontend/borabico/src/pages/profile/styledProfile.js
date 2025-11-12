import styled from "styled-components"
import * as SC from "@/styles/styledComponents"
import * as C from "@/styles/colors"
import { Link } from "react-router-dom";
import "@fontsource/poppins";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  flex: 1;
  background: ${C.colors.white};
  color: ${C.colors.dark};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2% 4%;
  background: ${C.colors.offwhite};

  @media (max-width: 768px) {
    padding: 4% 5%;
  }
`;

export const Return = styled.button`
  display: flex;
  align-items: center;
  align-selft: flex-start;
  padding: 12px;
  width: fit-content;
  height: auto;
  background: none;
  border: none;
  gap: 5px;
  color: ${C.colors.dark};
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${C.colors.red};
  }

`;

const Flex = styled.div`
display: flex;
`

export const NameAndImage = styled(Flex)`
align-items: center;
align-self: flex-start;
gap: 30px;
`

export const ContainerImage = styled.div`
${SC.flexCenter};
width: 200px;
height: 200px;
border-radius: 50%;
background: ${C.colors.offwhite};
`

export const Image = styled.img`
object-fit: cover;
width: fit-content;
height: 100%;
`

export const Name = styled.h1`
color: ${C.colors.dark};
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  line-height: 1.2;
`