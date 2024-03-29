const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-primary dark:bg-darkModeDetail dark:border-t-0">
      <div className="container flex justify-between w-full max-w-screen-lg px-4 py-5 mx-auto text-sm font-medium text-secondary text-primary dark:text-slate-200">
        <div className="flex items-center">
          <span>{currentYear} &nbsp;</span>
          <span className="hidden sm:block">
            &bull;&nbsp;&nbsp;Built with Next.js, Tailwind and Firestore
          </span>
        </div>
        <div className="flex items-center">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:keilwmartin@gmail.com"
              className="py-1 mb-1 leading-snug hover:text-syncWave hover:border-b hover:border-syncWave hover:bg-gray-100 dark:hover:bg-transparent"
            >
              <span>
                Email Me! <span className="hidden sm:inline-block">↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
