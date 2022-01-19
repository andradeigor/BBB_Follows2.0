import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.h1`
  font-size: 72px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
