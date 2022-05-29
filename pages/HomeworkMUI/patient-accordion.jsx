import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RegistrationForm from "./registration-form";
import VaccineForm from "./vaccine-form";
import DataGridDemo from "./patient-table";

export default function PatientAccordion() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#76d1f5",
            color: "#055270",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            Registration Form
          </Typography>
          <Typography component="p" sx={{ color: "#555555" }}>
            Asking patient information and input into system in this form
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingY: "50px" }}>
          <RegistrationForm />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#76d1f5", color: "#055270" }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            Vaccination Form
          </Typography>
          <Typography component="p" sx={{ color: "#555555" }}>
            Patient vaccination information & history
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingY: "50px" }}>
          <VaccineForm />
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#76d1f5", color: "#055270" }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            List of all patients
          </Typography>
          <Typography component="p" sx={{ color: "#555555" }}>
            List of all Registered Patient
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingY: "50px" }}>
          <DataGridDemo />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
