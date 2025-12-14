import React from "react";
import PropTypes from "prop-types";
import { flexRender, createColumnHelper } from "@tanstack/react-table";

// Data
import data from "../../data/booksList";

// helpers
import { capitalizeFirstLetter, capitalizeWords } from "../../helpers/common";

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
    columnHelper.accessor("title", {
      cell: (row) => <b>{capitalizeWords(row.getValue())}</b>,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary w-[100px]">
          Title
        </h2>
      ),
    }),
    columnHelper.accessor("author", {
      cell: (row) => <i>{capitalizeWords(row.getValue())}</i>,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Author
        </h2>
      ),
    }),
    columnHelper.accessor("tags", {
      cell: (row) => (
        <span className="flex flex-row flex-wrap gap-2">
          {row.getValue().map((item, ind) => {
            return (
              <span className="bg-primary text-bg1 px-2 rounded-full font-bold" key={ind}>
                {capitalizeFirstLetter(item)}
              </span>
            );
          })}
        </span>
      ),
      size: 500,
      enableSorting: false,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary w-[200px]">
          Tags
        </h2>
      ),
    }),
    // REVIEW: disabled cuz not needed
    // columnHelper.accessor("img", {
    //   cell: (row) => (
    //     <img src={row.getValue()} className="w-12 h-12 rounded-md"/>
    //   ),
    //   enableSorting: false
    // })
  ];

  return (
    <div className="mb-12">
      <PageTitle title="My Book List"/>
      <Paragraph text={"This is a curated collection of technical books covering software development, cybersecurity, networking, Linux, machine learning, and artificial intelligence. These books represent essential reading for anyone looking to deepen their understanding of modern technology and engineering practices.<br/><br/>If you'd like to discuss any of these books or share recommendations, feel free to <a href="+appConstants.routes.contacts+" class='text-contentLink underline hover:text-contentLinkHover'>connect with me here</a>"}/>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

index.propTypes = {};

export default index;
