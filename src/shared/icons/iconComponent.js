import React from 'react';
import * as feather from 'feather-icons'; // Importando todos os ícones Feather Icons
import './IconComponent.scss'; // Importando um arquivo de estilos para os ícones (opcional)

const IconComponent = (props) => {
    
    const renderedIcon = feather.icons[`${props.icon}`].toSvg(); // Renderizando o ícone

  return (
    <div className="icon-container">
      <div dangerouslySetInnerHTML={{ __html: renderedIcon }} />
    </div>
  );
}

export default IconComponent;