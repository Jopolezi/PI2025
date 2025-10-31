// styledCardFeed.js
import styled from "styled-components";
import * as C from "@/styles/colors";
import { Link } from "react-router-dom";

export const Card = styled.div`
display: flex;
flex-direction: column;
height: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  font-family: "Poppins", sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const Urgency = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${C.colors.red};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

export const Category = styled.span`
  display: inline-block;
  align-self: flex-start;
  background: #fee2e2;
  color: #dc2626;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`;

export const Description = styled.p`
  max-height: 72px;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  display: block;
  width: 100%;
  text-align: center;
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