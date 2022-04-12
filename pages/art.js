import { P } from 'react-yan';
import styled from 'styled-components';

const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.foreground;
  }};
`;

const Art = () => {
  return (
    <div>
      <Paragraph>art</Paragraph>
    </div>
  );
};

export default Art;
