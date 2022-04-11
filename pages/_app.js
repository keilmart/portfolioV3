import { ThemeProvider } from "tailwind-darkmode-toggle";

import "../styles/globals.css";

// Remove max-w-[220px], className="mx-auto w-96 md:w-auto", <div className="inset-y-0 -mt-36 lg:-mt-40 lg:-mr-20"> from Hero.js"

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
