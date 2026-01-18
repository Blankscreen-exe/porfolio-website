import React from "react";
import PropTypes from "prop-types";

// helpers
import { truncateText } from "../../helpers/common";

// constants
import svgList from '../../constants/svg'
import imgList from '../../constants/img'

function CommunityCard(props) {
  const { title, description, imageUrl, websiteUrl } = props;

  const descriptionSize = 150;

  // Function to process image URL
  const processImageUrl = (url) => {
    if (!url) return null;
    if (typeof url === 'string' && url.startsWith("img:")) {
      // Resolve from imgList.communities
      const imageName = url.split(":")[1];
      return imgList.communities && imgList.communities[imageName] 
        ? imgList.communities[imageName] 
        : url; // Fallback to original if not found
    }
    return url; // HTTP URL or local path - use as-is
  };

  const processedImageUrl = processImageUrl(imageUrl);

  return (
    <div className="bg-bg2 rounded-lg  p-4 md:p-6 shadow-lg dark:shadow-black/20 hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Square Image on Left */}
        <div className="shrink-0 flex justify-center md:justify-start">
          <img
            src={processedImageUrl}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
            alt={title}
          />
        </div>

        {/* Content on Right */}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h5 className="mb-2 text-xl md:text-lg font-bold text-content hover:text-primary">
              {title}
            </h5>
            <p className="text-sm md:text-base text-content/80 leading-relaxed mb-4">
              {description}
            </p>
          </div>

          {/* Link Button */}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-content transition-colors text-sm font-medium w-fit"
            >
              {svgList.link}
              <span>Visit Website</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

CommunityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default CommunityCard;
