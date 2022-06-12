import React, { useState } from "react";
import styles from "./Compose.module.css";
import { useLocalContext } from "../../context/context";

import { TextField } from "@material-ui/core";

// https://mui.com/material-ui/react-autocomplete/
import { Autocomplete } from "@mui/lab";

const MenuItem = () => {
  const [inputValue, setInputValue] = useState("");
  const { setCategory, category, options } = useLocalContext();
  return (
    <div className={styles.autocomplete}>
      <Autocomplete
        value={category}
        onChange={(event, newValue) => {
          setCategory(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newValue) => {
          setInputValue(newValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Categorize" variant="outlined" />
        )}
      />
    </div>
  );
};

export default MenuItem;
