import styled from 'styled-components';

import { HeadlineOne } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';
import linkzData from 'data/linkz';

const H1 = styled(HeadlineOne)`
  margin-bottom: ${remHelper[16]};
`;

const Linkz = () => {
  const { data } = linkzData;
  return (
    <>
      <H1>linkz</H1>

      {data.map((item) => {
        return (
          <>
            {item.name}
            {item.url}
          </>
        );
      })}
    </>
  );
};

export default Linkz;
