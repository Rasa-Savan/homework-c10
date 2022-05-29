import { Button } from "@mui/material";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase/config";

function AddData() {
  const setDocHandler = async () => {
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan",
    });
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <div>
      AddData
      <Button onClick={setDocHandler} variant="outlined">
        Set Document
      </Button>
    </div>
  );
}

export default AddData;
