import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { React, useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useGeoLocation from "react-ipgeolocation";
import { useHistory } from "react-router-dom";
import { UserInfoContext } from "../../App";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `${(
        <path
          d="M257.13,125.11c40.21,0,72.52,30.23,72.52,70.43,0,38.59-32.31,70.76-72.52,70.76-40.52,0-72.85-32.17-72.85-70.76,0-40.2,32.33-70.43,72.85-70.43Zm181.54,52.42C438.67,78.79,358,0,257.13,0c-101,0-183.8,78.79-183.8,177.53,0,4.18,0,10.3,2.09,14.15H73.33c0,96.81,183.8,320.32,183.8,320.32S438.67,288.49,438.67,191.68h0V177.53Z"
          fill="#5b5b5f"
          fill-rule="evenodd"
        />
      )}`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default function Order() {
  let history = useHistory();
  // socket io
  // const socket = useRef();
  // socket.current = io(globeSocketIo);

  const location = useGeoLocation();

  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  const [startDate, setStartDate] = useState(new Date());
  const [UserDateAndTime, setUserDateAndTime] = useState(new Date());

  const orderUserName = (props) => {
    console.log("this is order user name : ", props);
  };

  // allow location
  const [allowlocation, setAllowLocation] = useState(false);

  // user ip address
  const [state, setState] = useState("");

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState(data ? data : "");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [productSubTotal, setProductSubTotal] = useState(null);

  useEffect(() => {
    setProductSubTotal({
      SubTotal: JSON.parse(sessionStorage.getItem("ProductSubTotal")),
      selectedProduct: JSON.parse(sessionStorage.getItem("addToShoppingCard")),
    });
  }, []);

  const [userCurrentPosition, setUserCurrentPosition] = useState();

  const [userCurrentsdfasdgPosition, setUsefdgdfgdrCurrentPosition] =
    useState();

  const UserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        setUserCurrentPosition(position);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };

  useEffect(() => {
    if (allowlocation === true) {
      UserLocation();
      getGeoInfo();
    }
  }, [allowlocation]);

  const [error, setError] = useState({
    msg: "",
    error: false,
  });

  const callDeashboardReload = () => {
    // socket.current.emit("new-order", "send order");

    history.push("/UserOrderPage");
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.phoneNumber.length < 9) {
      setError({ msg: "Please input valid Phone Number ", error: true });
    } else if (productSubTotal === null) {
      history.push("/ShoppingCard");
    } else {
      const Finaldata = {
        UserName: data.Name,
        UserEmail: loggingUserInfo.email,
        UserPhoneNumber_1: data.phoneNumber,
        UserPhoneNumber_2: data.phoneNumber2,
        UserAddress: data.address,
        UserHouseNumber: data.HouseNumber,
        UserExpectedDeliveryDate: startDate,
        UserExpectedDeliveryTime: time,
        UserSelectproduct: productSubTotal,
        UserIp: state,

        UserCurrentDateAndTime: UserDateAndTime,
        orderStatus: "Pending",
      };

      // navigator.geolocation.getCurrentPosition(function (position) {
      //   console.log("Latitude is :", position.coords.latitude);
      //   console.log("Longitude is :", position.coords.longitude);
      // });

      // navigator.geolocation.getCurrentPosition(function (position) {
      //   console.log(position);
      // });

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneUserPostOrder",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Finaldata }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          callDeashboardReload();
          sessionStorage.removeItem("addToShoppingCard");
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      console.log(Finaldata);
    }
  };

  return (
    <div class=" mb-5 pb-5 container" style={{}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          class="p-2 m-2 mb-5 pb-5"
          style={{
            borderRadius: "10px",
            border: "2px solid #fec400",
          }}
        >
          <div class="">
            <div style={{ display: "block" }}>
              <h1 className="mt-2">Order</h1>
              <h6 style={{ margin: "0px", padding: "0px", color: "gray" }}>
                from
              </h6>
              <span>
                <b style={{ color: "#fec400" }}>Queenz Zone Online Shop</b>
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {" "}
              <TextField
                className="mt-4"
                style={{ width: "100%" }}
                required
                {...register("Name")}
                id="outlined-required"
                label="Name"
                defaultValue={loggingUserInfo.displayName}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                className="mt-3"
                disabled
                {...register("Email")}
                style={{ width: "100%" }}
                id="outlined-disabled"
                label="Email"
                defaultValue={loggingUserInfo.email}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                className="mt-3"
                style={{ width: "100%" }}
                required
                {...register("phoneNumber")}
                id="outlined-required"
                label="Phone"
                defaultValue={loggingUserInfo.phoneNumber}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                className="mt-3"
                style={{ width: "100%" }}
                id="outlined-required"
                {...register("phoneNumber2", { min: 10, max: 14 })}
                {...register("phoneNumber2")}
                label="Phone 2 (optional)"
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                className="mt-3"
                style={{ width: "100%" }}
                required
                {...register("address")}
                id="outlined-required"
                label="Address"
                defaultValue={loggingUserInfo.address}
              />
            </div>
            <div className="col-md-6">
              <TextField
                className="mt-3"
                style={{ width: "100%" }}
                {...register("HouseNumber")}
                id="outlined-required"
                label="House number (optional)"
              />
            </div>
            <div className="col-md-6">
              {" "}
              <div className="mt-2 ">
                <div className="mb-2">
                  <span>Expected Delivery Date</span>
                </div>

                <div>
                  <DatePicker
                    required
                    {...register("ExpectedDeliveryDate")}
                    className="w-100 p-2 border rounded"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ display: "none" }}>
              <div className="mt-2 ">
                <div className="mt-2 ">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Time
                      </InputLabel>
                      <Select
                        {...register("ExpectedDeliveryTime")}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        label="Time"
                        onChange={handleChange}
                      >
                        <MenuItem value={"12:00 PM"}>12:00 PM</MenuItem>
                        <MenuItem value={"12:30 PM"}>12:30 PM</MenuItem>
                        <MenuItem value={"1:00 PM"}>1:00 PM</MenuItem>
                        <MenuItem value={"1:30 PM"}>1:30 PM</MenuItem>
                        <MenuItem value={"2:00 PM"}>2:00 PM</MenuItem>
                        <MenuItem value={"2:30 PM"}>2:30 PM</MenuItem>
                        <MenuItem value={"3:00 PM"}>3:00 PM</MenuItem>
                        <MenuItem value={"3:30 PM"}>3:30 PM</MenuItem>
                        <MenuItem value={"4:00 PM"}>4:00 PM</MenuItem>
                        <MenuItem value={"4:30 PM"}>4:30 PM</MenuItem>
                        <MenuItem value={"5:00 PM"}>5:00 PM</MenuItem>
                        <MenuItem value={"5:30 PM"}>5:30 PM</MenuItem>

                        <MenuItem value={"6:00 PM"}>6:00 PM</MenuItem>
                        <MenuItem value={"6:30 PM"}>6:30 PM</MenuItem>
                        <MenuItem value={"7:00 PM"}>7:00 PM</MenuItem>
                        <MenuItem value={"7:30 PM"}>7:30 PM</MenuItem>
                        <MenuItem value={"8:00 PM"}>8:00 PM</MenuItem>
                        <MenuItem value={"8:30 PM"}>8:30 PM</MenuItem>
                        <MenuItem value={"9:00 PM"}>9:00 PM</MenuItem>
                        <MenuItem value={"9:30  PM"}>9:30 PM</MenuItem>
                        <MenuItem value={"10:00 PM"}>10:00 PM</MenuItem>
                        <MenuItem value={"10:30 PM"}>10:30 PM</MenuItem>
                        <MenuItem value={"11:00PM"}>11:00 PM</MenuItem>
                        <MenuItem value={"11:30 PM"}>11:30 PM</MenuItem>
                        <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>

                        <MenuItem value={"12:30 AM"}>12:30 AM</MenuItem>
                        <MenuItem value={"1:00 AM"}>1:00 AM</MenuItem>
                        <MenuItem value={"1:30 AM"}>1:30 AM</MenuItem>
                        <MenuItem value={"2:00 AM"}>2:00 AM</MenuItem>
                        <MenuItem value={"2:30 AM"}>2:30 AM</MenuItem>
                        <MenuItem value={"3:00 AM"}>3:00 AM</MenuItem>
                        <MenuItem value={"3:30 AM"}>3:30 AM</MenuItem>
                        <MenuItem value={"4:00 AM"}>4:00 AM</MenuItem>
                        <MenuItem value={"4:30 AM"}>4:30 AM</MenuItem>
                        <MenuItem value={"5:00 AM"}>5:00 AM</MenuItem>
                        <MenuItem value={"5:30 AM"}>5:30 AM</MenuItem>

                        <MenuItem value={"6:00 AM"}>6:00 AM</MenuItem>
                        <MenuItem value={"6:30 AM"}>6:30 AM</MenuItem>
                        <MenuItem value={"7:00 AM"}>7:00 AM</MenuItem>
                        <MenuItem value={"7:30 AM"}>7:30 AM</MenuItem>
                        <MenuItem value={"8:00 AM"}>8:00 AM</MenuItem>
                        <MenuItem value={"8:30 AM"}>8:30 AM</MenuItem>
                        <MenuItem value={"9:00 AM"}>9:00 AM</MenuItem>
                        <MenuItem value={"9:30 AM"}>9:30 AM</MenuItem>
                        <MenuItem value={"10:00 AM"}>10:00 AM</MenuItem>
                        <MenuItem value={"10:30 AM"}>10:30 AM</MenuItem>
                        <MenuItem value={"11:00 AM"}>11:00 AM</MenuItem>
                        <MenuItem value={"11:30 AM"}>11:30 AM</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div>
                <span>Expected Delivery time</span>
              </div>

              <input
                style={{
                  fontSize: "18px",
                  padding: "8px 13px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "0.3px solid #d7d7d7",
                }}
                required
                {...register("ExpectedDeliveryTime")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                label="Time"
                onChange={handleChange}
                type="time"
                id="appt"
                name="appt"
              />
            </div>

            <div
              className="mt-2 p-2 border rounded"
              style={{ display: "none" }}
            >
              <div style={{ padding: "0px", margin: "10px", height: "10px" }}>
                <h5>Allow Location</h5>
              </div>

              <div
                class=""
                style={{
                  fontSize: "17px",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => setAllowLocation(!allowlocation)}
              >
                <div
                  class="d-flex flex-row bd-highlight mb-3"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div class="p-2 bd-highlight">OFF</div>
                  <div class="p-2 bd-highlight">
                    <FormControlLabel
                      control={<MaterialUISwitch sx={{ m: 1 }} />}
                      label="ON"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center mt-3">
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#fec400" }}
            >
              Confirm to order
            </Button>
          </div>
          <div
            className="mt-4"
            style={{ display: `${error.error === true ? "block" : "none"}` }}
          >
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error.msg}
            </Alert>
          </div>
        </div>
      </form>
    </div>
  );
}
