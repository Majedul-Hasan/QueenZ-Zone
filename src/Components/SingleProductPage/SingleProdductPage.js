import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";

export default function SingleProdductPage() {
  let { Category, PNAME, PID } = useParams();

  console.log(Category, PNAME, PID);

  // useState for product
  const [product, setProduct] = useState([]);

  // this is first image when page was load
  const [fristImage, setFristImage] = useState([]);

  // useEffect for fetch data
  useEffect(() => {
    // Update the document title using the browser API
    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneSingleProduct/${PID}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
        setFristImage(json[0].ProductImage[0][0].image);
      });
  }, []);

  setTimeout(console.log(fristImage), 5000);

  return (
    <div>
      <div>
        <div>
          <div class="w-100">
            <Carousel>
              {!fristImage.length === false ? (
                fristImage.map((img) => (
                  <div>
                    <img src={img[0]} />
                  </div>
                ))
              ) : (
                <h4>hello</h4>
              )}
            </Carousel>
          </div>

          <div
            class="d-flex justify-content-start"
            style={{ marginTop: "-30px" }}
          >
            <div>
              <h5
                style={{
                  marginTop: "-20px",
                  margin: "0px",
                  padding: "0px",
                  marginLeft: "10px",
                }}
              >
                Color :{" "}
              </h5>
            </div>
            <div>
              <div class="d-flex justify-content-center">
                {!product.length === false ? (
                  product[0].ProductImage.map((img) => (
                    <div>
                      <Button
                        variant="text"
                        className=""
                        onClick={() => setFristImage(img[0].image)}
                      >
                        <img
                          style={{ width: "50px", borderRadius: "5px" }}
                          src={img[0].image[0]}
                          class="img-fluid "
                          alt="..."
                        ></img>{" "}
                      </Button>
                    </div>
                  ))
                ) : (
                  <h4>hello</h4>
                )}
              </div>
              <div class="d-flex justify-content-center">
                {!product.length === false ? (
                  product[0].ProductImage.map((img) => (
                    <Button
                      variant="text"
                      className=""
                      style={{ margin: "0px", padding: "0px" }}
                    >
                      <div
                        style={{
                          backgroundColor: img[0].color,
                          width: "50px",
                          height: "30px",
                        }}
                      ></div>
                    </Button>
                  ))
                ) : (
                  <h4>hello</h4>
                )}
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-between mt-3 m-2"
            style={{ alignItems: "center" }}
          >
            <span>Select Size : </span>
            <select
              // value={dt[0].pSize != undefined && dt[0].pSize}
              // onChange={(e) => ProductSize(e.target.value)}
              class="form-select w-80"
              aria-label="Default select example"
              style={{
                backgroundColor: "#fff",
                color: "#362121",
                boxShadow: "0 5px 45px -10px rgb(0 0 0 / 25%)",
                border: "none",
                boxSizing: "border-box",
                width: "280px",
              }}
            >
              <option selected>Select Size</option>
              <option value="XS">XS</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
