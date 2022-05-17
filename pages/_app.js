import { ThemeProvider } from "tailwind-darkmode-toggle";

import "../styles/globals.css";

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d?gi=e6553a8c148a //
// Remove max-w-[220px], className="mx-auto w-96 md:w-auto", <div className="inset-y-0 -mt-36 lg:-mt-40 lg:-mr-20"> from Hero.js"
// Remove all unused npm packages //
// Intergrate SEO //
// add in Id's for navigation to sections //

// Steps //
// 1. Bring in new fonts //
// 2. Add in new colors - check the white are all good //
// 2. Figure out design for dark and light mode //
// 3. Clean up getStaticProp / GetStaticPath //
// 4. Write out descriptions for all projects //
// 5. Write out the about me page //
// 6. Figure out the best spot to add a contact me button //
// 7. Remove unused assets //
// 8. Figure out new hero setup? //
// 9. Go through and comment all logic code //
// 10. Add loaders to the images //
// 11. Add Styling to scrollbar - rounded to match theme //
// 12. Update github profile to match website //
// 13. antialiased everything //
// 14. Add in the footer details //
// 15. Add in the about me page content //
// 16. xmlns="http://www.w3.org/2000/svg" - on every svg in file //
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
