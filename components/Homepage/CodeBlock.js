const HomepageSocialList = () => {
  return (
    <div className="w-full">
      <section className="px-10 py-8 text-sm text-syncWave">
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
          <b>DEVELOPER</b>&quot;];
        </pre>
        <pre className="m-3 font-montserrat">
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.location = [&quot;
          <b>Toronto, Canada</b>&quot;]
        </pre>
        <pre className="m-3 font-montserrat">
          6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"}"}
        </pre>
        <pre className="m-3 font-montserrat">7&nbsp;&nbsp;{"}"}</pre>
      </section>
      <div className="absolute z-30 p-3 rounded-lg shadow-art bottom-[-20%] left-[-20%]">
        <a className="w-auto btn-primary primary-grad">Download Resume</a>
      </div>
    </div>
  );
};

export default HomepageSocialList;
