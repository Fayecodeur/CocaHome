import FrenchFlag from "../assets/france.svg";
import EnglishFlag from "../assets/united-kingdom.svg";
import SpainFlag from "../assets/spain.svg";
import { Context } from "../context/langContex.jsx";
import "./toggleLangs.css";
import { useContext } from "react";
export default function ToggleLang() {
  const { toggleLang } = useContext(Context);
  return (
    <div className="box-langs">
      <img src={FrenchFlag} onClick={() => toggleLang("FR")} />
      <img src={EnglishFlag} onClick={() => toggleLang("EN")} />
      <img src={SpainFlag} onClick={() => toggleLang("ES")} />
    </div>
  );
}
