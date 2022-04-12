import { FlexContainer } from 'react-yan';
import { Paragraph } from 'styles/elements/typography';

const Footer = () => {
  return (
    <FlexContainer justify="flex-end">
      <Paragraph>© Dan Hemerlein {new Date().getFullYear()}</Paragraph>
    </FlexContainer>
  );
};

export default Footer;
