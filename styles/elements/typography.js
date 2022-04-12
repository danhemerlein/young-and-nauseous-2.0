import { H1, P, anchorColor } from 'react-yan';
import styled from 'styled-components';

export const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.foreground;
  }};
`;

export const HeadlineOne = styled(H1)`
  color: ${({ theme }) => {
    return theme.foreground;
  }};
`;

export const StyledLink = styled.a`
  ${({ theme }) => {
    return anchorColor({ color: theme.foreground });
  }};
`;
