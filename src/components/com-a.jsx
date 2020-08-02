import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const CompA = () => {
  const [selectedOption, setSelectedItem] = useState();
  const [name, setName] = useState("");
  const [totalMoves, setTotalMoves] = useState();
  const [moveAtTop, setMoveAtTop] = useState("");

  const handleSelectClick = (event) => {
    const val = event.target.value;
    setSelectedItem(val);
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedOption}`
      );
      setName(res.data.name);
      setTotalMoves(res.data.moves.length);
      setMoveAtTop(res.data.moves[0].move.name);
      console.log(res);
    }

    getData();
  });

  return (
    <>
      <select value={selectedOption} onChange={handleSelectClick}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <h1>You have selected {selectedOption} option</h1>

      <br />
      <h1>
        Name <span style={{ color: "red" }}>{name}</span>
      </h1>
      <br />
      <h1>
        Total Moves <span style={{ color: "red" }}>{totalMoves}</span>
      </h1>
      <br />
      <h1>
        Move at Top <span style={{ color: "red" }}>{moveAtTop}</span>
      </h1>
    </>
  );
};

export default CompA;
