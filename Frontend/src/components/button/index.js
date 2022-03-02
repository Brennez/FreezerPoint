import React, { useEffect, useRef } from "react";
import { Container, Erro } from "./styles";
import { useField } from "@unform/core";

const Button = ({ name, ...rest }) => {
  const referenciaInput = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: referenciaInput.current,
      path: "value",
    });
  }, []);

  return (
    <>
       <Container>
        <div>
            <div class="radio">
                <input type="radio" value="Venda" name="type" /> Venda
            </div>
            <div class="radio">
                <input type="radio" value="Troca" name="type" /> Troca
            </div>
            <div class="radio">
                <input type="radio" value="Doacao" name="type" /> Doação
            </div>
        </div>
      </Container>
    </>
  );
};

export default Button;