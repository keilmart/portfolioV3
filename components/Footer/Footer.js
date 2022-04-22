const Footer = () => {
  const ExternalLink = ({ href, title }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center mt-1 text-sm border-b border-gray-700 border-dotted text-secondary hover:text-primary hover:border-b hover:bg-gray-100"
      >
        <span className="mr-1">{title}</span>
        {/* <span className="mb-1 leading-snug">↗</span> */}
      </a>
    );
  };

  return (
    <footer className="bg-white dark:bg-black">
      <div className="container flex justify-end max-w-screen-lg px-6 pt-1 pb-4 mx-auto space-y-3 border-t-2 border-dotted md:pt-4 md:space-y-0 md:flex-nowrap lg:px-0 ">
        <div className="flex items-center space-x-4">
          <ExternalLink href="mailto:keilwmartin@gmail.com" title="Email Me!" />
          {/* <ExternalLink href="https://twitter.com/keilmart" title="Twitter" />
          <ExternalLink href="https://github.com/keilmart" title="GitHub" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
