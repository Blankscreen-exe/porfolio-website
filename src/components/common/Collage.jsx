import React from "react";
import PropTypes from "prop-types";

// data
import awardData from "../../data/awards.json";

// constants
import imgList from '../../constants/img'

function Collage(props) {
  return (
    <div class="mx-auto w-[90%]">
      <div class="grid grid-cols-2 gap-4 bg-tertiary rounded-md p-4">
        {awardData.map((item, ind) => {
          return (
            <div class="overflow-hidden rounded-md bg-white object-contain">
              <img
                src={imgList.awards[item.imgUrl]}
                class="h-[100%] w-[100%]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Collage.propTypes = {};

export default Collage;
