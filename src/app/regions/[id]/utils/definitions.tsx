"use client"

import { ColumnDef } from "@tanstack/react-table"
import React from "react";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { DataTableSearchableColumn } from "@/components/data-table/types";
import { Department } from "@/types/department";


export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nombre"/>,
  },
  {
    accessorKey: "population",
    header: ({ column }) => <DataTableColumnHeader
      className="justify-end"
      column={column}
      title="Poblacion"
    />,
    cell: ({ row }) => {
      const population = parseFloat(row.getValue("population"))
      return <div className="text-right font-medium pr-4">{population.toLocaleString('es-CO')}</div>
    },
  },
  {
    accessorKey: "surface",
    header: ({ column }) => <DataTableColumnHeader
      className="justify-end"
      column={column}
      title="Superficie"
    />,
    cell: ({ row }) => {
      const surface = parseFloat(row.getValue("surface"))
      return <div className="text-right font-medium pr-4">{surface.toLocaleString('es-CO')} km<sup>2</sup></div>
    },
  },
  {
    accessorKey: "municipalities",
    header: ({ column }) => <DataTableColumnHeader
      className="justify-end"
      column={column}
      title="Municipios"
    />,
    cell: ({ row }) => {
      const municipalities = parseFloat(row.getValue("municipalities"))
      return <div className="text-right font-medium pr-4">{municipalities}</div>
    },
  },

]

export const searchableColumns: DataTableSearchableColumn<Department>[] = [
  {
    id: "name",
    title: "Nombre",
  },
]


