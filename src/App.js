import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import { dark } from "./Styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Home from "./Sections/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";
import About from "./Sections/About";
import { AnimatePresence } from "framer-motion";
import Shop from "./Sections/Shop";
import Banner from "./Sections/Banner";
import Footer from "./Sections/Footer";


function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
            <main data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop/>
              <Banner/>
              <Footer/>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;