import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { ThemeContext } from "./context";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleValueChange,
  };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function App() {
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  const name = useFormInput("Pedro");
  const lastname = useFormInput("Picapiedras");

  useDocumentTitle(name.value + " " + lastname.value);

  return (
    <Box color="text.primary" className={theme}>
      <h4>Nombre</h4>
      <TextField {...name} />
      <h4>Apellido</h4>
      <TextField {...lastname} />
      <h4>Ancho</h4>
      <span>{width}</span>
    </Box>
  );
}

export default App;
