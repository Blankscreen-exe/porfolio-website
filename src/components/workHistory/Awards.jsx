import React from "react";
import PropTypes from "prop-types";

// Data
import AwardsData from "../../data/awards.json";

// constants
import svgList from "../../constants/svg";
import imgList from "../../constants/img"

// Helpers
import { truncateText, capitalizeFirstLetter, capitalizeWords } from "../../helpers/common";

function Awards(props) {
  return (
    <div>
      <div className="h-full w-full  pt-12 p-4">
        <div className="flex flex-row flex-wrap gap-12 justify-center items-center">
          {AwardsData.map((item, ind) => {
            return (
              <div className="rounded-xl bg-bg2 p-6 text-center shadow-xl mb-12 w-[300px] h-[600px] flex flex-col align-middle space-between">
                
                <div>
                  <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-primary shadow-lg shadow-shadow/40">
                    {item.type == "award" && svgList.awards.award}
                    {item.type == "workshop" && svgList.awards.workshop}
                  </div>

                  <div className="text-darken mb-3 text-2xs text-content/70 flex flex-row gap-4 justify-center">
                    <span className="text-primary my-auto">{svgList.calendar}</span> {item.date}
                  </div>

                  <h1 className="text-darken mb-3 text-xl font-medium text-primary">
                    {capitalizeWords(item.title)}
                  </h1>

                  <p className="px-4 text-content/60">{item.description}</p>
                </div>

                <div>
                  <ul className="mx-6 my-4 ">
                    {item.publishLinks.map((item, ind) => {
                      return (
                        <li className="w-fit h-fit">
                          <a
                            href={item}
                            target="_blank"
                            className="flex flex-row gap-2 align-middle text-sm text-contentLink/90 hover:text-contentLinkHover hover:underline"
                          >
                            {svgList.link}
                            {truncateText(item, 20)}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <img src={imgList.awards[item.imgUrl]} className="rounded-md mt-4 hover:filter brightness-110 hover:brightness-100 transition-all duration-300 hover:cursor-pointer w-full h-40 object-cover"/>
                </div>

              </div>
            );
          })}
          {/* <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
          <svg viewBox=" 0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
        <path
          d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
          fill="#F5F5FC"></path>
        <path
          d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
          fill="#F5F5FC"></path>
        <path
          d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z"
          fill="#F5F5FC"></path>
        <path
          d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z"
          fill="#F5F5FC"></path>
        <path
          d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z"
          fill="#F5F5FC"></path>
        <path
          d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z"
          fill="#F5F5FC"></path>
        </svg>
      </div>
      <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 ">IRRIGATION & DRAINAGE</h1>
      <p class="px-4 text-content/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
        modi
        accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
    </div>
    <div data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
        <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
          <path
            d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
            fill="white"></path>
        </svg>
      </div>
      <h1 class="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">GARDEN BED MAINTENANCE</h1>
      <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
        modi
        accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
    </div> */}
        </div>
      </div>
    </div>
  );
}

Awards.propTypes = {};

export default Awards;
