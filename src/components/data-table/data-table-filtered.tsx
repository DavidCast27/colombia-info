"use client";
import type { Table } from "@tanstack/react-table";
import React from "react";

import { DataTableFacetedFilter } from "@/components/data-table/data-table-faceted-filter";
import type { DataTableFilterableColumn } from "@/components/data-table/types";

interface DataTableFilteredProps<TData> {
  table: Table<TData>;
  filterableColumns: DataTableFilterableColumn<TData>[];
}

function DataTableFiltered<TData>({
  table,
  filterableColumns,
}: DataTableFilteredProps<TData>) {
  return (
    <>
      {filterableColumns.length > 0 &&
        filterableColumns.map(
          (column) =>
            table.getColumn(column.id ? String(column.id) : "") && (
              <DataTableFacetedFilter
                key={String(column.id)}
                column={table.getColumn(column.id ? String(column.id) : "")}
                title={column.title}
                options={column.options}
              />
            ),
        )}
    </>
  );
}

export default DataTableFiltered;
