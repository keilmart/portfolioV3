import Head from "next/head";

const SEO = ({
  title = "Keil Martin",
  og = "og-home.png",
  description = "Keil Martin is a front end developer from Toronto, Canada",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Keil Martin" />
      <meta property="og:image" content={`https://keilmart.com/meta/${og}`} />
      <meta property="og:image:width" content="170" />
      <meta property="og:image:height" content="320" />
      <link rel="icon" type="image/png" sizes="16x16" href="meta/favicon.ico" />
      <link rel="manifest" href="meta/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
export default SEO;
