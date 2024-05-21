import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { CreateCarForm } from "@/widgets/create-car-form/ui/CreateCarForm";

export const Admin = () => {
  useEffect(() => {
    //  createCar()
  }, []);

  return (
    <Box>
      <CreateCarForm />
    </Box>
  );
};
