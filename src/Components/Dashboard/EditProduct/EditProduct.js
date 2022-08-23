import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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

  // edit product info
  const [btnEditProduct, setBtnEditProduct] = useState("");

  //
  const [btnEditOneProduct, setEditOneProduct] = useState("");

  // defold product
  const [defoldEditOneProductImage, setdefoldEditOneProductImage] =
    useState("");

  // defold product
  const [btnEditOneProductProductName, setBtnEditOneProductProductName] =
    useState();
  const [btnEditOneProductProductPrice, setBtnEditOneProductProductPrice] =
    useState();
  const [btnEditOneProductProductOffer, setBtnEditOneProductProductOffer] =
    useState();
  const [btnEditOneProductProductCate, setBtnEditOneProductProductCate] =
    useState();
  const [btnEditOneProductProductDes, setBtnEditOneProductProductDes] =
    useState();
  const [btnEditOneProductProductSize, setBtnEditOneProductProductSize] =
    useState([]);
  const [btnEditOneProductProductTag, setBtnEditOneProductProductTag] =
    useState();

  const [isProductSize, setIsporductSize] = useState(false);

  // edit product button
  const editProductBtn = (props) => {
    //  setBtnEditProductImage(props.ProductImage[0][0].image[0][0]);
    //   setBtnEditProduct(props.ProductImage[0]);
    setEditOneProduct(props);
    console.log(props);
    setBtnEditProduct(props.ProductImage);
    setBtnEditOneProductProductName(props.ProductName);
    setBtnEditOneProductProductPrice(props.ProductPrice);
    setBtnEditOneProductProductOffer(props.ProductOffer);
    setBtnEditOneProductProductCate(props.ProductCategory);
    setBtnEditOneProductProductDes(props.ProductDescription);
    setBtnEditOneProductProductSize(props.isSizeShow ? props.productSize : []);
    setIsporductSize(props.isSizeShow);

    setdefoldEditOneProductImage(props.ProductImage[0][0].image);
  };

  // add product size
  const AddProductProductSize = (props) => {
    console.log(props);
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
  }, []);

  return (
    <div className="p-2">
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>Edit Product</div>
      <div
        className="p-2 mt-3"
        style={{ borderRadius: "10px", border: "2px solid #fec400" }}
      >
        <div
          className="p-2"
          style={{ borderRadius: "5px", border: "1px solid #fec400" }}
        >
          <div>
            <span>Edit Product</span>
          </div>
          <div>
            <div className="row">
              <div className="col-3">
                {/* <Carousel>
                  {btnEditProduct !== "" &&
                    btnEditProduct[0][0].image.map((pd) => (
                      <div>
                        <img src={pd[0]} alt="product" />
                        <p className="legend">Legend 1</p>
                      </div>
                    ))}
                </Carousel> */}

                <Carousel>
                  {defoldEditOneProductImage !== "" &&
                    defoldEditOneProductImage.map((pd) => (
                      <div>
                        <img src={pd[0]} alt="product" />
                      </div>
                    ))}
                </Carousel>

                <div>
                  <div class="d-flex justify-content-center">
                    {btnEditProduct !== "" &&
                      btnEditProduct.map((clr) => (
                        <div
                          onClick={() => {
                            setdefoldEditOneProductImage(clr[0].image);
                          }}
                          style={{
                            borderRadius: "50%",
                            backgroundColor: `${clr[0].color}`,
                            width: "20px",
                            height: "20px",
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-4">
                    <div class="mb-3">
                      <label for="porductname" class="form-label">
                        Name
                      </label>
                      <input
                        onChange={(e) =>
                          setBtnEditOneProductProductName(e.target.value)
                        }
                        value={btnEditOneProductProductName}
                        type="text"
                        class="form-control"
                        id="porductname"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="mb-3">
                      <label for="porductPrice" class="form-label">
                        Price
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setBtnEditOneProductProductPrice(e.target.value)
                        }
                        value={btnEditOneProductProductPrice}
                        class="form-control"
                        id="porductPrice"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div class="mb-3">
                      <label for="porductOffer" class="form-label">
                        Offer (optional*)
                      </label>
                      <input
                        onChange={(e) =>
                          setBtnEditOneProductProductOffer(e.target.value)
                        }
                        value={btnEditOneProductProductOffer}
                        type="text"
                        class="form-control"
                        id="porductOffer"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div class="mb-3">
                      <label for="porductCate" class="form-label">
                        Category
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option
                          value={btnEditOneProduct.ProductCategory}
                          selected
                        >
                          Open this select menu
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Description (optional*)
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      onChange={(e) =>
                        setBtnEditOneProductProductDes(e.target.value)
                      }
                      value={btnEditOneProductProductDes}
                    ></textarea>
                  </div>
                  {isProductSize && (
                    <div className="col-6 pt-3">
                      <div class="input-group ">
                        <span>Size</span>
                      </div>
                    </div>
                  )}
                  <div className={isProductSize ? "col-6 pt-3" : "col-12 pt-3"}>
                    <div class="input-group ">
                      <span>Tag</span>
                    </div>
                  </div>
                  {isProductSize && (
                    <div className="col-6 pt-1">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) =>
                            AddProductProductSize(e.target.value.toUpperCase())
                          }
                          class="form-control"
                          placeholder="size..."
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class=" btn btn-warning"
                          type="button"
                          id="button-addon2"
                        >
                          Button
                        </button>
                      </div>
                    </div>
                  )}
                  <div className={isProductSize ? "col-6 pt-1" : "col-12 pt-1"}>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="tag..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        class=" btn btn-warning"
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                  {isProductSize && (
                    <div className="col-6 p-1">
                      <div
                        style={{
                          overflow: "scroll",
                          border: "2px solid rgb(254, 196, 0)",
                          borderRadius: "10px",
                          backgroundColor: "rgba(249, 213, 90, 0.13)",
                          height: "100px",
                        }}
                      >
                        {btnEditOneProductProductSize.map((sz) => (
                          <div
                            className="p-2 m-2"
                            style={{
                              backgroundColor: "white",
                              borderRadius: "5px",
                              display: "inline-block",
                            }}
                          >
                            <span>{sz}</span>
                            <div
                              // onClick={() => deleteSizeBtn(sz)}
                              style={{
                                fontSize: "14px",
                                padding: "0px 5px",
                                display: "inline-block",
                                color: "red",
                                cursor: "pointer",
                              }}
                            >
                              <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={isProductSize ? "col-6 p-1" : "col-12 p-1"}>
                    <div
                      style={{
                        overflow: "scroll",
                        border: "2px solid rgb(254, 196, 0)",
                        borderRadius: "10px",
                        backgroundColor: "rgba(249, 213, 90, 0.13)",
                        height: "100px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-2"
          style={{ borderRadius: "5px", border: "1px solid #fec400" }}
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
              <SingleProductEdit
                editProductBtn={editProductBtn}
                pd={pd}
              ></SingleProductEdit>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
