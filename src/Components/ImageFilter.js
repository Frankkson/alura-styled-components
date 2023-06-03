import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { IconTheme } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <IconTheme src={alimentacao} alt="alimentação" />,
    Saude: <IconTheme src={saude} alt="Saúde" />,
    Transporte: <IconTheme src={transporte} alt="Transporte" />,
    Utilidades: <IconTheme src={utilidades} alt="Utilidades" />,
    default: <IconTheme src={outros} alt="Outros" />,
  };
  return Images[type] || Images.default;
};
