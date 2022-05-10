import Link from "next/link";

const HomepageSocialList = () => {
  return (
    <div>
      <section className="relative px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 lg:text-sm dark:text-white dark:bg-darkModeDetail">
        <pre className="m-3 font-montserrat">
          1&nbsp;&nbsp;class <b>Person</b> {"{"}
        </pre>
        <pre className="m-3 font-montserrat">
          2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {"{"}
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.job = [&quot;
          <b className="uppercase">front end dev</b>&quot;];
        </pre>
        <pre className="m-3 font-montserrat">
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.location = [&quot;
          <b>Toronto, Canada</b>&quot;]
        </pre>
        <pre className="m-3 font-montserrat">
          6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"}"}
        </pre>
        <pre className="m-3 font-montserrat">7&nbsp;&nbsp;{"}"}</pre>
        <div className="absolute z-30 p-3 rounded-lg shadow-art border bg-white dark:bg-darkModeDetail dark:border-0 bottom-[-13%] left-[-20%]">
          <a className="w-auto btn-primary primary-grad">**Change this</a>
        </div>
      </section>
    </div>
  );
};

export default HomepageSocialList;
