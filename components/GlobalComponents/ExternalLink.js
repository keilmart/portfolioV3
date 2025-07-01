const ExternalLink = ({ href, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center mt-1 text-sm border-b border-gray-700 text-secondary hover:text-syncWave hover:border-syncWave hover:bg-gray-100 dark:hover:bg-transparent dark:text-slate-200 dark:border-slate-200 dark:hover:text-syncWave dark:hover:border-syncWave">
      <span className="mr-1">{title}</span>
      <span className="hidden mb-1 leading-snug sm:block">↗</span>
    </a>
  );
};

export default ExternalLink;
