const Capsule = ({ text, icon }) => {
  return (
    <div className="flex items-center px-4 py-2 m-1 transition duration-300 ease-in-out bg-white border border-solid rounded-full border-primary hover:cursor-default">
      {icon && <div className="mr-2">{icon}</div>}
      <span className="antialiased text-md text-secondary">{text}</span>
    </div>
  );
};

export default Capsule;
