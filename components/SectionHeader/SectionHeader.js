const SectionHeader = ({ icon, title, subtitle }) => {
  return (
    <header className="flex items-center mb-2">
      <div className="mr-4">{icon}</div>
      <h2 className="mr-8 text-3xl antialiased font-bold text-primary dark:text-white">
        {title}
      </h2>
      <hr className="flex-grow border-t-0 border-b-2 border-dotted" />
    </header>
  );
};

export default SectionHeader;
