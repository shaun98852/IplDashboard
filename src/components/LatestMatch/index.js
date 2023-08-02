// Write your code here

import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="teamContainer">
      <div className="currentTeamBox">
        <div className="teamDetails">
          <p className="currentTeamHeading">{competingTeam}</p>

          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>

        <img
          src={competingTeamLogo}
          className="teamImage"
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <hr className="horizontalLine" />

      <div className="secondBox">
        <p className="headings">First Innings</p>

        <p className="Answers">{firstInnings}</p>

        <p className="headings">Second Innings</p>

        <p className="Answers">{secondInnings}</p>

        <p className="headings">Man of The Match</p>

        <p className="Answers">{manOfTheMatch}</p>

        <p className="headings">Umpires</p>

        <p className="Answers">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
