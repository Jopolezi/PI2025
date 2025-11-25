import styled from "styled-components";
import * as SC from "@/styles/styledComponents";
import * as C from "@/styles/colors";
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
  padding: 12px;
  width: fit-content;
  background: none;
  border: none;
  gap: 5px;
  color: ${C.colors.dark};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: ${C.colors.red};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 30px;
  background: ${C.colors.white};
  color: ${C.colors.dark};
  border: 2px solid rgba(58, 69, 83, 0.3);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(58, 69, 83, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center; /* Centraliza itens na visualização móvel */
  }
`;

export const ContainerImage = styled.div`
  ${SC.flexCenter};
  width: 100px;
  height: 100px;
  border: 2px solid ${C.colors.gray};
  border-radius: 50%;
  color: ${C.colors.gray};
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center; /* Centraliza texto no mobile */
  }
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${C.colors.gray};
  font-size: 0.9rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LocationLabel = styled.span`
  font-size: 16px;
  color: ${C.colors.gray};
  font-family: "Poppins", sans-serif;
`;

export const Edit = styled.button`
  ${SC.flexCenter};
  padding: 12px;
  background: transparent;
  color: ${C.colors.gray};
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: rotate(360deg);
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleSection = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  margin: 10px 0 0 0;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  margin: 0;
`;

export const InfoDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 12px 20px;
  background: ${C.colors.red}1A;
  color: ${C.colors.red};
  border-radius: 12px;
  border: 2px solid ${C.colors.red}33;
`;

export const StatisticNumber = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const StatisticLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const InfoFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const Icon = styled.div`
  ${SC.flexCenter};
  width: 40px;
  height: 40px;
  background: ${C.colors.red}1A;
  border: 2px solid ${C.colors.red}33;
  border-radius: 10px;
  color: ${C.colors.red};
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InfoItem = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  margin: 0;
`;

export const InfoLabel = styled.div`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
`;

export const EditGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const Helper = styled.span`
  font-size: 13px;
  color: ${C.colors.gray};
  font-family: "Poppins", sans-serif;
  padding-left: 4px;
  opacity: 0.8;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${C.colors.dark};
  font-family: "Poppins", sans-serif;
  padding-left: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 2px solid ${C.colors.input};
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${C.colors.red};
  }

  &::placeholder {
    color: ${C.colors.gray};
    opacity: 0.6;
  }

  &:disabled {
    background-color: ${C.colors.offwhite};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;

  .react-select__control {
    width: 100%;
    min-height: 52px;
    padding: 2px 6px;
    border: 2px solid ${C.colors.input};
    border-radius: 12px;
    box-shadow: none;
    transition: all 0.3s ease;
    box-sizing: border-box;
    cursor: pointer;

    &:hover,
    &.react-select__control--is-focused {
      border-color: ${C.colors.red};
    }
  }

  .react-select__value-container {
    padding: 2px 12px;
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
    transition: all 0.3s ease;

    &:hover {
      color: ${C.colors.red};
    }
  }

  .react-select__placeholder {
    color: ${C.colors.gray};
    opacity: 0.6;
    font-family: "Poppins", sans-serif;
  }

  .react-select__single-value {
    color: ${C.colors.dark};
    font-family: "Poppins", sans-serif;
  }

  .react-select__menu {
    border: 2px solid ${C.colors.input};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  .react-select__menu-list {
    padding: 0;
  }

  .react-select__option {
    color: ${C.colors.dark};
    padding: 12px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: "Poppins", sans-serif;

    &:hover {
      background-color: ${C.colors.red}1A;
      color: ${C.colors.red};
    }

    &.react-select__option--is-selected {
      background-color: ${C.colors.red};
      color: ${C.colors.white};
    }

    &.react-select__option--is-focused {
      background-color: ${C.colors.red}1A;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: none;
  padding: 14px 18px;
  border: 2px solid ${C.colors.input};
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  line-height: 1.5;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${C.colors.red};
  }

  &::placeholder {
    color: ${C.colors.gray};
    opacity: 0.6;
  }
`;

export const OwnerActions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  flex: 1;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: "Poppins", sans-serif;

  &:active {
    transform: scale(0.98);
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${C.colors.green};
  color: ${C.colors.white};

  &:hover {
    box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.1),
      inset 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${C.colors.red};
  color: ${C.colors.white};

  &:hover {
    box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.1),
      inset 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;