import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { ThemeContext } from "./context";

function useDocumentWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  });
  return width;
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useFormTextField(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleValueChange,
  };
}

function App() {
  const name = useFormTextField("Pedro");
  const lastName = useFormTextField("Picapiedras");
  const theme = useContext(ThemeContext);
  const width = useDocumentWidth();

  useDocumentTitle(name.value + " " + lastName.value);

  return (
    <Box color="text.primary" className={theme}>
      <h4>Nombre</h4>
      <TextField {...name} />
      <h4>Apellido</h4>
      <TextField {...lastName} />
      <h4>Ancho</h4>
      <span>{width}</span>
    </Box>
  );
}

export default App;
