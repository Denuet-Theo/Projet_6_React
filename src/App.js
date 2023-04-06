import {Routes, Route} from "react-router-dom"
import Accueil from "./Pages/Accueil"
import Apropos from "./Pages/Apropos";
import Error from "./Pages/Error";
import Fichelogement from "./Pages/Fichelogement";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

function App() {
  return (
  <div className="App">
    <Navbar />
    <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/a-propos" element={<Apropos />} />
    <Route path="/fiche-logement/:id" element={<Fichelogement />} />
    <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;