import DataTable from "@/components/datatable/dataTable";

const sampleData = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
  { id: 3, name: "Michael Johnson", age: 40, city: "Chicago" },
  // Add more data as needed
];

const columns = [
  {
    header: "ID",
    cell: (row: any) => <span>{row.id}</span>,
  },
  {
    header: "Name",
    cell: (row: any) => <span>{row.name}</span>,
  },
  {
    header: "Age",
    cell: (row: any) => <span>{row.age}</span>,
  },
  {
    header: "City",
    cell: (row: any) => <span>{row.city}</span>,
  },
];

function Provider() {
  return (
    <div className="rounded-lg bg-white p-30">
      <h3>Provider</h3>
      <DataTable
        loading={false}
        data={sampleData}
        columns={columns}
        isfilter={false}
        tableName="sample"
        metadata={{
          totalRecords: sampleData.length,
          itemsPerPage: 10, // Adjust as needed
          currentPage: 1, // Adjust as needed
          nextPage: null, // Adjust as needed
          prevPage: null, // Adjust as needed
          totalPages: 1, // Adjust as needed
        }}
        handlePageIndex={(pageIndex) => console.log("Page index:", pageIndex)}
      />
    </div>
  );
}

export default Provider;
