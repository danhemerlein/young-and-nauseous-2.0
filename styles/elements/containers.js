import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 1rem;

  background: ${({ theme }) => {
    return theme.light.light;
  }};
`;
