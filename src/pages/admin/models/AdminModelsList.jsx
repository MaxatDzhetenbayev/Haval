import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const AdminModelList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
