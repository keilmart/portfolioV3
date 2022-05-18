import { ThemeProvider } from "tailwind-darkmode-toggle";

import "../styles/globals.css";

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d?gi=e6553a8c148a //

// Steps //
// 3. Clean up getStaticProp / GetStaticPath //
// 4. Write out descriptions for all projects //
// 5. Write out the about me page //
// 6. Figure out the best spot to add a contact me button //
// 9. Go through and comment all logic code //
// 10. Add loaders to the images //
// 12. Update github profile to match website //
// 14. Add in the footer details //
// 15. Add in the about me page content //
// Intergrate SEO //
// Last. Go through every component and clean up //

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
