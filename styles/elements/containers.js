import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 1rem;
  position: relative;

  background: ${({ theme, backgroundOverride }) => {
    if (backgroundOverride) {
      return theme.red;
    }

    return theme.background;
  }};
`;
