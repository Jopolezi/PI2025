import styled from "styled-components";
import * as SC from "@/styles/styledComponents";
import * as C from "@/styles/colors";
import "@fontsource/poppins";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background: ${C.colors.white};
  color: ${C.colors.white};
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2% 4%;
  background: ${C.colors.offwhite};
`;

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

export const Group = styled.div`
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
  margin: 0;
  border: 2px solid ${C.colors.input};
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  transition: all 0.5s;
  box-sizing: border-box;
  color: ${C.colors.dark};

  &:focus,
  &:hover {
    border: 2px solid ${C.colors.red};
  }

  &[type="date"], &[type="time"] {
    &::-webkit-calendar-picker-indicator {
      display: none;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  outline: none;
  padding: 12px;
  margin: 0;
  border: 2px solid ${C.colors.input};
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  transition: all 0.5s;

  &:focus,
  &:hover {
    border: 2px solid ${C.colors.red};
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: ${C.colors.red};
  cursor: pointer;
  flex-shrink: 0;
`;

export const CharCount = styled.span`
  position: absolute;
  bottom: -35px;
  right: 5px;
  ${SC.flexCenter};
  align-self: flex-end;
  margin: 10px 0;
  color: ${C.colors.gray};
`;

export const Icon = styled.div`
  position: absolute;
  ${SC.flexCenter};
  left: 0;
  top: 0;
  bottom: 0;
  color: ${C.colors.gray};
  padding: 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export const MarginInput = styled(Input)`
  padding-left: 60px;
`;

export const SelectWrapper = styled.div`
  .react-select__control {
    width: 100%;
    padding: 0px;
    margin: 0;
    border: 2px solid ${C.colors.input};
    border-radius: 8px;
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

export const Submit = styled.button`
  ${SC.flexCenter};
  width: 50%;
  padding: 12px;
  background: ${({ loading }) => (loading ? C.colors.gray : C.colors.red)};
  color: ${C.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s;
  gap: 10px;

  &:hover {
    cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
    background: ${(props) => (props.disabled ? C.colors.gray : C.colors.red)};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
