import styled from "styled-components";
import * as SC from "@/styles/styledComponents";
import * as C from "@/styles/colors";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  flex: 1;
  background: ${C.colors.offwhite};
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

export const Return = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${C.colors.dark};
  text-decoration: none;
  transition: all 0.3s;
  margin-bottom: 10px;

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
  width: 100%;
  flex: 1;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
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

export const TitleWrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  flex-wrap: wrap;
`;

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
  box-shadow: 0px 1px 11px 1px rgba(183, 28, 28, 0.15);
  color: ${C.colors.white};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
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
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 10px 0;
  height: 1px;
  border: none;
  background: rgba(58, 69, 83, 0.3);
`;

export const TitleDescription = styled.h2`
  color: ${C.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  padding: 10px 0;
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const TitleData = styled.h2`
  color: ${C.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
`;

export const Value = styled.span`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
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
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export const Question = styled.h2`
  color: ${C.colors.dark};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

export const Answer = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  margin-bottom: 20px;
`;

export const Button = styled.a`
  ${SC.flexCenter};
  width: fit-content;
  gap: 5px;?
  height: 42px;
  padding: 12px;
  background: ${({ loading }) => (loading ? C.colors.gray : C.colors.green)};
  color: ${C.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
      box-shadow:
      inset 0 0 15px 5px rgba(0, 0, 0, 0.1), 
      inset 0 0 10px rgba(0, 0, 0, 0.1); 
  }
    }
`;

export const OwnerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Edit = styled(Button)`
  background-color: ${C.colors.gray};
  color: ${C.colors.white};
`;

export const Save = styled(Button)`
  background-color: ${C.colors.green};
  color: ${C.colors.white};
`;

export const Delete = styled(Button)`
  background-color: ${C.colors.red};
  color: ${C.colors.white};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 10px auto;
  padding: 2% 4%;
  border: 1px solid ${C.colors.lightgray};
  border-radius: 8px;
  background: ${C.colors.white};
  font-family: "Poppins", sans-serif;
`;

export const EditGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${C.colors.gray};
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 12px;
  border: 2px solid ${C.colors.input};
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${C.colors.dark};
  transition: all 0.5s;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: ${C.colors.red};
  cursor: pointer;
  flex-shrink: 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  outline: none;
  padding: 12px;
  border: 2px solid ${C.colors.input};
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${C.colors.dark};
  transition: all 0.5s;
`;

export const SelectWrapper = styled.div`
  .react-select__control {
    width: 100%;
    padding: 0px;
    margin: 0;
    border: 2px solid ${C.colors.input};
    border-radius: 20px;
    box-shadow: none;
    transition: all 0.5s;
    box-sizing: border-box;

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

export const Important = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

export const ImportantContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ImportantIcon = styled.div`
  color: ${C.colors.red};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const ImportantText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ImportantTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${C.colors.dark};
`;

export const ImportantDescription = styled.span`
  font-size: 0.85rem;
  color: ${C.colors.gray};
`;

export const SubmitContainer = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubmitTextbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SubmitTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
`;

export const SubmitSubtitle = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
`;
