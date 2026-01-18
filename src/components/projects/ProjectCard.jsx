import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { TECarousel, TECarouselItem } from 'tw-elements-react';

// helpers
import { capitalizeWords, truncateText, capitalizeFirstLetter } from "../../helpers/common";

// constants
import svgList from '../../constants/svg'
import imgList from '../../constants/img'

function ProjectCard(props) {
  const { cardTitle, cardDescription, date, tags, imgUrl, projLink, githubLink, category, status, openToContrib, caseStudy } = props;

    const descriptionSize = 150;
    
    // Modal state management
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
    const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);
    const modalRef = useRef(null);
    const fullscreenRef = useRef(null);
    const modalId = `project_modal_${cardTitle.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`;

    // Modal handlers
    const handleOpenModal = () => {
      setIsModalOpen(true);
      modalRef.current?.showModal();
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      modalRef.current?.close();
    };

    // Function to process a single image URL
    const processImageUrl = (url) => {
      if (!url) return null;
      if (typeof url === 'string' && url.startsWith("project:")) {
        return imgList.projects[url.split(":")[1]];
      }
      return url; // HTTP URL or local path
    };

    // Normalize images: convert single string to array, process all images
    const normalizeImages = (imageInput) => {
      if (!imageInput) {
        return [imgList.abstract[Math.floor(Math.random() * imgList.abstract.length)]];
      }
      
      // Convert single string to array
      const imageArray = Array.isArray(imageInput) ? imageInput : [imageInput];
      
      // Process all images
      return imageArray.map(processImageUrl).filter(Boolean);
    };

    // Process all images
    const allImages = normalizeImages(imgUrl);
    const thumbnailUrl = allImages[0]; // Use first image for card thumbnail

    // Fullscreen handlers (defined after allImages)
    const handleOpenFullscreen = (imageIndex) => {
      setFullscreenImageIndex(imageIndex);
      setIsFullscreenOpen(true);
      fullscreenRef.current?.showModal();
    };

    const handleCloseFullscreen = () => {
      setIsFullscreenOpen(false);
      fullscreenRef.current?.close();
    };

    const handleNextFullscreenImage = () => {
      setFullscreenImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const handlePrevFullscreenImage = () => {
      setFullscreenImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    let categoryIcon = svgList.projectList[category];
    let categoryDescription;
    let categoryTitle;

    if (category=='hobby') {
      categoryDescription = 'It is one my hobby projects';
      categoryTitle = capitalizeFirstLetter(category);
    } else if (category=='collab') {
      categoryDescription = 'I am collaborating on this project with other developers';
      categoryTitle = 'Collaboration';
    } else if (category=='corporate') {
      categoryDescription = 'I have contributed/developed it at work';
      categoryTitle = 'Corporate';
    }

    let statusIcon = svgList.projectList.status[status]
    let statusDescription;
    let statusTitle;

    if (status=='ongoing') {
      statusDescription = 'It is currently in progress';
      statusTitle = capitalizeFirstLetter(status);
    } else if (status=='finished') {
      statusDescription = 'It is finished and ready to roll';
      statusTitle = capitalizeFirstLetter(status);
    }
    
    let contribIcon = openToContrib ? svgList.projectList.contrib.open : svgList.projectList.contrib.close 
    let contribDescription;
    let contribTitle;

    if (openToContrib==true) {
      contribDescription = 'I am welcoming any and all contributors';
      contribTitle = 'Contributions Open';
    } else {
      contribDescription = 'No more contribution is needed. But do checkout other projects, they might fancy your interest';
      contribTitle = 'Contributions Closed';
    }


  return (
    <div>
      <div 
        className="mb-6 flex flex-col lg:flex-row w-full cursor-pointer hover:bg-secondary/10"
        onClick={handleOpenModal}
      >
        <div className="mb-6 ml-auto w-full md:w-full lg:w-52 xl:w-52 shrink-0 grow-0 basis-auto px-3 md:mb-0">
          <div
            className="relative mb-6 overflow-hidden rounded-xl lg:rounded-lg xl:rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={thumbnailUrl} className="w-full h-full lg:w-full xl:w-52 lg:h-44 xl:h-44 object-cover"  alt="blog image" />
            <a 
              href={projLink ? projLink : githubLink}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </a>
          </div>
        </div>

        <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 lg:w-9/12 xl:w-7/12">
          
          <div className="flex flex-wrap gap-2">
            <h5 className="mb-1 text-2xl lg:text-lg xl:text-lg font-bold text-content hover:text-primary">
              {cardTitle} 
            </h5>
            {
              projLink 
              && <a 
                href={projLink} 
                className="text-primary mt-[2px]"
                onClick={(e) => e.stopPropagation()}
              >
                {svgList.projectList.projectUrl}
                </a>
            }
            {
              githubLink 
              && <a 
                href={githubLink} 
                className="text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                {svgList.socialIcons.github}
                </a>
            }
          </div>

          <div className="my-1 text-content/60 text-2xl lg:text-lg xl:text-lg flex flex-row gap-2 align-middle center">
            <small>
              { 
                date 
                ? (<><u>{date}</u></>) 
                : (<>Unpublished</>)
               }
            </small>
             | 
            <span title={categoryDescription} className="flex flex-row gap-1 text-sm align-middle hover:cursor-help">
              <img src={categoryIcon}  className="!text-primary hover:text-content h-4 w-4 my-auto" /> 
              {/* <span className='my-auto'>{categoryTitle}</span> */}
            </span>
            
            { status && (
              <span title={statusDescription}  className="flex flex-row gap-1 text-sm align-middle hover:cursor-help">
                <img src={statusIcon}  className="!text-primary hover:text-content h-4 w-4 my-auto" /> 
                {/* <span className='my-auto'>{statusTitle}</span> */}
              </span>
              )
            }

            <span title={contribDescription}  className="flex flex-row gap-1 text-sm align-middle hover:cursor-help">
              <img src={contribIcon}  className="!text-primary hover:text-content h-4 w-4 my-auto" /> 
              {/* <span className='my-auto'>{statusTitle}</span> */}
            </span>            

          </div>

          <div className="my-1 card-actions justify-start ">
            {tags.map((item) => {
              
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

      {/* Modal Dialog */}
      <dialog ref={modalRef} id={modalId} className="modal">
        <div className="modal-box bg-bg2 max-w-3xl w-[91.666667%] max-h-[90vh] overflow-y-auto">
          {/* Header Section */}
          <div className="relative">
            

            {/* Large Project Thumbnail / Carousel */}
            <div className="mb-4 -mx-6 -mt-6">
              {allImages.length === 1 ? (
                // Single image - no carousel
                <img
                  src={allImages[0]}
                  className="w-full h-48 md:h-64 object-cover rounded-t-lg cursor-pointer"
                  alt={cardTitle}
                  onClick={() => handleOpenFullscreen(0)}
                />
              ) : (
                // Multiple images - carousel
                <TECarousel
                  showControls
                  ride="carousel"
                  prevBtnIcon={
                    <div className='hidden md:inline'>
                      <span className="inline-block text-content h-8 w-8 [&>svg]:h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </span>
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Previous
                      </span>
                    </div>
                  }
                  nextBtnIcon={
                    <div className='hidden md:inline'>
                      <span className="inline-block text-content h-8 w-8 [&>svg]:h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Next
                      </span>
                    </div>
                  }
                >
                  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {allImages.map((image, index) => (
                      <TECarouselItem
                        key={index}
                        itemID={index + 1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      >
                        <div 
                          className="relative cursor-pointer"
                          onClick={(e) => {
                            // Only open fullscreen if not clicking on carousel controls
                            const target = e.target;
                            const isButton = target.closest('button') || target.closest('[role="button"]');
                            if (!isButton) {
                              handleOpenFullscreen(index);
                            }
                          }}
                        >
                          <img
                            src={image}
                            className="w-full h-48 md:h-64 object-cover rounded-t-lg"
                            alt={`${cardTitle} - Image ${index + 1}`}
                          />
                        </div>
                      </TECarouselItem>
                    ))}
                  </div>
                </TECarousel>
              )}
            </div>

            {/* Project Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-content mb-3 pr-10">
              {cardTitle}
            </h3>

            {/* External Links */}
            <div className="flex flex-wrap gap-3 mb-4">
              {projLink && (
                <a
                  href={projLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-content transition-colors"
                >
                  {svgList.projectList.projectUrl}
                  <span className="text-sm">Visit Project</span>
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-content transition-colors"
                >
                  {svgList.socialIcons.github}
                  <span className="text-sm">View on GitHub</span>
                </a>
              )}
              {caseStudy && (
                <a
                  href={caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-content transition-colors"
                >
                  {svgList.view}
                  <span className="text-sm">View Case Study</span>
                </a>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-6">
            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-content/60 text-xs md:text-sm mb-4 pb-4 border-b border-content/20">
              <small>
                {date ? <><u>{date}</u></> : <>Unpublished</>}
              </small>
              <span className="text-content/40">|</span>
              <span
                title={categoryDescription}
                className="flex flex-row gap-1 items-center hover:cursor-help"
              >
                <img
                  src={categoryIcon}
                  className="!text-primary hover:text-content h-4 w-4"
                  alt={categoryTitle}
                />
                <span className="text-xs">{categoryTitle}</span>
              </span>
              {status && (
                <>
                  <span className="text-content/40">|</span>
                  <span
                    title={statusDescription}
                    className="flex flex-row gap-1 items-center hover:cursor-help"
                  >
                    <img
                      src={statusIcon}
                      className="!text-primary hover:text-content h-4 w-4"
                      alt={statusTitle}
                    />
                    <span className="text-xs">{statusTitle}</span>
                  </span>
                </>
              )}
              <span className="text-content/40">|</span>
              <span
                title={contribDescription}
                className="flex flex-row gap-1 items-center hover:cursor-help"
              >
                <img
                  src={contribIcon}
                  className="!text-primary hover:text-content h-4 w-4"
                  alt={contribTitle}
                />
                <span className="text-xs">{contribTitle}</span>
              </span>
            </div>

            {/* Full Description */}
            <p className="text-content text-sm md:text-base mb-4 leading-relaxed">
              {cardDescription}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((item, index) => (
                <div
                  key={index}
                  className="badge flex flex-wrap text-content hover:bg-contrast/70 hover:text-white hover:cursor-default font-bold rounded-md border border-contrast/50 px-2 py-0.5 text-sm"
                >
                  {capitalizeWords(item)}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="modal-action mt-6 pt-4 border-t border-content/20">
            <button
              onClick={handleCloseModal}
              className="btn btn-secondary w-full min-h-[44px]"
            >
              Close
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCloseModal}>close</button>
        </form>
      </dialog>

      {/* Fullscreen Image Modal */}
      <dialog ref={fullscreenRef} className="modal">
        <div className="modal-box bg-black/95 max-w-full w-full h-full max-h-full p-0 m-0 rounded-none flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={handleCloseFullscreen}
              className="absolute top-4 right-4 z-20 btn btn-sm btn-circle btn-ghost text-white hover:bg-white/20 min-h-[44px] min-w-[44px]"
              aria-label="Close fullscreen"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons (only if multiple images) */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevFullscreenImage}
                  className="absolute left-4 z-20 btn btn-sm btn-circle btn-ghost text-white hover:bg-white/20 min-h-[44px] min-w-[44px]"
                  aria-label="Previous image"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={handleNextFullscreenImage}
                  className="absolute right-4 z-20 btn btn-sm btn-circle btn-ghost text-white hover:bg-white/20 min-h-[44px] min-w-[44px]"
                  aria-label="Next image"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}

            {/* Fullscreen image */}
            <img
              src={allImages[fullscreenImageIndex]}
              className="max-w-full max-h-full object-contain"
              alt={`${cardTitle} - Image ${fullscreenImageIndex + 1}`}
            />

            {/* Image counter (if multiple images) */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {fullscreenImageIndex + 1} / {allImages.length}
              </div>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCloseFullscreen}>close</button>
        </form>
      </dialog>
    </div>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;
