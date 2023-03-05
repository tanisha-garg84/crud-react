import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PhoneDirectoryTable() {
  const rows = JSON.parse(localStorage.getItem("formData"));
  console.log(rows);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const newContacts = [...rows];
    newContacts.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(newContacts));
    navigate("/table");
  };

  const handleUpdate = (index) => {
    const editData = JSON.parse(localStorage.getItem("formData"))[`${index}`];
    console.log(editData);
    navigate(`/${editData.number}`, { state: { editData } });
  };

  return (
    <div className="containerTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial no.</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">phone</TableCell>
              <TableCell align="right">relation</TableCell>
              <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.SerialNo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.relation}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={() => handleUpdate(index)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="button">
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
