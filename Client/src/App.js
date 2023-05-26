import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import SocialButtons from "./components/Social/SocialButtons";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Forms/Forms";
import Clock from "./components/Clock/Clock";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login";
    const { data } = await axios.get(
      `${URL}?email=${email}&password=${password}`
    );
    const { access } = data;
    setAccess(access);
    access && navigate("/home");
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [access, navigate]);

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== +id
    );
    setCharacters(charactersFilter);
  };

  const onSearch = (id) => {
    if (id < 826) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            if (!characters.some((character) => character.id === data.id)) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              alert("¡Este personaje ya se ha agregado!");
            }
          } else {
            alert("¡No hay personajes con este ID!");
          }
        }
      );
    } else {
      alert("¡Hay hasta 825 personajes!");
    }
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Clock>{time}</Clock>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <NavBar onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
      <div className="social">
        <SocialButtons />
      </div>
      <div className="title">
        <img src="/imageTitle/title.svg" alt={""} />
      </div>
    </div>
  );
};

export default App;
