// Write your code here

import Loader from 'react-loader-spinner'

import './index.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], loading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const details = await response.json()

    const {teams} = details

    const updatedDetails = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamList: updatedDetails, loading: false})
  }

  render() {
    const {teamList, loading} = this.state
    return (
      <div className="bgContainer">
        {loading ? (
          <div testid="loader" className="loadingCircle">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="headingContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="iplLogoImage"
                alt="ipl logo"
              />
              <h1 className="iplHeading">IPL Dashboard</h1>
            </div>

            <ul className="unList">
              {teamList.map(eachItem => (
                <TeamCard eachTeam={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
