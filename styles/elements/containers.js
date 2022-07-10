import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 1rem;

  background: ${({ theme, backgroundOverride }) => {
    if (backgroundOverride) {
      return theme.red;
    }

    return theme.background;
  }};
`;
