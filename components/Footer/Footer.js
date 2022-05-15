const Footer = () => {
  // const ExternalLink = ({ href, title }) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noreferrer"
  //       className="flex items-center mt-1 text-sm"
  //     >
  //       <span className="mr-1">{title}</span>
  //       {/* <span className="mb-1 leading-snug">↗</span> */}
  //     </a>
  //   );
  // };

  return (
    <footer>
      <div className="container flex justify-end px-6 mx-auto space-y-3 bg-white border-t py-7 border-primary dark:bg-darkMode md:space-y-0 md:flex-nowrap lg:px-0">
        <div className="flex items-center space-x-4">
          {/* <ExternalLink href="mailto:keilwmartin@gmail.com" title="Email Me!" /> */}
          {/* <ExternalLink href="https://twitter.com/keilmart" title="Twitter" />
          <ExternalLink href="https://github.com/keilmart" title="GitHub" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
