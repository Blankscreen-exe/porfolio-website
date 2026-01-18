import React from 'react'
import PropTypes from 'prop-types'

// Data
import communitiesData from '../../data/communities.json'

// Components
import SectionHeading from '../common/SectionHeading'
import CommunityCard from './CommunityCard'

function Communities(props) {
  return (
    <div>
      <SectionHeading title="Communities I Have Been Part Of" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {communitiesData.map((community, index) => (
          <CommunityCard
            key={index}
            title={community.title}
            description={community.description}
            imageUrl={community.imageUrl}
            websiteUrl={community.websiteUrl}
          />
        ))}
      </div>
    </div>
  )
}

Communities.propTypes = {}

export default Communities
