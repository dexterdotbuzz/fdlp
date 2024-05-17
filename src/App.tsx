import Faqs from "./Components/Faqs/Faqs";
import Footer from "./Components/Footer/Footer";
import { TypewriterEffectSmoothDemo } from "./Components/Typewriter/Typewriter";
import { LampDemo } from "./Components/Lampettect/Lampeffect";
import Header from "./Components/Header/Header";


function App() {
  return (
    <>
      <section>
        <Header />

        <LampDemo />

        <div>
          <Faqs />
        </div>
        <div >
          <TypewriterEffectSmoothDemo />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
