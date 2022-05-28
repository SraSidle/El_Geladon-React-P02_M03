import React, { useState } from "react";
import { paletas } from "../mocks/Paletas";
import "./PaletaLista.css";
import PaletaListaItem from "../PaletaListaItem/PaletaListaItem";

function PaletaLista() {
  const { paletaSelecionada, setPaletaSelecionada } = useState({});

  const adicionarItem = (paletaIndex) => {
    console.log(paletaIndex);
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex]) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
        />
      ))}
      ;
    </div>
  );
}

export default PaletaLista;
