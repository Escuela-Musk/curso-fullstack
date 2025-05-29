import React from "react";

export class Componente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Componente montado");
  }

  componentDidUpdate() {
    console.log("Componente actualizado");
  }

  componentWillUnmount() {
    console.log("Componente se va a desmontar");
  }

  incrementar() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <p>Componente cuenta {this.state.count}</p>
        <button onClick={this.incrementar}>+1</button>
      </>
    );
  }
}
