const Footer = () => {
  const ExternalLink = ({ href, title }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center mt-1 text-sm"
      >
        <span className="mr-1">{title}</span>
        {/* <span className="mb-1 leading-snug">↗</span> */}
      </a>
    );
  };

  return (
    <footer className="primary-grad dark:bg-darkMode">
      <div className="flex justify-start px-6 pt-2 pb-4 mx-auto md:pt-3 lg:px-0 ">
        <div className="flex items-center space-x-4">
          <ExternalLink href="mailto:keilwmartin@gmail.com" title="Email Me!" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
