import { Button } from "@mui/material";
import React from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";

function GetDataFromDB() {
  const getDataHandler = async () => {
    const docRef = doc(db, "patient", "2DcxhbHzR9oaeySV8kkM");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getMultiDataHandler = async () => {
    const q = query(
      collection(db, "patient"),
      where("symptom.soreThroat", "==", true)
    );

    const patientArray = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      patientArray.push(doc.data());
    });

    console.log("result", patientArray);
  };

  const getAllDataHandler = async () => {
    let allData = [];
    const querySnapshot = await getDocs(collection(db, "patient"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      allData.push(doc.data());
    });

    console.log("result", allData);
  };
  return (
    <div>
      GetDataFromDB
      <Button variant="outlined" onClick={getDataHandler}>
        Get Data
      </Button>
      <Button variant="outlined" onClick={getMultiDataHandler}>
        Get multi Data
      </Button>
      <Button variant="outlined" onClick={getAllDataHandler}>
        Get All Data
      </Button>
    </div>
  );
}

export default GetDataFromDB;
