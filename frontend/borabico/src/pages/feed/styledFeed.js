import styled from "styled-components";
import * as S from "@/styles/styledComponents";
import * as C from "@/styles/colors";
import "@fontsource/poppins";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background: ${C.colors.white};
  color: ${C.colors.white};
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  padding: 10px 4%;
  background: ${C.colors.offwhite};

  @media (max-width: 768px) {
    padding: 10px 4%; 
  }
`;

export const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

export const Search = styled.div`
  ${S.flexCenter};
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between; 
  }
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    max-width: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 12px;
  margin: 0 auto;
  border: 2px solid ${C.colors.input};
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  transition: all 0.5s;
  box-sizing: border-box;
  color: ${C.colors.dark};

  &:focus,
  &:hover {
    border: 2px solid ${C.colors.red};
  }

  &[type="date"],
  &[type="time"] {
    &::-webkit-calendar-picker-indicator {
      display: none;
    }
  }
`;

export const SearchInput = styled(Input)`
  padding-right: 60px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  ${S.flexCenter};
  right: 0;
  top: 0;
  bottom: 0;
  color: ${C.colors.gray};
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${C.colors.red};
  }
`;

export const Filters = styled.div`
  position: relative;
  color: ${C.colors.gray};
  cursor: pointer;
`;


export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    border-bottom: 1px solid ${C.colors.input};
  }
`;

export const FilterButton = styled.button`
  ${S.flexCenter};
  padding: 10px;
  background: none;
  border: none;
  color: ${C.colors.gray};
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    color: ${C.colors.red};
    background: ${C.colors.offwhite};
  }
`;

export const FilterMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 8px;
  padding: 16px;
  background: ${C.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 100;

  @media (max-width: 480px) {
    width: 250px;
  }
`;

export const FilterTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.dark};
  margin-bottom: 12px;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  background: ${C.colors.white};
`;

export const SelectWrapper = styled.div`
  .react-select__control {
    width: 100%;
    margin-bottom: 20px;
    padding: 0px;
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

  [data-highlighted],
  [data-state="open"] {
    background: transparent !important;
    outline: none !important;
    border: none !important;
  }

  &:focus,
  &:hover {
    outline: none !important;
    border: none !important;
  }
`;

export const Confirm = styled.button`
  width: 100%;
  padding: 10px 16px;
  background: ${C.colors.red};
  color: ${C.colors.white};
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 8px;
  cursor: pointer;
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
  }
`;