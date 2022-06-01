import { ThemeProvider } from "tailwind-darkmode-toggle";
import "../styles/globals.css";

// 1. Clean up getStaticProp / GetStaticPath //

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
