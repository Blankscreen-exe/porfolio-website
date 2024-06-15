import React from "react";
import PropTypes from "prop-types";
import { flexRender, createColumnHelper } from "@tanstack/react-table";

// Data
import data from "../../data/devResourceList.json";

// helpers
import { capitalizeFirstLetter, capitalizeWords, truncateText } from "../../helpers/common";

// Constants
import svgList from "../../constants/svg";
import appConstants from "../../constants/appConstants";

// Components
import DataTable from "../common/DataTable";
import PageTitle from "../common/PageTitle";
import Paragraph from "../common/Paragraph";

function index(props) {
  window.scrollTo(0, 0);
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (row) => <span>{row.getValue()}</span>,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">ID</h2>
      ),
    }),
    columnHelper.accessor("title", {
      cell: (row) => <b>{capitalizeWords(row.getValue())}</b>,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary w-[100px]">
          Title
        </h2>
      ),
    }),
    columnHelper.accessor("link", {
      cell: (row) => <a href={row.getValue()} target="_blank" className="underline">{truncateText(row.getValue(), 20)}</a>,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Resource URL
        </h2>
      ),
    }),
    columnHelper.accessor("recommendation", {
      cell: (row) => {
        let rating;
        if (row.getValue()===false) {
          rating="No ratings yet" 
        } else if (row.getValue()===0) {
          rating="It was pretty dumb, tbh" 
        } else {
          rating="⭐️".repeat(row.getValue())
        }
        return (<>{rating}</>);
      }
        ,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Recommendation
        </h2>
      ),
    }),
    columnHelper.accessor("review", {
      cell: (row) => (
        <>
          {row.getValue() ? (
            <>
              <button
                className="p-1 bg-tertiary border-0 hover:border-0 hover:bg-primary hover:text-bg1 focus:outline-none rounded-full"
                onClick={() =>
                  document.getElementById(`booklist_modal_${row.row.id}`).showModal()
                }
              >
                {svgList.view}
              </button>
              <dialog id={`booklist_modal_${row.row.id}`} className="modal">
                <div className="modal-box bg-bg2">
                  <h3 className="font-bold text-lg">Review</h3>
                  <p className="py-4">{row.getValue()}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </>
          ) : (
            <>No reviews yet</>
          )}
        </>
      ),
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Review
        </h2>
      ),
    }),
    columnHelper.accessor("topics", {
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
          Topics
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
      <PageTitle title="My Dev Resource List"/>
      <Paragraph text={"List of various tools which have helped me during my career. Some of these tools are top-notch while other are just one of a kind. Within this <span class='font-bold'>mass of URLs</span>, you are sure to find something of use in there.<br/><br/>If there is a resource which you don't see listed here, be sure to <a href="+appConstants.routes.contacts+" class='text-contentLink underline hover:text-contentLinkHover'>tell me</a> about it. My goal is to make this list as diverse as possible."}/>
      <Paragraph text={"<span class='font-bold'>Note</span> that this is an incomplete list and it is still WIP."}/>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

index.propTypes = {};

export default index;
