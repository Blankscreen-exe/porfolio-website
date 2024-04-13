import React from "react";
import PropTypes from "prop-types";
import { flexRender, createColumnHelper } from "@tanstack/react-table";

import DataTable from "../common/DataTable";

// Data
import data from "../../data/booksList";

// helpers
import { capitalizeFirstLetter, capitalizeWords } from "../../helpers/common";

function index(props) {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (row) => (
        <span>{row.getValue()}</span>
      ),
      header: () => <h2 className="text-lg">ID</h2>
    }),
    columnHelper.accessor("title", {
      cell: (row) => (
        <b>{capitalizeWords(row.getValue())}</b>
      )
    }),
    {
      header: "Status",
      accessorFn: (row) => (row.status ? row.status : "N/A"),
    },
    {
      header: "Recommendation",
      accessorFn: (row) => "⭐️".repeat(row.recommendation),
    },
    columnHelper.accessor("review", {
      cell: (row) => (
        <>
          <button
            className="p-1 bg-bg2 hover:border-0 hover:bg-primary hover:text-bg1 focus:outline-none"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Review
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box bg-bg2">
              <h3 className="font-bold text-lg">Review</h3>
              <p className="py-4">{row.getValue()}</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </>
      ),
    }),
    {
      header: "Author",
      accessorKey: "author",
    },
    columnHelper.accessor("genre", {
      cell: (row) => (
        <span className="flex flex-row flex-wrap gap-2">
          {row.getValue().map((item, ind) => {
            return (
              <span className="bg-primary text-bg1 p-1 rounded-md" key={ind}>
                {capitalizeFirstLetter(item)}
              </span>
            );
          })}
        </span>
      ),
      size: 500,
      enableSorting: false
    }),
    columnHelper.accessor("img", {
      cell: (row) => (
        <img src={row.getValue()} className="w-12 h-12 rounded-md"/>
      ),
      enableSorting: false
    })
  ];

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

index.propTypes = {};

export default index;
