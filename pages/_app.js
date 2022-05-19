import { ThemeProvider } from "tailwind-darkmode-toggle";

import "../styles/globals.css";

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d?gi=e6553a8c148a //

// Steps //
// 3. Clean up getStaticProp / GetStaticPath //
// 4. Write out descriptions for all projects //
// 5. Write out the about me page //
// 9. Go through and comment all logic code //

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
