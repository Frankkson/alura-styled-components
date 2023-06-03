import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icon } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <Icon src={alimentacao} alt="alimentação" />,
    Saude: <Icon src={saude} alt="Saúde" />,
    Transporte: <Icon src={transporte} alt="Transporte" />,
    Utilidades: <Icon src={utilidades} alt="Utilidades" />,
    default: <Icon src={outros} alt="Outros" />,
  };
  return Images[type] || Images.default;
};
