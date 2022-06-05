import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import "./EditProduct.css";
import SingleProductEdit from "./SingleProductEdit";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function EditProduct() {
  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // product state
  const [porduct, setProduct] = useState([]);

  // Category state
  const [category, setPCategory] = useState([]);

  // fetch all product
  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllProduct")
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
      });
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneCategoryRead")
      .then((response) => response.json())
      .then((json) => {
        setPCategory(json);
      });
  });

  return (
    <div className="p-2">
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>Edit Product</div>
      <div
        className="p-2 mt-3"
        style={{ borderRadius: "10px", border: "2px solid #fec400" }}
      >
        <div
          className="p-2"
          style={{ borderRadius: "10px", border: "2px solid #fec400" }}
        >
          <div class="d-flex justify-content-between d-flex align-items-center">
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Select Category
            </div>
            {/* <div
              class="d-flex justify-content-end "
              style={{ overflow: "scroll" }}
            >
              {category.map((ct) => (
                <div
                  className="p-2 m-1 editProductCate"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  {ct.postCa}
                </div>
              ))}
            </div> */}
            <div>
              <FormControl sx={{ m: 1, width: 600 }}>
                <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Category" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {!category.length === true ? (
                    <div class="d-flex justify-content-center">
                      <button class="btn btn-warning" type="button" disabled>
                        <span
                          class="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                          style={{ paddingRight: "5px" }}
                        ></span>
                        <span style={{ paddingLeft: "5px" }}>Loading...</span>
                      </button>
                    </div>
                  ) : (
                    category.map((name) => (
                      <MenuItem
                        key={name.postCa}
                        value={name.postCa}
                        style={getStyles(name.postCa, personName, theme)}
                      >
                        {name.postCa}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {porduct.map((pd) => (
            <div className="col-4">
              {" "}
              <SingleProductEdit pd={pd}></SingleProductEdit>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
