import {Routes, Route} from "react-router-dom"
import Accueil from "./Pages/Accueil"
import Apropos from "./Pages/Apropos";
import Error from "./Pages/Error";
import Fichelogement from "./Pages/Fichelogement";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import liste from "./données/liste.json"

function App() {
  return (
  <div className="App">
    <Navbar />

      <Routes>

        <Route path="/" element={<Accueil />} />

        <Route path="/a-propos" element={<Apropos />} />

        {liste.map((contents) => (
          <Route key={`${contents.id}`} path={`/fiche-logement/${contents.id}`} element={<Fichelogement />} />
        ))}

        <Route path="*" element={<Error />} />

      </Routes>
      
    <Footer />
  </div>
  );
}

export default App;