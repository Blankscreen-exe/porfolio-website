import React from "react";
import PropTypes from "prop-types";

// Constants
import svgList from "../../constants/svg";
import imgList from "../../constants/img";
import socialLinks from '../../data/socialLinks.json'

const ctaText = "Have a Project in Mind? Let's Talk.<br/><br/>No matter how big or small your project is, I'm always interested in hearing new ideas. Drop me a line and let's discuss your vision and how I can help make it a reality.";
const ctaName = "M. Hammad Hassan";
const ctaDesignation = "";

function CtaCard(props) {

  return (
    <div>
      <div className="p-6">
        <div className="relative overflow-hidden rounded-2xl bg-bg2 px-6 pb-9 shadow-xl shadow-shadow mx-auto my-7 sm:px-12 lg:max-w-[80%] lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 ">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-25 saturate-100"
            src={imgList.cta.bg}
            alt=""
          />

          <figure className="relative isolate">
            {/* MAAL Starts */}

            {svgList.quotationMarksCTA}
            <blockquote className="mt-6 text-sm md:text-xl font-normal leading-8 text-white">
              <p dangerouslySetInnerHTML={{ __html : ctaText}}></p>
            </blockquote>
            <figcaption className="mt-6 text-lg leading-6 ">
              <strong className="font-bold text-white">
              &#8211; {ctaName}
              </strong>{" "}
              {/* REVIEW: we don't need this do we? */}
              {/* {ctaDesignation} */}
            </figcaption>

            <div className="flex flex-col justify-around mt-10 md:flex-row lg:flex-row gap-4 md:gap-4 lg:gap-4">
              <a href={socialLinks.linkedin} target='_blank'>
                <div className="text-white hover:bg-white hover:text-black border rounded-md p-3 hover:cursor-pointer transition-all duration-500 flex justify-center gap-2">
                  {svgList.socialIcons.linkedin }
                  LinkedIn
                </div>
              </a>
              <a href={socialLinks.upwork} target='_blank'>
                <div className="text-white hover:bg-white hover:text-black border rounded-md p-3 hover:cursor-pointer transition-all duration-500 flex justify-center gap-2">
                  {svgList.socialIcons.upwork }
                  Upwork
                </div>
              </a>
              <a href={socialLinks.eBizCard} target='_blank'>
                <div className="text-white hover:bg-white hover:text-black border rounded-md p-3 hover:cursor-pointer transition-all duration-500 flex justify-center gap-2">
                  <span class="material-symbols-outlined">
                  id_card
                  </span>
                  E-Business Card
                </div>
              </a>
            </div>

            {/* MAAL Ends */}
          </figure>
        </div>
      </div>
    </div>
  );
}

CtaCard.propTypes = {};

export default CtaCard;
