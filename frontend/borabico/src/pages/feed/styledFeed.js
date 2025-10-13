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
  height: 100%;
  padding: 2% 4%;
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  margin-top: 32px;
`

export const JobCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   border: 2px solid ${props => props.urgency ? '#ff4444' : 'transparent'};
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`

export const UrgencyBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ff4444;
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const JobHeader = styled.div`
  margin-bottom: 16px;
`

export const JobTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`

export const JobCategory = styled.span`
  display: inline-block;
  background: rgba(255, 68, 68, 0.2);
  color: ${C.colors.red};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`

export const JobDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 14px;

  svg {
    color: ${C.colors.red};
    flex-shrink: 0;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const ApplyButton = styled.button`
  width: 100%;
  background: ${C.colors.red};
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${C.colors.darkred};
  }
`