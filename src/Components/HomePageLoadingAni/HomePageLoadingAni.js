import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton from "@mui/material/Skeleton";

export default function HomePageLoadingAni() {
  return (
    <div className="">
      <div class="d-flex justify-content-between">
        <div
          className="p-2 m-3 mt-4 "
          style={{
            borderRadius: "5px",
          }}
        >
          <span
            className="d-flex justify-content-center"
            style={{
              fontSize: "16",
              fontFamily: "Poppins",
              fontWeight: "600",
              margin: "",
            }}
          >
            Category : <strong> Loading...</strong>
          </span>
        </div>
        <div
          className="p-2 m-3 mt-4 "
          style={{
            width: "100px",
            boxShadow: "rgb(213 205 149)  0 3px 7px",
            borderRadius: "5px",
            backgroundColor: "#FFF7BF",
          }}
        >
          <span
            className="d-flex justify-content-center"
            style={{
              fontSize: "16",
              fontFamily: "Poppins",
              fontWeight: "600",
              margin: "",
            }}
          >
            See More
          </span>
        </div>
      </div>

      {/* <div className="" style={{ backgroundColor: "#fff7bf" }}>
<div className="d-flex justify-content-around">
<div className="p-1">
  <img
    src={
      "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg"
    }
    style={{
      width: "300px",
      objectFit: "cover",
    }}
    className="img-fluid "
    alt="..."
  ></img>
</div>

<div className="p-1">
  <img
    src={
      "https://i.ibb.co/DYS2fpS/pexels-leah-kelley-691046-Cropped.jpg"
    }
    style={{ width: "300px", objectFit: "cover" }}
    className="img-fluid "
    alt="..."
  ></img>
</div>

<div className="p-1">
  <img
    src="https://i.ibb.co/DYS2fpS/pexels-leah-kelley-691046-Cropped.jpg"
    style={{ width: "300px" }}
    className="img-fluid "
    alt="..."
  ></img>
</div>
</div>
</div> */}

      <div
        className="p-2 productHomepage"
        style={{
          width: "100%",
          overflow: "scroll",
          display: "flex",
        }}
      >
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFF7BF ",
            borderRadius: "10px",
            width: "166px",
            margin: "0px 7px",
            borderRight: "10px",
            height: "333px",
          }}
        >
          <div>
            <Skeleton
              sx={{
                bgcolor: "grey.900",
                borderRadius: "10px 10px 0px 0px ",
              }}
              variant="rectangular"
              style={{
                height: "144px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />{" "}
            <Skeleton
              className="m-2"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                width: "28px",
                height: "34px",
              }}
            />
          </div>
          <div>
            <Skeleton
              className=""
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
            <Skeleton
              className="mt-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
              }}
            />
          </div>
          <div class="d-flex justify-content-start">
            <Skeleton
              className="mt-4"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "18px",
                width: "20px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "22px",
                width: "20px",
              }}
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
            <Skeleton
              className="mt-3 pt-4 m-1"
              sx={{ bgcolor: "grey.900", borderRadius: "5px" }}
              variant="rectangular"
              style={{
                height: "25px",
                width: "25px",
              }}
            />
          </div>
        </div>
        <div class="d-flex align-items-center p-5">
          <div
            style={{
              backgroundColor: "#fec400",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
            }}
          >
            <div class="d-flex align-items-center p-4">
              <div>
                <strong>See More</strong>
              </div>

              <div className="p-2">
                <FontAwesomeIcon icon={faAnglesRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
