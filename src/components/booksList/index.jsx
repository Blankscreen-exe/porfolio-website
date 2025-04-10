import React from "react";
import PropTypes from "prop-types";
import { flexRender, createColumnHelper } from "@tanstack/react-table";

// Data
import data from "../../data/booksList";

// helpers
import { capitalizeFirstLetter, capitalizeWords } from "../../helpers/common";

// Constants
import svgList from "../../constants/svg";
import appConstants from "../../constants/appConstants";

// Components
import DataTable from "../common/DataTable";
import PageTitle from "../common/PageTitle";
import Paragraph from "../common/Paragraph";
import LazyNote from "../common/LazyNote";

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
    columnHelper.accessor("author", {
      cell: (row) => <i>{capitalizeWords(row.getValue())}</i>,
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary">
          Author
        </h2>
      ),
    }),
    columnHelper.accessor("status", {
      cell: (row) => {
        let stat;
        switch (row.getValue()) {
          case "inqueue":
            stat = <span>🔜 In Queue</span>;
            break;
          case "finished":
            stat = <span>✅ Finished</span>;
            break;
          case "reading":
            stat = <span className="px-2 py-1 rounded-md text-black bg-yellow-500">⬛️ Reading</span>;
            break;
          default:
            stat = <span>⚪️ N/A</span>;
        }
        return (stat);
      },
      header: () => (
        <h2 className="text-lg hover:cursor-pointer hover:text-primary w-[110px]">
          Status
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
    columnHelper.accessor("genre", {
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
          Genre
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
      <Paragraph text={"Books I have read and books I have reviewed. Hope you <i>will</i> find a <span class='font-bold'>good read</span> somewhere in there!<br/><br/>We can also share thoughts on a particular book if you like, <a href="+appConstants.routes.contacts+" class='text-contentLink underline hover:text-contentLinkHover'>connect with me here</a>"}/>
      <Paragraph text={"<span class='font-bold'>Note</span> that this is an incomplete list and it is still WIP."}/>
      <LazyNote/>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

index.propTypes = {};

export default index;
