import { ThemeProvider } from "tailwind-darkmode-toggle";

import "../styles/globals.css";

// Remove max-w-[220px], className="mx-auto w-96 md:w-auto", <div className="inset-y-0 -mt-36 lg:-mt-40 lg:-mr-20"> from Hero.js"
// Remove all unused npm packages //
// Intergrate SEO //
// add in Id's for navigation to sections //

// Steps //
// 1. Bring in new fonts //
// 2. Figure out design for dark and light mode //
// 3. Clean up getStaticProp / GetStaticPath //
// 4. Write out descriptions for all projects //
// 5. Write out the about me page //
// 6. Figure out the best spot to add a contact me button //
// 7. Remove unused assets //
// 8. Figure out new hero setup? //
// 9. Go through and comment all logic code //

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
