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

export default function DataTable({ data, columns, colVisibility={} }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [columnVisibility, setColumnVisibility] = useState(colVisibility);

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
      columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const handleInputChange = (event) => {
    const newPageIndex = parseInt(event.target.value, 10) - 1; // Adjust for zero-based indexing

    // Handle invalid input (non-numeric or out-of-range values)
    if (
      isNaN(newPageIndex) ||
      newPageIndex < 0 ||
      newPageIndex >= table.getPageCount()
    ) {
      console.warn("Invalid page number entered.");
      return;
    }

    table.setPageIndex(newPageIndex);

    setCurrentPageNumber(newPageIndex+1);
  };
  const handleNextPage = (event) => {
    table.nextPage();
    setCurrentPageNumber(table.options.state.pagination.pageIndex+1);
  };
  const handlePrevPage = (event) => {
    table.previousPage();
    setCurrentPageNumber(table.options.state.pagination.pageIndex-1);
  };
  const handleFirstPage = (event) => {
    table.setPageIndex(0);
    setCurrentPageNumber(1);
  };
  const handleLastPage = (event) => {
    table.setPageIndex(table.getPageCount() - 1);
    setCurrentPageNumber(table.getPageCount());
  };
  
  return (
    <div className="">
      <TextInputFilter
        handleChange={setFiltering}
        value={filtering}
        id={"booklist-filter"}
        label={"Search"}
        name={"booklist-filter"}
        isRequired={true}
      />
      <div className="overflow-x-auto">
        <table className="table overflow-x-auto">
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

      <div className="my-4 w-full flex flex-row flex-start flex-wrap gap-2 sm:gap-12">
        <div className="join">
          <button
            className="join-item btn bg-tertiary focus:outline-none"
            onClick={handleFirstPage}
          >
            «
          </button>
          <button
            className="join-item btn bg-tertiary focus:outline-none"
            disabled={!table.getCanPreviousPage()}
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <button className="join-item btn bg-tertiary focus:outline-none">
            Page {table.options.state.pagination.pageIndex + 1} out of{" "}
            {table.getPageCount()}
          </button>
          <button
            className="join-item btn bg-tertiary focus:outline-none"
            disabled={!table.getCanNextPage()}
            onClick={handleNextPage}
          >
            Next
          </button>
          <button
            className="join-item btn bg-tertiary focus:outline-none"
            onClick={handleLastPage}
          >
            »
          </button>
        </div>

        <span>
          <label className="my-auto" htmlFor="page-number-input">
            Page
          </label>
          <input
            type="number"
            name="page-number-input"
            className="mx-2 border border-gray-300 hover:border-primary focus:border-primary bg-bg1 rounded px-2 py-1 w-20 h-full"
            onChange={handleInputChange}
            value={currentPageNumber}
            max={table.getPageCount()}
            min={1}
          />
        </span>
      </div>

    </div>
  );
}
