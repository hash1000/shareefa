import { ColumnDef } from "@tanstack/react-table";

export type ITableProps<T> = {
  loading?: boolean;
  data?: T | [];
  columns: ColumnDef<T>[];
  isfilter?: boolean;
  tableName?: string;
  metadata?: {
    totalRecords: number | string;
    itemsPerPage: number | string;
    currentPage: number | string;
    nextPage: number | string | null;
    prevPage: number | string | null;
    totalPages: number | string;
  };
  // eslint-disable-next-line no-unused-vars
  handlePageIndex?: (arg: number) => void;

  isCreated?: boolean;
};
