import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../../firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Button, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function DataGridDemo() {
  const [patientInfo, setPatientInfo] = React.useState([]);

  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "no", headerName: "ລຳດັບ", width: 90 },
    {
      field: "firstname",
      headerName: "ຊື່ແທ້",
      width: 150,
      // editable: true,
    },
    {
      field: "lastname",
      headerName: "ນາມສະກຸນ",
      width: 150,
      // editable: true,
    },
    {
      field: "dob",
      headerName: "ວັນເດືອນປີເກີດ",
      type: "number",
      width: 110,
      // editable: true,
    },
    {
      field: "address",
      headerName: "ທີ່ຢູ່",
      sortable: false,
      width: 260,
    },
    {
      field: "action",
      headerName: "action",
      width: 250,
      renderCell: (params) => (
        <div>
          <Button onClick={() => deteteHandler(params.row)}>Delete</Button>
        </div>
      ),
    },
  ];

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let allData = [];
    const querySnapshot = await getDocs(collection(db, "patient"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      allData.push({ id: doc.id, data: doc.data() });
    });

    // console.log("result", allData);

    const finalData = allData.map((item, index) => ({
      id: item.id,
      no: index + 1,
      firstname: item.data.firstname,
      lastname: item.data.lastname,
      dob: item.data.dob,
      address: item.data.address,
    }));

    setPatientInfo(finalData);
  };

  const deteteHandler = async (data) => {
    console.log("data", data);
    await deleteDoc(doc(db, "patient", data.id));
    alert("delete this patient " + data.firstname + " completed");
    fetchData();
  };

  // console.log("result", patientInfo);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={patientInfo}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
