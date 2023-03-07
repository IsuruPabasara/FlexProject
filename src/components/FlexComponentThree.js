import React from "react";
import { Box } from "@mui/material";

const FlexComponentThree = () => {
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
            flex: 1,
            padding: 1,
          }}
        >
          <p>Inner box 1</p>
        </Box>
        <Box
          sx={{
            border: "5px solid",
            borderColor: "orange",
            flex: 2,
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
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            border: "5px solid",
            borderColor: "red",
            flex: 1,
            padding: 1,
          }}
        >
          <p>Inner box 3 : flex action not visible</p>
        </Box>
        <Box
          sx={{
            border: "5px solid",
            borderColor: "maroon",
            flex: 2,
            padding: 1,
          }}
        >
          <p>Inner box 4 : flex action not visible</p>
        </Box>
      </Box>
      <Box
        sx={{
          border: "5px solid",
          display: "inline-flex",
          height: 400,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            border: "5px solid",
            borderColor: "purple",
            flex: 1,
            padding: 1,
          }}
        >
          <p>Inner box 5</p>
        </Box>
        <Box
          sx={{
            border: "5px solid",
            borderColor: "navy",
            flex: 2,
            padding: 1,
          }}
        >
          <p>Inner box 6</p>
        </Box>
      </Box>
    </div>
  );
};
export default FlexComponentThree;
