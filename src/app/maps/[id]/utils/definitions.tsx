"use client"

import {ColumnDef} from "@tanstack/react-table"
import React from "react";

import {DataTableColumnHeader} from "@/components/data-table/data-table-column-header"
import {DataTableSearchableColumn} from "@/components/data-table/types";
import {Department} from "@/types/department";


export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "name",
    header: ({column}) => <DataTableColumnHeader column={column} title="Nombre"/>,
  },
  {
    accessorKey: "population",
    header: ({column}) => <DataTableColumnHeader column={column} title="Poblacion"/>,
  },
  {
    accessorKey: "surface",
    header: ({column}) => <DataTableColumnHeader column={column} title="Superficie (Km)"/>,
  },
  {
    accessorKey: "municipalities",
    header: ({column}) => <DataTableColumnHeader column={column} title="Municipios"/>,
  },

]

export const searchableColumns: DataTableSearchableColumn<Department>[] = [
  {
    id: "name",
    title: "Nombre",
  },
]


