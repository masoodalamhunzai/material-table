import React from "react";
// import MaterialTable from "material-table";
import MaterialTable from "@material-table/core";
import dev from "../../images/dev.jpg";

const Table = () => {
  return (
    <div style={{ maxWidth: "80%", margin: "5rem auto" }}>
      <MaterialTable
        title="Basic Fixed Columns Preview"
        columns={[
          {
            title: (
              <img src={dev} alt={dev} width="100" height="100" name="logo" />
            ),
            field: "testField",
            width: 140,
          },
          { title: "Name", field: "name", width: 150 },
          { title: "Surname", field: "surname", width: 150 },
          {
            title: "Birth Year",
            field: "birthYear",
            type: "numeric",
            width: 150,
          },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            width: 150,
          },
          { title: "Name", field: "name", width: 150 },
          { title: "Surname", field: "surname", width: 150 },
          {
            title: "Birth Year",
            field: "birthYear",
            type: "numeric",
            width: 150,
          },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            width: 150,
          },
        ]}
        data={[
          {
            testField: "test value1",
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            birthCity: 63,
          },
          {
            testField: "test value2",
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        options={{
          fixedColumns: {
            left: 1,
            // right: 1,
          },
        }}
      />
    </div>
  );
};

export default Table;
