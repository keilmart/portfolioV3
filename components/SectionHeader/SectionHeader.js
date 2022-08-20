const SectionHeader = ({ icon, title }) => {
  return (
    <header className="flex items-center mb-2">
      <div className="mr-4">{icon}</div>
      <h2 className="text-3xl antialiased font-bold mr-7 text-primary dark:text-slate-200">
        {title}
      </h2>
      <hr className="flex-grow border-t-0 border-b-2 border-dotted dark:border-gray-400" />
    </header>
  );
};

export default SectionHeader;
