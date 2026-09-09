// import { useState } from "react";
// import { featureData } from "./data/features";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  // const [features] = useState(featureData);

  return (
    <>
      <Header />
      <main>
        <Home />
        {/* <About />
        <Pricing /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
