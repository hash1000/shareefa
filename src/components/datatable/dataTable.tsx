import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Loader2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { ITableProps } from "./table.interface";

function DataTable<T>({
  loading,
  data,
  columns,
  isfilter = false,
  tableName,
  metadata,
  handlePageIndex,
}: ITableProps<T>) {
  const [{ open }, setClose] = React.useState<{
    open: boolean;
    rowInfo: unknown;
  }>({ open: false, rowInfo: null });

  const toggleData = (rowData?: unknown) => {
    setClose({ open: !open, rowInfo: rowData || null });
  };

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data: data as [] | T[],
    columns: columns as ColumnDef<T>[],
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting,
    },
  });

  function previousPage() {
    if (handlePageIndex)
      handlePageIndex(Number(metadata?.currentPage) - Number(1));
  }
  function nextPage() {
    if (handlePageIndex)
      handlePageIndex(Number(metadata?.currentPage) + Number(1));
  }

  return (
    <div className="w-full p-2">
      {isfilter && (
        <div className="users-filter py-6 flex flex-row gap-4 justify-end items-center">
          <div className="relative h-full">
            <input
              placeholder="search..."
              className="border max-w-xs h-10 border-[#E6E8E9] 
          outline-none focus-visible:ring-1 focus-visible:ring-gray-200
          dark:bg-gray-600 pr-9"
              name="search-filter"
              type="text"
            />
            <span className="absolute bg-transparent top-0 bottom-0 right-0 w-10 h-full grid place-content-center text-gray-400">
              <Search className="size-5" />
            </span>
          </div>
        </div>
      )}
      <div
        className={cn("rounded-lg border bg-white shadow", !isfilter && "mt-6")}
      >
        <Table className={cn("rounded-lg", tableName && `${tableName}-table`)}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-[#E6E8E9] hover:bg-[#E6E8E9]"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-bold text-black">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel()?.rows?.length ? (
              table.getRowModel()?.rows.map((row) => (
                <TableRow
                  key={row?.id}
                  onClick={() => toggleData(row.original)}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-2.5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : loading ? (
              <TableRow className="w-full">
                <TableCell
                  colSpan={columns.length}
                  className="h-20 font-semibold text-center"
                >
                  <Loader2 className="animate-spin ma-x-auto text-primary mx-auto" />
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-20 font-semibold text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Page{" "}
          <strong>
            {metadata?.currentPage || table.getState().pagination.pageIndex + 1}
          </strong>{" "}
          to <strong>{metadata?.totalPages || table.getPageCount()} </strong>
          out of
          <strong>
            {" "}
            {metadata?.totalRecords ||
              table.getFilteredRowModel().rows.length}{" "}
            records.
          </strong>
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => previousPage()}
            disabled={Number(metadata?.currentPage) === Number(1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => nextPage()}
            disabled={
              Number(metadata?.currentPage) === Number(metadata?.totalPages)
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
