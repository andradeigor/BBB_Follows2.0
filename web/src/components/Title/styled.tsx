import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

export const TitleText = styled.h1`
  font-size: 56px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
