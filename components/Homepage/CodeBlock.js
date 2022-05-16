const HomepageSkillsList = () => {
  return (
    <div>
      <section className="relative px-6 py-4 antialiased transition duration-500 ease-in-out bg-white rounded-lg text-2xs text-syncWave lg:px-10 lg:py-8 lg:text-sm dark:text-white dark:bg-darkModeDetail">
        <pre className="m-2 sm:m-3 font-montserrat">
          1&nbsp;&nbsp;class <b>Person</b> {"{"}
        </pre>
        <pre className="m-2 sm:m-3 font-montserrat">
          2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {"{"}
        </pre>
        <pre className="m-2 sm:m-3 font-montserrat">
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.passion = [&quot;
          <b className="uppercase">traveling</b>&quot;];
        </pre>
        <pre className="m-2 sm:m-3 font-montserrat">
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.location = &quot;
          <b>Toronto, Canada</b>&quot;
        </pre>
        <pre className="m-2 sm:m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.myDog = [&quot;
          <b>Charles</b>&quot;];
        </pre>
        <pre className="m-2 sm:m-3 font-montserrat">
          6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"}"}
        </pre>
        <pre className="m-2 sm:m-3 font-montserrat">7&nbsp;&nbsp;{"}"}</pre>
        <div className="absolute z-20 p-3 text-white transition duration-500 ease-in-out bg-white border rounded-lg shadow-art dark:bg-darkModeDetail dark:border-none -bottom-9 sm:-left-20 left-1/4 ">
          {/* bottom-[13%] sm:left-[-20%] left-[25%] */}
          <div className="px-4 py-2 antialiased rounded-md primary-grad">
            A little about me
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageSkillsList;
