import React, { useState } from "react";
import PropTypes from "prop-types";

// data
import educationData from "../../data/educationTimeLine.json";

// Helpers
import { capitalizeFirstLetter } from "../../helpers/common";

// Components
import { TECollapse } from "tw-elements-react";

function Education(props) {
  const [activeElement, setActiveElement] = useState(-1);

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement(-1);
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div className="p-4 w-[80%] md:w-[50%] mx-auto flow-root">
      <ul role="list" className="-mb-8">
        {educationData.map((item, ind) => {
          return (
            <li key={ind}>
              <div className="relative pb-8">
                {educationData.length - 1 !== ind && (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                )}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-bg2 drop-shadow-lg shadow-shadow">
                      <svg
                        className="h-5 w-5 text-content"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4  pl-3">
                    <div>
                      {/* ---------------------------------------------- */}

                      <div className="my-auto">
                        <h2 className="mb-0" id="headingOne">
                          <button
                            className={`${
                              activeElement === ind
                                ? `text-primary`
                                : "text-content/70"
                            }  relative flex w-full items-center rounded-none text-left text-sm md:text-lg font-bold transition outline-none focus:outline-none hover:outline-none outline-0 hover:outline-0 focus:outline-0 hover:border-none hover:border-0 border-0 hover:text-primary`}
                            type="button"
                            onClick={() => handleClick(ind)}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            {item.degreeTitle}
                          </button>
                        </h2>
                        <TECollapse
                          show={activeElement === ind}
                          className="!mt-0 !rounded-b-none !shadow-none overflow-visible"
                        >
                          <div
                            className="-px-5 md:px-5 py-4 text-xs md:text-sm w-[200%] sm:w-[100%] md:w-[100%]"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></div>
                        </TECollapse>
                      </div>

                      {/* ---------------------------------------------- */}
                    </div>
                    <div className="whitespace-nowrap text-right text-xs md:text-sm text-content">
                      <time datetime="2020-10-04">
                        {item.startDate} - {item.endDate}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Education.propTypes = {};

export default Education;
