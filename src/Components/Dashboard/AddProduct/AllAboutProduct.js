import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useState } from "react";
import AddProductReDesign from "./AddProductReDesign";
import ImgCarousel from "./ImgCarousel";

// product info create context
export const AlllllProductInfoContext = createContext();

export default function AllAboutProduct() {
  const [AlOverProductInfoContext, setAlOverProductInfoContext] = useState({});

  const [AllInfo, setAllInfo] = useState([]);

  const [productNameLength, setProductNameLength] = useState(0);

  const [FinalProductName, setFinalProductName] = useState();

  const [FinalProductPrice, setFinalProductPrice] = useState();

  const [FinalProductOffer, setFinalProductOffer] = useState();

  const [FinalProductCategory, setFinalProductCategory] = useState();

  const [FinalProductDescription, setFinalProductDescription] = useState();

  // use state for addtag
  const [tag, setTag] = useState("");

  // use state for addtag
  const [tagArray, setTagArray] = useState([]);

  const [gloError, setGloError] = useState({
    err: false,
    mag: "",
  });

  const submit = () => {
    if (
      FinalProductName === undefined ||
      FinalProductPrice === undefined ||
      FinalProductCategory === undefined ||
      !AllInfo.length === true
    ) {
      FinalProductName === undefined &&
        setGloError({
          err: true,
          msg: "Plaese,fill up the product's name input field",
        });

      FinalProductPrice === undefined &&
        setGloError({
          err: true,
          msg: "Plaese,fill up the product's Price input field",
        });

      FinalProductCategory === undefined &&
        setGloError({
          err: true,
          msg: "Plaese,fill up the product's Category",
        });

      !AllInfo.length === true &&
        setGloError({
          err: true,
          msg: "Plaese,Upload one or more product image",
        });
    } else {
      const productDetails = [
        {
          ProductName: FinalProductName,
          ProductPrice: FinalProductPrice,
          ProductImage: AllInfo,
          ProductOffer:
            FinalProductOffer === undefined ? "null" : FinalProductOffer,
          ProductCategory: FinalProductCategory,
          ProductDescription:
            FinalProductDescription === undefined
              ? "null"
              : FinalProductDescription,
          ProductTags: tagArray,
        },
      ];

      console.log(productDetails);

      fetch(
        "https://glacial-shore-36532.herokuapp.com/queenZoneUserProductUpload",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productDetails }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      window.location.reload(false);
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    console.log("this is clicked 2");
    if (e.keyCode === 13) {
      if (tag != "") {
        console.log(tag);

        setTagArray([...tagArray, tag]);
        setTag("");
      }
    }
  };

  const picSubmit = (props) => {
    const fullColorPic = [
      {
        color: props.background,
        image: AlOverProductInfoContext,
      },
    ];

    setAllInfo([...AllInfo, fullColorPic]);

    console.log("this is pic submit first : ", props);
  };

  console.log("this is AlOverProductInfoContext : ", AllInfo);

  const ProductName = (props) => {
    console.log(props.length);
    setFinalProductName(props);
    setProductNameLength(props.length);
  };

  const ProductPrice = (props) => {
    setFinalProductPrice(props);
  };

  const ProductOffer = (props) => {
    setFinalProductOffer(props);
  };

  const ProductCategory = (props) => {
    console.log(props);
    setFinalProductCategory(props);
  };

  const ProductDescription = (props) => {
    setFinalProductDescription(props);
  };

  // add tag
  const addTag = (props) => {
    if (tag != "") {
      console.log(tag);

      setTagArray([...tagArray, tag]);
      setTag("");
    }
  };

  const dltTag = (props) => {
    const filTag = tagArray.filter((ftag) => ftag != props);

    setTagArray(filTag);
  };

  console.log(tagArray);

  const cancel = () => {
    window.location.reload(false);
  };

  return (
    <AlllllProductInfoContext.Provider
      value={[AlOverProductInfoContext, setAlOverProductInfoContext]}
    >
      <div
        className="p-2
      "
      >
        <div>
          <span className="" style={{ fontSize: "24px", fontWeight: "bold" }}>
            Add Product
          </span>
        </div>
        <div
          className="mt-3 p-2"
          style={{ border: "2px solid #fec400", borderRadius: "10px" }}
        >
          <div>
            <div className="w-100">
              <div className="">
                <div class="d-flex justify-content-between">
                  <div class="mb-3">
                    <label for="productName" class="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => ProductName(e.target.value)}
                      id="productName"
                      maxLength={30}
                      placeholder="product's name"
                      style={{ width: "420px" }}
                    />
                    <div class="d-flex flex-row-reverse bd-highlight">
                      <label
                        for="productName"
                        class="form-label"
                        style={{ fontSize: "10px", color: "red" }}
                      >
                        maximum name length {productNameLength}/30
                      </label>
                    </div>
                  </div>
                  <div>
                    <label for="productPrice" class="form-label">
                      Price
                    </label>
                    <div class="input-group mb-3" style={{ height: "30px" }}>
                      <span class="input-group-text">SAR</span>
                      <input
                        type="text"
                        onChange={(e) => ProductPrice(e.target.value)}
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>

                  <div>
                    <label for="productOffer" class="form-label">
                      Offer (optional*)
                    </label>
                    <div class="input-group mb-3" style={{ height: "30px" }}>
                      <span class="input-group-text">SAR</span>
                      <input
                        onChange={(e) => ProductOffer(e.target.value)}
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>

                  <div>
                    <label for="productName" class="form-label">
                      Category
                    </label>
                    <select
                      onChange={(e) => ProductCategory(e.target.value)}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Category</option>
                      <option value="Jewelry">Jewelry</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Watches">Watches</option>

                      <option value="Shoes">Shoes</option>
                      <option value="Bag">Bag</option>
                      <option value="Cloths">Cloths</option>
                    </select>
                  </div>
                  <div></div>
                </div>
                <div>
                  <label for="productName" class="form-label">
                    Description (optional*)
                  </label>
                  <div class="input-group">
                    <textarea
                      onChange={(e) => ProductDescription(e.target.value)}
                      class="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <AddProductReDesign demo={picSubmit}></AddProductReDesign>
          </div>
          <div
            className="mt-3 p-2"
            style={{ border: "2px solid #fec400", borderRadius: "10px" }}
          >
            {" "}
            <div className="row">
              <div className="col">
                <div class="mb-3">
                  <label for="addTags" class="form-label">
                    Add Tags
                  </label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="add tags..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) => setTag(e.target.value)}
                      // onKeyPress={handleKeypress}
                      onKeyUp={handleKeypress}
                      value={tag}
                    />
                    <button
                      type="button"
                      class="btn btn-warning"
                      onClick={() => addTag()}
                    >
                      Add
                    </button>
                  </div>
                  <div id="emailHelp" class="form-text">
                    This tag for searching for a Product
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div
                  className=" p-2"
                  style={{
                    overflow: "scroll",
                    border: "2px solid #fec400",
                    borderRadius: "10px",
                    backgroundColor: "#f9d55a21",
                    height: "150px",
                  }}
                >
                  {tagArray.map((singleTag) => (
                    <div
                      className="p-1 m-1"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        display: "inline-block",
                      }}
                    >
                      <span>{singleTag}</span>
                      <div
                        style={{
                          fontSize: "14px",
                          padding: "0px 5px",
                          display: "inline-block",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          onClick={() => dltTag(singleTag)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col">
                <ImgCarousel
                  AlOverProductInfoContext={AlOverProductInfoContext}
                  AllInfo={AllInfo}
                ></ImgCarousel>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-between mt-3 p-2"
          style={{ border: "2px solid #fec400", borderRadius: "10px" }}
        >
          {" "}
          <button className="btn btn-danger" onClick={() => cancel()}>
            Cancel
          </button>
          <button
            className="btn btn-warning"
            style={{ backgroundColor: "rgb(254, 196, 0)" }}
            onClick={() => submit()}
          >
            Submit
          </button>
        </div>
        <div
          className="d-flex justify-content-center mt-3 p-2"
          style={{
            border: "2px solid #fec400",
            borderRadius: "10px",
            display: `${gloError.err === true ? "block" : "none"}`,
          }}
        >
          <div
            class=" p-2 alert-danger d-flex align-items-center"
            role="alert"
            style={{
              display: `${gloError.err === true ? "block" : "none"}`,
              borderRadius: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
              style={{
                display: `${gloError.err === true ? "block" : "none"}`,
              }}
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>{gloError.msg}</div>
          </div>
        </div>
      </div>
    </AlllllProductInfoContext.Provider>
  );
}
