const Footer = () => {
  const getYear = new Date().getFullYear();

  const ExternalLink = ({ href, title }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center mt-1 text-sm border-b border-gray-700 text-secondary hover:text-primary hover:border-b hover:bg-gray-100"
      >
        <span className="mr-1">{title}</span>
        <span className="mb-1 leading-snug">↗</span>
      </a>
    );
  };

  return (
    <footer>
      <div className="container flex flex-wrap items-baseline justify-between max-w-screen-lg px-4 pt-6 pb-12 mx-auto space-y-3 border-t-2 border-dotted md:space-y-0 md:flex-nowrap lg:px-0">
        <ul className="flex items-center space-x-3 text-sm text-secondary">
          <li>© {getYear}</li>
          <li className="hidden text-gray-400 md:inline-block">&bull;</li>
          <li className="hidden md:inline-block">
            Built with Next.js Firebase and Tailwind
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <ExternalLink
            href="https://www.linkedin.com/in/keil-martin/"
            title="LinkedIn"
          />
          <ExternalLink href="https://twitter.com/keilmart" title="Twitter" />
          <ExternalLink href="https://github.com/keilmart" title="GitHub" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
