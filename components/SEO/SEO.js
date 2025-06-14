import Head from "next/head";

const SEO = ({
  title = "Keil Martin",
  og = "og-home.png",
  description = "Hi I'm Keil Martin, a Software and UX/UI Developer from Toronto, Canada. My stack includes but is not limited to React, React Native, Next.js, JavaScript, TypeScript, Node.js, TailwindCSS and ScSS / SaSS.",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Keil Martin Portfolio" />
      <meta property="og:image" content={`https://keilmart.com/meta/${og}`} />
      <meta property="og:image:width" content="170" />
      <meta property="og:image:height" content="320" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
export default SEO;
