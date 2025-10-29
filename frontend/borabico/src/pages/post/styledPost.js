import styled from "styled-components";
import * as SC from "@/styles/styledComponents";
import * as C from "@/styles/colors";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  flex: 1;
  background: ${C.colors.white};
  color: ${C.colors.white};
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  white-space: nowrap;
  width: 100%;
  flex: 1;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    white-space: normal;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-self: flex-start;
  flex-wrap: wrap;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    align-self: stretch;
  }
`;

export const UserProfile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${C.colors.dark};
  margin-top: 10px;

  &:hover {
    color: ${C.colors.red};
  }

  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const UserImage = styled.img`
  ${SC.flexCenter}; 
  width: 40px;
  height: 40px;
  border: 2px solid ${C.colors.gray};
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const UserIcon = styled.div`
  ${SC.flexCenter};
  width: 40px;
  height: 40px;
  color: ${C.colors.gray};
  border: 2px solid ${C.colors.gray};
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const UserName = styled.span`
  color: ${C.colors.gray};
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  color: ${C.colors.gray};
`

export const Title = styled.h1`
  color: ${C.colors.dark};
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Urgency = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  padding: 0 10px;
  width: fit-content;
  height: 26px;
  gap: 5px;
  background: ${C.colors.red};
  -webkit-box-shadow: 0px 1px 11px 1px rgba(183, 28, 28, 0.8);
  box-shadow: 0px 1px 11px 1px rgba(183, 28, 28, 0.3);
  color: ${C.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    margin: 8px 0;
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    flex-wrap: wrap;
    margin-bottom: 5px;
  }
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

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

export const TitleDescription = styled.h2`
  color: ${C.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  padding: 10px 0;
  white-space: pre-wrap;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 8px 0;
    line-height: 1.5;
  }
`;

export const TitleData = styled.h2`
  color: ${C.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Data = styled.h2`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Value = styled.span`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const Payment = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: fit-content;
  height: 26px;
  gap: 5px;
  background: ${C.colors.red};
  color: ${C.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
  }
`;

export const Question = styled.h2`
  color: ${C.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Answer = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  ${SC.flexCenter};
  width: fit-content;
  height: 42px;
  padding: 12px;
  background: ${({ loading }) => (loading ? C.colors.gray : C.colors.red)};
  color: ${C.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s;
  gap: 5px;

  &:hover {
    cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
    background: ${(props) => (props.disabled ? C.colors.gray : C.colors.red)};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 44px;
    font-size: 13px;
  }
`;

export const OwnerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Edit = styled(Button)`
  background: ${C.colors.gray};
  border: 2px solid transparent;

  &:hover {
    background: ${C.colors.gray};
  }
`;

export const Delete = styled(Button)`
  background: ${C.colors.red};
`;
