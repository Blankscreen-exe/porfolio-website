import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import TextInputFilter from "./TextInputFilter";

export default function DataTable({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="">
      {/* <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        className="rounded-md border-2 border-primary"
      /> */}
      <TextInputFilter
        handleChange={setFiltering}
        value={filtering}
        id={'booklist-filter'}
        label={"Search"} 
        name={'booklist-filter'}
        isRequired={true}
      />
      <div className="overflow-x-auto">
        <table className="table overflow-x-auto min-w-[1000px]">
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                    <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    >
                    {header.isPlaceholder ? null : (
                        <div>
                        {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                        {
                            { asc: "🔼", desc: "🔽" }[
                            header.column.getIsSorted() ?? null
                            ]
                        }
                        </div>
                    )}
                    </th>
                ))}
                </tr>
            ))}
            </thead>

            <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
            {/* <tfoot>
                {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                    {footerGroup.headers.map(header => (
                    <th key={header.id}>
                        {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                            )}
                    </th>
                    ))}
                </tr>
                ))}
            </tfoot> */}
        </table>
      </div>
      <div>
        <button onClick={() => table.setPageIndex(0)}>First page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last page
        </button>
      </div>
    </div>
  );
}
