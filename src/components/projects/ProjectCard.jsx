import React from "react";
import PropTypes from "prop-types";

// helpers
import { capitalizeWords, truncateText, capitalizeFirstLetter } from "../../helpers/common";

// constants
import svgList from '../../constants/svg'
import imgList from '../../constants/img'

function ProjectCard(props) {
  const { cardTitle, cardDescription, date, tags, imgUrl, projLink, githubLink, category, status, openToContrib } = props;

    const descriptionSize = 150;

    let thumbnailUrl;
    if (imgUrl) {
      if (imgUrl.startsWith("project:")) {
        thumbnailUrl = imgList.projects[imgUrl.split(":")[1]]
      } else {
        thumbnailUrl = imgUrl  
      }
    } else {
      thumbnailUrl = imgList.abstract[Math.floor(Math.random() * imgList.abstract.length)]
    }

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
        <a >
      <div className="mb-6 flex flex-col lg:flex-row w-full">
        <div className="mb-6 ml-auto w-full md:w-full lg:w-52 xl:w-52 shrink-0 grow-0 basis-auto px-3 md:mb-0">
          <div
            className="relative mb-6 overflow-hidden rounded-xl lg:rounded-lg xl:rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={thumbnailUrl} className="w-full h-full lg:w-full xl:w-52 lg:h-44 xl:h-44 object-cover"  alt="blog image" />
            <a href={projLink ? projLink : githubLink}>
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
              && <a href={projLink} className="text-primary mt-[2px]" >
                {svgList.projectList.projectUrl}
                </a>
            }
            {
              githubLink 
              && <a href={githubLink} className="text-primary " >
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
        </a>
    </div>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;
