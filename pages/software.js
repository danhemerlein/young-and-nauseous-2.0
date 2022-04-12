import { P } from 'react-yan';
import styled from 'styled-components';

const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.foreground;
  }};
`;

const Software = () => {
  return (
    <div>
      <Paragraph>software</Paragraph>
    </div>
  );
};

export default Software;
