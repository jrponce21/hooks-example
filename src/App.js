import React from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { ThemeContext } from "./context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pedro",
      lastName: "Picapiedras",
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleWindowWidth = this.handleWindowWidth.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleLastnameChange(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  handleWindowWidth() {
    this.setState({
      width: window.innerWidth,
    });
  }

  componentDidMount() {
    window.document.title = this.state.name + " " + this.state.lastName;
    window.addEventListener("resize", this.handleWindowWidth);
  }

  componentDidUpdate() {
    window.document.title = this.state.name + " " + this.state.lastName;
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleWindowWidth);
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Box color="text.primary" className={theme}>
            <h4>Nombre</h4>
            <TextField
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <h4>Apellido</h4>
            <TextField
              value={this.state.lastName}
              onChange={this.handleLastnameChange}
            />
            <h4>Ancho</h4>
            <span>{this.state.width}</span>
          </Box>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default App;
