import React from "react";

function CanOptionsCard({ canType, quantity  }) {
  return (
    <div key={ canType }>
      <p>Tamanho da lata: { canType }</p>
      <p>Quantidade necessária: { quantity } latas</p>
    </div>
  )
}

export default CanOptionsCard;
