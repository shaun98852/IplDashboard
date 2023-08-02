// Write your code here

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    recentMatches: [],
    matchDetails: [],
    teamImage: '',
    requiredId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamIdAndDetails()
  }

  getTeamIdAndDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const responses = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseDetails = await responses.json()
    const teamImageUrl = responseDetails.team_banner_url
    const recentMatch = responseDetails.recent_matches
    const presentMatchDetail = responseDetails.latest_match_details

    const recentMatches = recentMatch.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    const presentMatchDetails = {
      umpires: presentMatchDetail.umpires,
      result: presentMatchDetail.result,
      manOfTheMatch: presentMatchDetail.man_of_the_match,
      id: presentMatchDetail.id,
      date: presentMatchDetail.date,
      venue: presentMatchDetail.venue,
      competingTeam: presentMatchDetail.competing_team,
      competingTeamLogo: presentMatchDetail.competing_team_logo,
      firstInnings: presentMatchDetail.first_innings,
      secondInnings: presentMatchDetail.second_innings,
      matchStatus: presentMatchDetail.match_status,
    }

    this.setState({
      recentMatches,
      matchDetails: presentMatchDetails,
      teamImage: teamImageUrl,
      requiredId: id,
      isLoading: false,
    })
  }

  render() {
    const {
      matchDetails,
      teamImage,
      recentMatches,
      requiredId,
      isLoading,
    } = this.state
    return (
      <div className={`background ${requiredId}`}>
        {isLoading ? (
          <div testid="loader" className="circleLoader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <img src={teamImage} className="teamImages" alt="team banner" />

            <h1 className="latestMatches">latest Matches</h1>

            <LatestMatch matchDetails={matchDetails} />

            <ul className="unorderedList">
              {recentMatches.map(eachItem => (
                <MatchCard recentMatches={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
