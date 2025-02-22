import Header from "./components/Header";
import Promo from "./components/Promo";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Promo />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
