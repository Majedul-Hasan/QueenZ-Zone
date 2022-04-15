import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { React, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserInfoContext } from "../../App";

export default function Order() {
  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  const [startDate, setStartDate] = useState(new Date());

  console.log("this is user info : ", loggingUserInfo);

  const orderUserName = (props) => {
    console.log("this is order user name : ", props);
  };

  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <div>
        <div
          class="p-2 m-2 "
          style={{ borderRadius: "10px", border: "2px solid #fec400" }}
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

          <div>
            <TextField
              className="mt-4"
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="Name"
              defaultValue={loggingUserInfo.displayName}
              onBlur={(e) => orderUserName(e.target.value)}
            />
            <TextField
              className="mt-2"
              disabled
              style={{ width: "100%" }}
              id="outlined-disabled"
              label="Email"
              defaultValue={loggingUserInfo.email}
            />
            <TextField
              className="mt-2"
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="Phone"
              defaultValue={loggingUserInfo.phoneNumber}
              onBlur={(e) => orderUserName(e.target.value)}
            />
            <TextField
              className="mt-2"
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="Phone 2 (optional)"
              onBlur={(e) => orderUserName(e.target.value)}
            />
            <TextField
              className="mt-2"
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="Address"
              defaultValue={loggingUserInfo.address}
              onBlur={(e) => orderUserName(e.target.value)}
            />
            <TextField
              className="mt-2"
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="Address 2 (optional)"
              onBlur={(e) => orderUserName(e.target.value)}
            />
            <div className="mt-2 ">
              <span>Select Order date</span>
              <DatePicker
                className="w-100 p-2 border rounded"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="mt-2 ">
              <span>Select Order time</span>
              <div className="mt-2 ">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={time}
                      label="Time"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>12:00 PM</MenuItem>
                      <MenuItem value={10}>12:30 PM</MenuItem>
                      <MenuItem value={10}>1:00 PM</MenuItem>
                      <MenuItem value={10}>1:30 PM</MenuItem>
                      <MenuItem value={10}>2:00 PM</MenuItem>
                      <MenuItem value={10}>2:30 PM</MenuItem>
                      <MenuItem value={10}>3:00 PM</MenuItem>
                      <MenuItem value={10}>3:30 PM</MenuItem>
                      <MenuItem value={10}>4:00 PM</MenuItem>
                      <MenuItem value={10}>4:30 PM</MenuItem>
                      <MenuItem value={10}>5:00 PM</MenuItem>
                      <MenuItem value={10}>5:30 PM</MenuItem>

                      <MenuItem value={10}>6:00 PM</MenuItem>
                      <MenuItem value={10}>6:30 PM</MenuItem>
                      <MenuItem value={10}>7:00 PM</MenuItem>
                      <MenuItem value={10}>7:30 PM</MenuItem>
                      <MenuItem value={10}>8:00 PM</MenuItem>
                      <MenuItem value={10}>8:30 PM</MenuItem>
                      <MenuItem value={10}>9:00 PM</MenuItem>
                      <MenuItem value={10}>9:30 PM</MenuItem>
                      <MenuItem value={10}>10:00 PM</MenuItem>
                      <MenuItem value={10}>10:30 PM</MenuItem>
                      <MenuItem value={10}>11:00 PM</MenuItem>
                      <MenuItem value={10}>11:30 PM</MenuItem>
                      <MenuItem value={10}>12:00 AM</MenuItem>

                      <MenuItem value={10}>12:30 AM</MenuItem>
                      <MenuItem value={10}>1:00 AM</MenuItem>
                      <MenuItem value={10}>1:30 AM</MenuItem>
                      <MenuItem value={10}>2:00 AM</MenuItem>
                      <MenuItem value={10}>2:30 AM</MenuItem>
                      <MenuItem value={10}>3:00 AM</MenuItem>
                      <MenuItem value={10}>3:30 AM</MenuItem>
                      <MenuItem value={10}>4:00 AM</MenuItem>
                      <MenuItem value={10}>4:30 AM</MenuItem>
                      <MenuItem value={10}>5:00 AM</MenuItem>
                      <MenuItem value={10}>5:30 AM</MenuItem>

                      <MenuItem value={10}>6:00 AM</MenuItem>
                      <MenuItem value={10}>6:30 AM</MenuItem>
                      <MenuItem value={10}>7:00 AM</MenuItem>
                      <MenuItem value={10}>7:30 AM</MenuItem>
                      <MenuItem value={10}>8:00 AM</MenuItem>
                      <MenuItem value={10}>8:30 AM</MenuItem>
                      <MenuItem value={10}>9:00 AM</MenuItem>
                      <MenuItem value={10}>9:30 AM</MenuItem>
                      <MenuItem value={10}>10:00 AM</MenuItem>
                      <MenuItem value={10}>10:30 AM</MenuItem>
                      <MenuItem value={10}>11:00 AM</MenuItem>
                      <MenuItem value={10}>11:30 AM</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
