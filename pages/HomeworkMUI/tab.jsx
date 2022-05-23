import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RegistrationForm from "./registration-form";
import PatientInformation from "./patient-information";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PublicIcon from "@mui/icons-material/Public";
import LaoCovid from "./lao-covid";
import WorldCovid from "./world-covid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        border: "1px solid #F5F5F",
        boxShadow: "1px 0px 10px 2px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        minWidth: "800px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{ backgroundColor: "#EEEEEE" }}
        >
          <Tab
            sx={{ fontSize: "18px" }}
            label="Patient Information"
            icon={<AccessibleForwardIcon />}
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: "18px" }}
            label="COVID-19 In Laos"
            icon={<EditLocationAltIcon />}
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: "18px" }}
            label="COVID-19 In The World"
            icon={<PublicIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PatientInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LaoCovid />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WorldCovid />
      </TabPanel>
    </Box>
  );
}
