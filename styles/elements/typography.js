import { H1, H2, P, anchorColor } from 'react-yan';
import { above, remHelper } from 'styles/mixins';
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

export const HeadlineTwo = styled(H2)`
  color: ${({ theme }) => {
    return theme.foreground;
  }};
`;

export const StyledLink = styled.a`
  ${({ theme }) => {
    return anchorColor({ color: theme.foreground });
  }};
`;

export const PageHeadline = styled(HeadlineOne)`
  margin-bottom: ${remHelper[16]};
  text-align: center;

  ${above.tablet`
    text-align: left;
  `}
`;
