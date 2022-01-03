import React, { Component } from "react";
import { Container } from "./styles";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
        <Container>
        <div onChange={this.onChangeValue}>
            <div class="radio">
                <input type="radio" value="Venda" name="gender" /> Venda
            </div>
            <div class="radio">
                <input type="radio" value="Troca" name="gender" /> Troca
            </div>
            <div class="radio">
                <input type="radio" value="Doacao" name="gender" /> Doação
            </div>
        </div>
      </Container>
    
    );
  }
}

export default Button;