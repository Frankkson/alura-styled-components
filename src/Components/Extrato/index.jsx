import React from "react";
import { Box, Button } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Itens";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items
            key={id}
            type={type}
            from={from}
            value={value}
            date={date}
          ></Items>
        );
      })}
      <Button>Ver Mais</Button>
    </Box>
  );
};

export default Extrato;
