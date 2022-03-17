import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
  background: ${(props) => {
    return props.theme.light.primary;
  }};
`;
