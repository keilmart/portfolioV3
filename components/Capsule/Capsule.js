export default function Capsule({ text, className, icon }) {
  return (
    <div
      className={`border bg-white flex items-center border-solid border-primary rounded-full py-2 px-3 sm:px-4 transition duration-300 ease-in-out hover:cursor-default ${className}`}
    >
      {icon && <div className="mr-2">{icon}</div>}
      <span className="antialiased text-md text-secondary">{text}</span>
    </div>
  );
}
