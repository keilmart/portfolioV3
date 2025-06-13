const Capsule = ({ text, icon, className }) => {
  return (
    <div
      className={`flex items-center px-4 py-2 m-1 transition duration-500 ease-in-out bg-white border border-solid rounded-full border-primary hover:cursor-default dark:bg-darkModeDetail dark:border-tertiary ${className}`}>
      {icon && <div className="mr-2">{icon}</div>}
      <span className="antialiased text-md text-secondary dark:text-slate-200">
        {text}
      </span>
    </div>
  );
};

export default Capsule;
