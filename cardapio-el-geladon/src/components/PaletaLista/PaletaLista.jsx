import React, { useState } from "react";
import { paletas } from "../mocks/Paletas";
import "./PaletaLista.css";
import PaletaListaItem from "../PaletaListaItem/PaletaListaItem";

function PaletaLista() {
  const { paletaSelecionada, setPaletaSelecionada } = useState({});

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex]) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });

    return;
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex]) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });

    return;
  };

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem  key={`PaletaListaItem-${index}`}/>
      ))}
      ;
    </div>
  );
}

export default PaletaLista;
