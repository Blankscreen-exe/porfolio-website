import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

// helpers
import { classAdd, capitalizeFirstLetter } from "../../helpers/common";

// data
import servicesData from "../../data/services.json";

function ServicesTabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams({servicetype: 0});

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setSearchParams({servicetype: tabIndex});
  };
  
  useEffect(() => {
    let tabFromSearchParams = parseInt(searchParams.get("servicetype"));
    if (tabFromSearchParams > servicesData.length) {
      setActiveTab(tabFromSearchParams % servicesData.length)
    } else {
      setActiveTab(tabFromSearchParams)
    }
  
    return () => {
      // second
    }
  }, [])
  

  return (
    <div>
      <div className="mb-16 font-sans flex items-center justify-center flex-col">
        <div className="">
          <div className=" mx-auto">
            <div className="mb-16 mx-auto  sm:w-fit md:w-fit lg:w-fit flex flex-wrap justify-center flex-col sm:flex-row sm:space-x-4 p-2 rounded-lg shadow-inner shadow-shadow/50 bg-tertiary focus:outline-none focus:shadow-none">
              {servicesData.map((item, ind) => {
                return (
                  <button
                    key={ind}
                    className={classAdd(
                      " py-2 px-4 mx-0 my-2 sm:my-0 rounded-md focus:outline-none transition-all duration-300 border-none text-contentLink/70 font-bold",
                      activeTab === ind &&
                        "bg-bg1 drop-shadow-md shadow-shadow text-primary"
                    )}
                    onClick={() => handleTabClick(ind)}
                  >
                    {capitalizeFirstLetter(item.title)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
              
        <div id="service-info-container" className="flex flex-col lg:flex-row justify-between gap-6 w-[90%] mx-auto">
          <div className="w-full transition-all duration-300 bg-bg2 p-4 rounded-lg shadow-md border-l-4 border-primary text-content">
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              {capitalizeFirstLetter(servicesData[activeTab].title)}
            </h2>
            <p className="text-content" dangerouslySetInnerHTML={{ __html: capitalizeFirstLetter(servicesData[activeTab].description) }}>
              
            </p>
          </div>

          <div className="w-full md:min-w-96 border border-secondary drop-shadow-sm rounded-md p-4 relative">
            <h3 className="text-contentLink/80 text-xs bg-bg1 absolute -top-2 px-2 shadow-none">I can do the following</h3>
            <ul>
              {servicesData[activeTab].deliverables.map((item, ind) => {
                return <li key={ind}>{capitalizeFirstLetter(item)}</li>;
              })}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

ServicesTabs.propTypes = {};

export default ServicesTabs;
