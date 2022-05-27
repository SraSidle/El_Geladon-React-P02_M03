import "../PaletaListaItem/PaletaListaItem";

function PaletaListaItem({paleta, quantidadeSelecionada, index, onRemove, onAdd}) {

    const badgeCounter = (canRender, Index) => {
        Boolean(canRender) && (
          <span className="PaletaListaItem__badge"> {quantidadeSelecionada}</span>
);
      };
      
      const removeButton = (canRender, Index) => {
        Boolean(canRender) && (
          <button className="Acoes__remover" onClick={() => onRemove[index]}>
            Remover
          </button>
        );
      };
      
    return(
        <div className="PaletaListaItem">
        {/* {badgeCounter(paletaSelecionada[index], index)} 
          Essa linha se comporta de maneira semelhante ao abaixo, produzindo erro
        */}
        {/*  <span className="PaletaListaIitem__badge">{paletaSelecionada[index]}</span>
            Essa linha dá erro, toda vez, não redenriza as paletas na tela, afirma sobre propriedades "undefined" e nulas
           */}
        <div>
          <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
          <div className="PaletaListaItem__preco">
            R$ {paleta.preco.toFixed(2)}
          </div>
          <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
          <div className="PaletaListaItem__acoes Acoes">
            <button
              className={`Acoes__adicionar ${
                !quantidadeSelecionada && "Acoes__adicionar-_preencher"
              }`}
              onClick={() => onAdd[index]}
            >
              {removeButton(quantidadeSelecionada)}
              {/*{removeButton(paletaSelecionada[index], index)} // erro dnv*/}
              {/* O problema está no index, toda vez que eu retiro ele, redenriza novamente "paletaSelecionada[index]" linha 44*/}
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
    )
}

export default PaletaListaItem;


