import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import OpinionPreview from './OpinionPreview'

const style = {
	border: '1pt solid black',
	borderRadius: '25px',
}

const OPINION_FEED_QUERY = gql`
	query OpinionFeedQuery($companyId: ID!, $act: Act!, $first: Int) {
		opinionsFeed(companyId: $companyId, act: $act, first: $first) {
			id
			createdAt
			title
			text
			regardingWhat
			tags
			sources
			writtenBy {
				name
				picture
			}
			affiliationsCount
		}
	}
`

const OpinionFeedPreview = ({ act, companyId, first, location }) => (
	<Query query={OPINION_FEED_QUERY} variables={{ companyId, act, first }}>
		{({ loading, error, data }) => {
			if (loading) return <div> Fetching </div>
			if (error) return <div> Error </div>
			const opinionsFeed = data.opinionsFeed

			return (
				<div style={opinionsFeed.length ? style : {}}>
					<OpinionPreview
						opinionsFeed={opinionsFeed}
						location={location}
						act={act}
					/>
				</div>
			)
		}}
	</Query>
)

export default OpinionFeedPreview
