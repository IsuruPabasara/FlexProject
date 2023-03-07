import React from "react";
import { Box } from "@mui/material";

const FlexComponentOne = () => {
  return (
    <div>
      <Box
        sx={{
          border: "5px solid",
          display: "flex",
        }}
      >
        <Box
          sx={{
            border: "5px solid",
            borderColor: "yellow",
            padding: 1,
          }}
        >
          <p>Inner box 1</p>
        </Box>
        <Box
          sx={{
            border: "5px solid",
            borderColor: "orange",
            padding: 1,
          }}
        >
          <p>Inner box 2</p>
        </Box>
      </Box>
      <br />
      <Box
        sx={{
          border: "5px solid",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            border: "5px solid",
            borderColor: "red",
            padding: 1,
          }}
        >
          <p>Inner box 3</p>
        </Box>
        <Box
          sx={{
            border: "5px solid",
            borderColor: "maroon",
            padding: 1,
          }}
        >
          <p>Inner box 4</p>
        </Box>
      </Box>
    </div>
  );
};
export default FlexComponentOne;
