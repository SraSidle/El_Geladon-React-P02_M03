import React, {useState} from 'react';
import { paletas } from "./mocks/Paletas";
import "./PaletaLista.css";

function PaletaLista() {

  const {paletaSelecionada , setPaletaSelecionada} = useState({});

  const adicionarItem = (paletaIndex) => {
    const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex]) +1}
    console.log("paletaIndex" ,paletaIndex)
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta});
    console.log("paletaSelecionada:" , paletaSelecionada) 

  }
return <div className="PaletaLista">
      {paletas.map((paleta, index) => (
             <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>   
             {/*  <span className="PaletaListaIitem__badge">{paletaSelecionada[index]}</span>
              Essa linha dá erro, toda vez, não redenriza as paletas na tela, afirma sobre propriedades "undefined" e nulas
             */}
                 <div>
                     <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
                     <div className="PaletaListaItem__preco">R$ {paleta.preco.toFixed(2)}</div>
                     <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
                     <div className="PaletaListaItem__acoes Acoes">
                          <button 
                            className="Acoes__adicionar Acoes__adicionar-_preencher"
                            onClick={() => adicionarItem(index)}>
                              Adicionar
                          </button>                 
                     </div>
                 </div>
                 <img
                   className="PaletaListaItem__foto"
                   src={paleta.foto}
                   alt={`Paleta de ${paleta.sabor}`}
                 />
             </div>
))};

         </div>;
}

export default PaletaLista;
