import Head from 'next/head';

const AppHead = () => {
  return (
    <Head>
      <title>young & nauseous</title>
      <link
        rel="icon"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/anatomical-heart_1fac0.png"
      />

      {/* Primary Meta Tags */}
      <meta name="title" content="young and nauseous" />
      <meta
        name="description"
        content="young and nauseous is a creative multimedia project with an emphasis on music, software, art and fashion."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.youngandnauseo.us/" />
      <meta property="og:title" content="young and nauseous" />
      <meta
        property="og:description"
        content="young and nauseous is a creative multimedia project with an emphasis on music, software, art and fashion."
      />
      <meta
        property="og:image"
        content="https://www.youngandnauseo.us/images/meta.jpg"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.youngandnauseo.us/" />
      <meta property="twitter:title" content="young and nauseous" />
      <meta
        property="twitter:description"
        content="young and nauseous is a creative multimedia project with an emphasis on music, software, art and fashion."
      />
      <meta
        property="twitter:image"
        content="https://www.youngandnauseo.us/images/meta.jpg"
      />
    </Head>
  );
};

export default AppHead;
