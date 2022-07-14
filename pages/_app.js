import { ThemeProvider } from "tailwind-darkmode-toggle";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

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
