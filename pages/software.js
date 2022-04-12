import {
  Paragraph,
  HeadlineOne,
  HeadlineTwo,
} from 'styles/elements/typography';
import Footer from 'components/Footer/Footer';
import Heart from 'components/assets/svg/Heart';

const Software = () => {
  return (
    <div>
      <HeadlineOne>software</HeadlineOne>
      <Heart width="140" height="140" fill="#C23B22" />

      <Paragraph>
        This project counts moving software and data closer to their end points
        of use among it's goals.
      </Paragraph>
      <Paragraph>Below are some examples of how this is achieved.</Paragraph>

      <ul>
        <li>
          <HeadlineTwo>this wesite</HeadlineTwo>
          <Paragraph>
            This site is coded and maintained by hand with love. It leverages
            Next.js, Styled Components, Material UI and react-yan.
          </Paragraph>
        </li>
        <li>
          <HeadlineTwo>react-yan</HeadlineTwo>

          <Paragraph>
            react-yan is a React component library developed for reusibility
            across my projects. It is free and open source.
          </Paragraph>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Software;
