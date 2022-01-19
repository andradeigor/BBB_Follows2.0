import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 325px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;
export const Image = styled.img`
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 100%;
`;
export const CardBottomContainer = styled.div`
  width: 100%;
  height: 125px;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;
export const FollowsNumber = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
