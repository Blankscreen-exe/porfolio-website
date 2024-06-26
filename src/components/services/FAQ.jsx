import React, { useState } from "react";
import PropTypes from "prop-types";

// data
import faqData from "../../data/faq.json";

// Helpers
import { capitalizeFirstLetter } from "../../helpers/common";

// Components
import { TECollapse } from "tw-elements-react";
import SectionHeading from "../common/SectionHeading";


function FAQ(props) {
  const [menactiveElement, setMenActiveElement] = useState(-1);
  const [devActiveElement, setDevActiveElement] = useState(-1);

  const menHandleClick = (value) => {
    if (value === menactiveElement) {
      setMenActiveElement(-1);
    } else {
      setMenActiveElement(value);
    }
  };
  const devHandleClick = (value) => {
    if (value === devActiveElement) {
      setDevActiveElement(-1);
    } else {
      setDevActiveElement(value);
    }
  };

  return (
    <div id="faq">
      <div id="accordionExample" className="mb-16">
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-b-0 border-secondary ">
          
          <SectionHeading title="Software Development FAQs"/>
          {faqData['development'].map((item, ind) => {
            return (
              <div key={ind}>
                <h2 className="mb-0" id="headingOne">
                  <button
                    className={`${
                      devActiveElement === ind 
                      ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] hover:border-secondary/0`
                      : 'text-content/70 hover:border-secondary'
                    } group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left text-base  font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none border-b-2 border-tertiary`}
                    type="button"
                    onClick={() => devHandleClick(ind)}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {capitalizeFirstLetter(item.question)}
                    <span
                      className={`${
                        devActiveElement === ind
                          ? `rotate-[-180deg] -mr-1`
                          : `rotate-0 fill-secondary`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <TECollapse
                  show={devActiveElement === ind}
                  className="!mt-0 !rounded-b-none !shadow-none"
                >
                  <div className="px-5 py-4" dangerouslySetInnerHTML={{ __html: item.answer }}>
                  </div>
                </TECollapse>
              </div>
            );
          })}

          <SectionHeading title="Mentorship FAQs"/>
          {faqData['mentorship'].map((item, ind) => {
            return (
              <div key={ind}>
                <h2 className="mb-0" id="headingOne">
                  <button
                    className={`${
                      menactiveElement === ind 
                      ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] hover:border-secondary/0`
                      : 'text-content/70 hover:border-secondary'
                    } group relative flex w-full items-center rounded-none border-0 px-5 py-4 text-left text-base  font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none border-b-2 border-tertiary`}
                    type="button"
                    onClick={() => menHandleClick(ind)}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {capitalizeFirstLetter(item.question)}
                    <span
                      className={`${
                        menactiveElement === ind
                          ? `rotate-[-180deg] -mr-1`
                          : `rotate-0 fill-secondary`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <TECollapse
                  show={menactiveElement === ind}
                  className="!mt-0 !rounded-b-none !shadow-none"
                >
                  <div className="px-5 py-4" dangerouslySetInnerHTML={{ __html: item.answer }}>
                  </div>
                </TECollapse>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

FAQ.propTypes = {};

export default FAQ;
