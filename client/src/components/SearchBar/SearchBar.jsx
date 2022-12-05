import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getByName } from "../../actions/actions";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(name));
    setCurrentPage(1);
    setName("");
  }

  return (
    <div className="busca">
      <input
        className="buscador"
        id="in"
        type="text"
        placeholder="Nombre de videojuego..."
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="buscador"
        id="bt"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        🔍︎
      </button>
    </div>
  );
}
