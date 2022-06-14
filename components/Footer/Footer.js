const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-primary">
      <div className="container flex justify-between w-full max-w-screen-lg px-4 py-4 mx-auto text-sm font-medium bg-white text-secondary text-primary dark:bg-darkMode dark:text-white ">
        <div className="flex items-center">
          <span>{currentYear} &nbsp;</span>
          <span className="hidden sm:block">
            &bull;&nbsp;&nbsp;Built with Next.js, Tailwind and Firestore
          </span>
        </div>
        <div className="flex items-center">
          <div>
            <a
              href="mailto:keilwmartin@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="pb-1 hover:text-syncWave hover:border-b hover:border-syncWave">
                Email Me!
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
