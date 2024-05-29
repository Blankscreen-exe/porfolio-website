import React from 'react'
import PropTypes from 'prop-types'

// Data
import BlogData from '../../data/blogList.json'

// Helpers
import { capitalizeFirstLetter, capitalizeWords } from '../../helpers/common'

// Components
import PageTitle from '../common/PageTitle'
import DataTable from '../common/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import BlogCard from './BlogCard'

function index(props) {
    window.scrollTo(0, 0);
    const columnHelper = createColumnHelper();
  
    const columns = [
      columnHelper.accessor("title", {
        cell: (row) => {
            let rowData = row.row.original;
            console.log(rowData)
            return (<>
                <BlogCard
                    cardTitle={rowData.title}
                    cardDescription={rowData.description}
                    date={rowData.publishDate}
                    tags={rowData.tags}
                    imgUrl={rowData.thumbnailUrl}
                    postLink={rowData.mediumUrl}
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
        <PageTitle title={"Blogs"}/>
        <DataTable data={BlogData} columns={columns} colVisibility={colVisibility}/>
    </div>
  )
}

index.propTypes = {}

export default index
