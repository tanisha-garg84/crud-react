import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "../Css/PhoneDirectoryForm.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function PhoneDirectoryForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", number: "", relation: "" });
  useEffect(() => {
    if (location.state?.editData) {
      setData(location.state.editData);
    }
  }, [location]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let oldData = JSON.parse(localStorage.getItem("formData"));
    oldData = oldData ? JSON.parse(localStorage.getItem("formData")) : [];
    oldData.push(data);
    localStorage.setItem("formData", JSON.stringify(oldData));
    navigate("/table");
  };

  console.log(typeof data);

  return (
    <div className="container">
      <div className="form">
        <Typography variant="h4" component="h2">
          {location.state?.editData ? "Save Contact" : "ADD CONTACT"}
        </Typography>

        <TextField
          required
          name="name"
          id="outlined-required"
          label="Full Name"
          sx={{ width: "40%" }}
          onChange={handleChange}
          value={data.name}
        />
        <TextField
          required
          name="number"
          id="outlined-required"
          label="Number"
          sx={{ width: "40%" }}
          onChange={handleChange}
          value={data.number}
        />
        <TextField
          required
          name="relation"
          id="outlined-required"
          label="Relation"
          sx={{ width: "40%" }}
          onChange={handleChange}
          value={data.relation}
        />
        <Button
          id="saveAndUpdate"
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Add Contact
        </Button>
      </div>
    </div>
  );
}
export default PhoneDirectoryForm;
