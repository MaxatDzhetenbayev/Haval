import React from "react";
import { Admin as AdminComponent, Resource } from "react-admin";
import { AdminModelList } from "./models/AdminModelsList";

export const Admin = () => {
  return (
    <AdminComponent>
      <Resource
        name="models"
        list={AdminModelList}
        options={{ label: "Models", basePath: "/admin/models" }}
      />
    </AdminComponent>
  );
};
