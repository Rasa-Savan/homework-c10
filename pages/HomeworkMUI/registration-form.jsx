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

const DateRange = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const MonthRange = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const YearRange = [
  "1980",
  "1981",
  "1982",
  "1983",
  "1984",
  "1985",
  "1986",
  "1987",
  "1988",
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];

function RegistrationForm() {
  const [stateSymptoms, setStateSymptoms] = React.useState({
    lossOfTasteSmell: false,
    difficultyBreathing: false,
    cough: false,
    runningNose: false,
    bodyAches: false,
    soreThroat: false,
  });

  const handleChange = (event) => {
    setStateSymptoms({
      ...stateSymptoms,
      [event.target.name]: event.target.checked,
    });
  };

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
        </div>
      </div>
      <div className="my-3">
        <p>Date of Birth</p>
        <div className="flex space-x-5 items-center">
          <FormControl fullWidth>
            <InputLabel id="select-date-lable">Date</InputLabel>
            <Select
              labelId="select-date-lable"
              id="select-date"
              label="Date"
              placeholder="Date"
              //   value={age}
              //   onChange={handleChange}
            >
              {DateRange.map((d, index) => (
                <MenuItem key={index} value={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-month-lable">Month</InputLabel>
            <Select
              labelId="select-month-lable"
              id="select-month"
              label="Month"
              placeholder="Select month"
              //   value={age}
              //   onChange={handleChange}
            >
              {MonthRange.map((m, index) => (
                <MenuItem key={index} value={m}>
                  {m}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-year-lable">Year</InputLabel>
            <Select
              labelId="select-year-lable"
              id="select-year"
              label="Year"
              placeholder="Select Year"
              //   value={age}
              //   onChange={handleChange}
            >
              {MonthRange.map((y, index) => (
                <MenuItem key={index} value={y}>
                  {y}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CalendarMonthIcon fontSize="large" sx={{ color: "#888888" }} />
        </div>
      </div>
      <div className="my-3">
        <p>Address</p>
        <div className="flex space-x-5">
          <TextField
            helperText="Your current address"
            placeholder="Input your address"
            multiline
            rows={5}
            fullWidth
          />
        </div>
      </div>

      <p className="my-10 text-center p-3 text-2xl bg-[#eaf9ff] boonhome font-extrabold text-gray-500">
        Medical History
      </p>

      <div className="flex flex-col space-y-10">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Have you been diagnosed with Covid-19?
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <div>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">
              Please check all symptoms that apply:
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stateSymptoms.lossOfTasteSmell}
                    onChange={handleChange}
                    name="lossOfTasteSmell"
                  />
                }
                label="Loss of taste/smell"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stateSymptoms.difficultyBreathing}
                    onChange={handleChange}
                    name="difficultyBreathing"
                  />
                }
                label="Difficulty breathing"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stateSymptoms.cough}
                    onChange={handleChange}
                    name="cough"
                  />
                }
                label="Cough"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stateSymptoms.runningNose}
                    onChange={handleChange}
                    name="runningNose"
                  />
                }
                label="Running nose"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stateSymptoms.bodyAches}
                    onChange={handleChange}
                    name="bodyAches"
                  />
                }
                label="Body aches"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stateSymptoms.soreThroat}
                    onChange={handleChange}
                    name="soreThroat"
                  />
                }
                label="Sore throat"
              />
            </FormGroup>
            <FormHelperText>Please select your symptoms</FormHelperText>
          </FormControl>
        </div>
      </div>

      <div className="flex space-x-10 my-10">
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

export default RegistrationForm;
