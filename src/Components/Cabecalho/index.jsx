import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";

const StyledBtn = styled.a`
  border: 2px solid white;
  border-radius: 3px;
  font-weight: 600;
  margin: 0 10px;
  padding: 5px 20px;
  text-align: center;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};

  color: ${(props) => (props.primary ? corPrimaria : "white")};
`;

const StyledHeader = styled.nav`
  align-items: center;
  background-color: ${corPrimaria};
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 0 15vw;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <StyledBtn primary href="https://google.com">
          Ajuda
        </StyledBtn>
        <StyledBtn href="https://google.com">Sair</StyledBtn>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
