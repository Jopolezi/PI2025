// styledCardFeed.js
import styled, { css } from "styled-components";
import * as C from "@/styles/colors";
import * as SC from "@/styles/styledComponents";
import { Link } from "react-router-dom";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 5px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Data = styled.label`
  color: ${C.colors.gray};
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-align: left;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border: 1px solid rgba(58, 69, 83, 0.3);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  font-family: "Poppins", sans-serif;
`;

export const Urgency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0;
  margin-bottom: 5px;
  padding: 5px 10px;
  background: #fee2e2;
  color: ${C.colors.red};
  border: none;
  border-radius: 20px;
  pointer-events: none;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const User = styled(Flex)`
  gap: 5px;
`;

export const Profile = styled(Link)`
  text-decoration: none;
`;

export const Photo = styled.div`
  ${SC.flexCenter};
  width: 40px;
  height: 40px;
  color: ${C.colors.gray};
  border: 2px solid ${C.colors.gray};
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const Icon = styled.div`
  ${SC.flexCenter};
  width: 40px;
  height: 40px;
  color: ${C.colors.gray};
  border: 2px solid ${C.colors.gray};
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const Username = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: ${C.colors.gray};
  transition: all 0.5s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.hr`
  display: block;
  align-items: center;
  justify-content: center;
  width: calc(100% + 32px);
  padding: 0;
  margin: 10px -16px;
  height: 0.5px;
  border: none;
  background: rgba(58, 69, 83, 0.3);
`;

export const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 200px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${C.colors.dark};
  min-height: calc(20px * 1.2 * 1);
`;

export const Category = styled.span`
  display: inline-block;
  align-self: flex-start;
  background: #fee2e2;
  color: ${C.colors.red};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

export const Description = styled.p`
  max-height: 72px;
  color: #374151;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-wrap;
  line-height: 1.4;
  min-height: calc(14px * 1.4 * 3);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #374151;
  font-size: 14px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;

  &.green {
    background: #dcfce7;
    color: #16a34a;
  }

  &.blue {
    background: #dbeafe;
    color: #2563eb;
  }

  &.purple {
    background: #f3e8ff;
    color: #9333ea;
  }

  &.orange {
    background: #fed7aa;
    color: #ea580c;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const CityState = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;

export const View = styled(Link)`
  ${SC.flexCenter};
  gap: 5px;
  width: 100%;
  background: ${C.colors.red};
  color: ${C.colors.white};
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
  margin-top: auto;

  &:hover {
    background: ${C.colors.darkred};
  }
`;

export const NotFound = styled.div`
  ${SC.flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-column: 1 / -1;
`;

export const NFImage = styled.img`
  width: 500px;
  height: 500px;
  object-cit: cover;
`;

export const NFText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0;
  margin-bottom: 5px;
  padding: 5px 10px;
  color: ${C.colors.white};
  border: none;
  border-radius: 20px;
  pointer-events: none;
  font-size: 12px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  transition: background 0.3s ease;

  ${({ upcoming, tomorrow, today }) => css`
    ${upcoming &&
    `
      background: linear-gradient(135deg, #4caf50, #2e7d32);
    `}

    ${tomorrow &&
    `
      background: linear-gradient(135deg, #ffb300, #f57c00); 
    `}

    ${today &&
    `
      background: linear-gradient(135deg, #E63946, #B71C1C);
    `}
  `}
`;
