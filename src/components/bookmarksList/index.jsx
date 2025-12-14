import React from "react";
import PropTypes from "prop-types";
import { createColumnHelper } from "@tanstack/react-table";

// Data
import data from "../../data/bookmarks.json";

// helpers
import { capitalizeFirstLetter } from "../../helpers/common";

// Constants
import appConstants from "../../constants/appConstants";

// Components
import DataTable from "../common/DataTable";
import PageTitle from "../common/PageTitle";
import Paragraph from "../common/Paragraph";

function index(props) {
  window.scrollTo(0, 0);
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("icon", {
      cell: (row) => (
        <img 
          src={row.getValue()} 
          alt={`${row.row.original.title} icon`}
          className="w-12 rounded bg-white p-0.5"
          onError={(e) => {
            e.target.src = "https://github.com/favicon.ico"; // Fallback icon
          }}
        />
      ),
      header: () => <span></span>, // Empty header for icon column
      enableSorting: false,
    }),
    columnHelper.accessor("title", {
      cell: (row) => (
        <a
          href={row.row.original.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-contentLink hover:text-contentLinkHover underline font-bold"
        >
          {row.getValue()}
        </a>
      ),
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Title
        </h2>
      ),
    }),
    columnHelper.accessor("description", {
      cell: (row) => <span>{row.getValue()}</span>,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Description
        </h2>
      ),
      size: 500,
    }),
    columnHelper.accessor("category", {
      cell: (row) => (
        <span className="bg-tertiary text-content px-2 py-1 rounded-md font-semibold">
          {capitalizeFirstLetter(row.getValue())}
        </span>
      ),
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Category
        </h2>
      ),
    }),
    columnHelper.accessor("tags", {
      cell: (row) => (
        <span className="flex flex-row flex-wrap gap-2">
          {row.getValue().map((item, ind) => {
            return (
              <span
                className="bg-primary text-bg1 px-2 rounded-full font-bold"
                key={ind}
              >
                {capitalizeFirstLetter(item)}
              </span>
            );
          })}
        </span>
      ),
      size: 500,
      enableSorting: false,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Tags
        </h2>
      ),
    }),
  ];

  return (
    <div className="mb-12">
      <PageTitle title="My Bookmarks" />
      <Paragraph
        text={"This is a curated collection of useful developer resources, tools, documentation, and websites that I find valuable. These bookmarks include everything from development utilities and online tools to learning resources and community platforms. Feel free to explore and discover something useful!<br/><br/>If you have a resource you'd like to share or want to discuss any of these tools, you can <a href=" +
          appConstants.routes.contacts +
          " class='text-contentLink underline hover:text-contentLinkHover'>connect with me here</a>"}
      />

      <DataTable data={data} columns={columns} />
    </div>
  );
}

index.propTypes = {};

export default index;

