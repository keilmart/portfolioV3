import PlaceholderBlur from "../PlaceholderBlur/PlaceholderBlur";

const HomepageComingList = ({ projects }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
      {projects.map((project) => (
        <li
          className="pb-6 antialiased border-b-2 border-dotted dark:border-gray-400"
          key={project.slug}>
          <div
            className="relative inline-block w-full h-56 pt-8 pl-8 mb-4 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg dark:bg-darkModeDetail hover:shadow-lg hover:scale-105"
            aria-label="Project Card">
            <div className="absolute w-full h-full overflow-hidden rounded-tl-3xl top-10 blur-sm">
              <PlaceholderBlur
                imageSrc={project.image ? project.image : project.imageZoom}
                imageWidth={768}
                imageHeight={384}
                imageAlt={project.name}
              />
            </div>
            <div className="absolute inset-0 opacity-50 bg-[#4757a3]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-xl font-semibold text-white">Launching soon</h4>
            </div>
          </div>

          <h3 className="mb-1 text-xl font-semibold text-primary dark:text-slate-200">
            {project.name}
          </h3>
          <span className="block mb-1 text-md text-tertiary">{project.stack}</span>
          <div className="w-auto mt-2 btn-primary primary-grad">Coming...</div>
        </li>
      ))}
    </ul>
  );
};

export default HomepageComingList;
