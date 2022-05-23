import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function VaccineForm() {
  return (
    <div className="mx-20">
      <p className="text-center p-3 text-2xl bg-[#eaf9ff] boonhome font-extrabold text-gray-500">
        COVID-19 Registration Form
      </p>
      <div className="my-3">
        <p>Name</p>
        <div className="flex space-x-5">
          <TextField
            helperText="First Name"
            placeholder="First Name"
            fullWidth
          />
          <TextField helperText="Last Name" placeholder="Last Name" fullWidth />
          <TextField helperText="" placeholder="Last Name" fullWidth />
        </div>
      </div>
      <div className="my-3 flex space-x-5">
        <div className="flex-1">
          <p>Vaccine Dose No.</p>
          <FormControl fullWidth>
            {/* <InputLabel id="select-year-lable">Year</InputLabel> */}
            <Select
              labelId="select-year-lable"
              id="select-year"
              //   label="Year"
              placeholder="Select Year"
              //   value={age}
              //   onChange={handleChange}
            >
              {["First Dose", "Second Dose", "Third Dose", "Fourth Dose"].map(
                (dose, index) => (
                  <MenuItem key={index} value={dose}>
                    {dose}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
        <div className="flex-1">
          <p>Vaccine Type</p>
          <FormControl fullWidth>
            {/* <InputLabel id="select-year-lable">Year</InputLabel> */}
            <Select
              labelId="select-year-lable"
              id="select-year"
              //   label="Year"
              placeholder="Select Year"
              //   value={age}
              //   onChange={handleChange}
            >
              {[
                "Pfizer BioNTech",
                "CoronaVac",
                "Johnson & Johnson",
                "Oxford, AstraZeneca",
                "Sinopharm BBIBP",
                "Sputnik Light",
                "Sputnik V",
              ].map((vc, index) => (
                <MenuItem key={index} value={vc}>
                  {vc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="flex space-x-5">
        <div className="flex-1">
          <p>Vaccinate At</p>
          <TextField placeholder="Input location of your vaccinate" fullWidth />
        </div>
        <div className="flex-1">
          <p>Vaccinate Date</p>
          <input
            type="date"
            className="border px-5 py-2 h-14 rounded-md outline-none w-full"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-10 my-10">
        <Button variant="outlined" color="success">
          Submit
        </Button>
        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default VaccineForm;
