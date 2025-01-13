import React from 'react'
import PropTypes from 'prop-types'

// Data
import ProjData from '../../data/projectList.json'

// Helpers
import { capitalizeFirstLetter, capitalizeWords } from '../../helpers/common'


// Components
import PageTitle from '../common/PageTitle'
import DataTable from '../common/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import ProjectCard from './ProjectCard'
import Paragraph from '../common/Paragraph'
import ProjectKeys from './ProjectKeys'

function countTags(data) {
  const tagCounts = {};

  // Iterate through the dataset to count tag occurrences
  data.forEach(project => {
      project.tags.forEach(tag => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
  });

  // Convert the tagCounts object into an array of objects
  const result = Object.keys(tagCounts).map(tag => ({
      name: tag,
      count: tagCounts[tag]
  }));

  return result;
}

function index(props) {

    window.scrollTo(0, 0);
    const columnHelper = createColumnHelper();
  
    const columns = [
      columnHelper.accessor("title", {
        cell: (row) => {
            let rowData = row.row.original;
            return (<>
                <ProjectCard
                    cardTitle={rowData.title}
                    cardDescription={rowData.description}
                    date={rowData.publishDate}
                    tags={rowData.tags}
                    imgUrl={rowData.thumbnailUrl}
                    projLink={rowData.projUrl}
                    githubLink={rowData.githubUrl}
                    category={rowData.category}
                    status={rowData.status}
                    openToContrib={rowData.openToContrib}
                />
            </>)
        },
        header: () => (<div style={{display:"none"}}></div>),
        enableSorting: false
      }),
      columnHelper.accessor("tags", {
        cell: (row) => row.getValue().reduce((prevVal, currVal, currInd) => prevVal+","+currVal),
        enableSorting: false,
      }),
    ];
    
    const colVisibility = {
        title: true,
        tags: false
    }
  return (
    <div>
        <PageTitle title={"Projects"}/>
        <Paragraph text={"This portfolio represents a selection of my endeavors, encompassing both professional undertakings within the confines of my employment and those born from personal pursuits.<br/><br/>In case you are woried about the symbols below, here's the key:"}/>

        <ProjectKeys/>

            <br/>
            <br/>

        <DataTable data={ProjData} columns={columns} colVisibility={colVisibility}/>
    </div>
  )
}

index.propTypes = {}

export default index
