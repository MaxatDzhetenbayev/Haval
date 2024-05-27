import React, { useEffect } from "react";
import { Box } from "@mui/material";

import { CreateCarForm } from "@/widgets/create-car-form/ui/CreateCarForm";

export const Admin = () => {
  return (
    <Box>
      <CreateCarForm />
    </Box>
  );
};
