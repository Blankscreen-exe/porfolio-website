import React from "react";
import PropTypes from "prop-types";

// helpers
import { capitalizeWords, truncateText } from "../../helpers/common";

function BlogCard(props) {
  const { cardTitle, cardDescription, date, tags, imgUrl, projLink, githubLink } = props;

    const descriptionSize = 150;

  return (
    <div>
        <a href={projLink}>
      <div className="mb-6 flex flex-col lg:flex-row w-full">
        <div className="mb-6 ml-auto w-full md:w-full lg:w-52 xl:w-52 shrink-0 grow-0 basis-auto px-3 md:mb-0">
          <div
            className="relative mb-6 overflow-hidden rounded-xl lg:rounded-lg xl:rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={imgUrl} className="w-full h-full lg:w-full xl:w-52 lg:h-44 xl:h-44 object-cover"  alt="blog image" />
            <a href={projLink}>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </a>
          </div>
        </div>

        <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 lg:w-9/12 xl:w-7/12">
          <h5 className="mb-1 text-2xl lg:text-lg xl:text-lg font-bold text-content hover:text-primary">{cardTitle}</h5>

          <div className="my-1 text-content/60 text-2xl lg:text-lg xl:text-lg">
            <small>
              Published <u>{date}</u>
            </small>
          </div>

          <div className="my-1 card-actions justify-start ">
            {tags.map((item) => {
              console.log(item);
              return (
                <div className="badge flex flex-wrap text-content hover:bg-contrast/70 hover:text-white hover:cursor-default font-bold rounded-md border border-contrast/50 px-2 py-0.5 text-md lg:text-sm xl:text-sm">
                  {capitalizeWords(item)}
                </div>
              );
            })}
          </div>
          <p className="mt-2 text-content text-lg lg:text-sm ">
            {truncateText(cardDescription, descriptionSize)}
          </p>
        </div>
      </div>
        </a>
    </div>
  );
}

BlogCard.propTypes = {};

export default BlogCard;
