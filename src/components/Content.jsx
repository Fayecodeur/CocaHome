import { useContext } from "react";
import { Context } from "../context/langContex.jsx";
import "./content.css";
import data from "../data/data.js";
import cocaImg from "../assets/coca-01.png";
export default function Content() {
  const { lang } = useContext(Context);
  return (
    <div className="main-content">
      <div className="left">
        <h1 className="title">{data[lang].title}</h1>
        <h2 className="subtitle">{data[lang].txt}</h2>
        <p className="text">{data[lang].ctn}</p>
        <button className="btn-content">{data[lang].btn}</button>
      </div>
      <div className="right">
        <img src={cocaImg} />
      </div>
    </div>
  );
}
