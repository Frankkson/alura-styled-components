import {
  corPrimaria,
  fundoClaro,
  conteudoFundoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoFundoEscuro,
  textoFundoEscuro,
} from "./variaveis";

export const temaClaro = {
  body: fundoClaro,
  filter: "",
  inside: conteudoFundoClaro,
  text: textoFundoClaro,
  primary: corPrimaria,
};

export const temaEscuro = {
  body: fundoEscuro,
  filter: "invert(100%)",
  inside: conteudoFundoEscuro,
  text: textoFundoEscuro,
  primary: corPrimaria,
};
